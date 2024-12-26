// Build carousel function
import gsap, { TweenVars } from 'gsap';

interface CarouselSelf {
	rotation(value?: number): number;
	render(): void;
	activeElement(): HTMLDivElement;
	next(): void;
	previous(): void;
	to(element: HTMLDivElement): void;
	elementRotation(element: HTMLDivElement): number;
	resize(rx: number, ry: number): void;
	autoAdvanceCall?: any;
	onStop?: (element: HTMLDivElement, self: CarouselSelf) => void;
	onActivate?: (element: HTMLDivElement, self: CarouselSelf) => void;
	onDeactivate?: (element: HTMLDivElement, self: CarouselSelf) => void;
  }

const buildCarousel = (targets: HTMLDivElement[], options: any) => {
    targets = gsap.utils.toArray(targets);
    gsap.set(targets, { xPercent: -50, yPercent: -50 });
    const DEG2RAD = Math.PI / 180;
    const quantity = targets.length;
    const angleInc = 360 / quantity;
    const wrap = gsap.utils.wrap(0, quantity);
    const angleWrap = gsap.utils.wrap(0, 360);
    let rotation = 0;
    let activeElement = targets[0];
    const self: CarouselSelf = {
      rotation(value?: number) {
        if (arguments.length) {
          if (value !== undefined) {
            let prevActive = activeElement;
            rotation = angleWrap(value);
            activeElement = targets[wrap(Math.round(-value / angleInc))];
            self.render();
            if (prevActive !== activeElement) {
              options.onDeactivate && prevActive && options.onDeactivate(prevActive, self);
              options.onActivate && options.onActivate(activeElement, self);
            }
          }
        }
        return rotation;
      },
      render() {
        const inc = angleInc * DEG2RAD;
        let a = (rotation + options.activeAngle) * DEG2RAD;
        targets.forEach((target) => {
          gsap.set(target, {
            x: Math.round(Math.cos(a) * options.radiusX),
            y: Math.round(Math.sin(a) * options.radiusY),
          });
          a += inc;
        });
      },
      activeElement() {
        return activeElement;
      },
      next() {
        const nextElement = targets[wrap(targets.indexOf(activeElement) + 1)];
        self.to(nextElement);
      },
      previous() {
        const prevElement = targets[wrap(targets.indexOf(activeElement) - 1)];
        self.to(prevElement);
      },
      to(this: CarouselSelf, elOrRotation: HTMLDivElement | number, vars: TweenVars = {}) {
        vars = vars || {};
        if (typeof elOrRotation === "number") {
          vars.rotation = elOrRotation;
        } else {
          vars.rotation = this.elementRotation(elOrRotation);
        }
        vars.overwrite = true;
        let { onUpdate, onComplete } = vars,
          _onStart = vars.onStart;
        this.autoAdvanceCall && this.autoAdvanceCall.pause();
        vars.onStart = () => {
          _onStart && _onStart.call(this);
          _onStart && _onStart(this.activeElement(), this);
        };
        vars.onComplete = () => {
          this.onStop && this.onStop(this.activeElement(), this);
          onComplete && onComplete.call(this);
          this.autoAdvanceCall && this.autoAdvanceCall.restart(true);
        };
        return gsap.to(this, vars);
      },
      elementRotation(element: HTMLDivElement) {
        return (quantity - targets.indexOf(element)) * angleInc;
      },
      resize(rx: number, ry: number) {
        options.radiusX = rx;
        options.radiusY = ry;
        self.render(); // Re-render to apply the new radius
      },
    };
    targets.forEach((el) => {
      el.addEventListener("click", (e: MouseEvent) => {
        options.onClick && options.onClick(e.currentTarget as HTMLDivElement, self);
      });
    });
    return self;
  }

export default buildCarousel;