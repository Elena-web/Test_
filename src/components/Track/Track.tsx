import React, { useEffect, useRef, useState } from 'react';
import gsap, { TweenVars } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { TrackContainer, Wrapper } from '../Track/Track.styles';
import Descriptions from '../Descriprions/Descriptions';
import Content from '../Content/Content';
import SliderButtons from '../SliderButtons/SliderButtons';
import Dates from '../Dates/Dates';
import Counter from '../Counter/Counter';
import Slider from '../Slider';
import { Swiper as SwiperType } from 'swiper';
import buildCarousel from '../BuildCarousel';

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

export const Track: React.FC = () => {
  gsap.registerPlugin(Draggable);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<CarouselSelf | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const datesList = [
    { start: '1991', end: '2003' },
    { start: '1987', end: '1991' },
    { start: '1992', end: '1997' },
    { start: '1999', end: '2003' },
    { start: '1993', end: '2004' },
    { start: '2015', end: '2022' },
  ];
  const slidesData = [
	{
	  id: "block-1",
	  slides: [
		{ year: "1991", description: 'Выпуск альбома "Nevermind" группы Nirvana' },
		{ year: "1993", description: 'Проведение первого MTV Video Music Awards' },
		{ year: "1995", description: 'Выпуск альбома "The Score" группы Fugees' },
		{ year: "2000", description: 'Выпуск альбома "No Strings Attached" группы *NSYNC' },
		{ year: "2003", description: 'Выход альбома "Get Rich or Die Tryin" 50 Cent' },
	  ],
	},
	{
	  id: "block-2",
	  slides: [
		{ year: "1987", description: '"Хищник"/Predator, США (реж. Джон Мактиран)' },
		{ year: "1988", description: '"Кто подставил кролика Роджера"/Who Framed Roger Rabbit, США (реж. Роберт Земекис)' },
		{ year: "1989", description: '"Назад в будущее 2"/Back To The Future 2, США (реж. Роберт Земекис)' },
		{ year: "1990", description: '"Крепкий орешек 2"/Die Hard 2, США (реж. Ренни Харлин)' },
		{ year: "1991", description: '"Семейка Адамс"/The Addams Family, США (реж. Барри Зонненфельд)' },
	  ],
	},
	{
	  id: "block-3",
	  slides: [
		{ year: "1992", description: 'Нобелевская премия по литературе - Дерек Уолкотт, "За блестящий образец карибского эпоса в 64 разделах"' },
		{ year: "1994", description: '"Бессонница" - роман Стивена Кинга' },
		{ year: "1995", description: 'Нобелевская премия по литературе - Шеймас Хини' },
		{ year: "1997", description: '"Гарри Поттер и философский камень" - Джоан Роулинг' },
	  ],
	},
	{
	  id: "block-4",
	  slides: [
		{ year: "1999", description: 'премьера балета "Золушка" в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона' },
		{ year: "2000", description: 'возобновлено издание журнала "Театр"' },
		{ year: "2002", description: 'премьера трилогии Тома Стоппарда "Берег Утопии", Королевский Национальный театр, Лондон' },
		{ year: "2003", description: 'в Венеции торжественно открыли театр "Ля Фениче", восстановленный после пожара' },
	  ],
	},
	{
	  id: "block-5",
	  slides: [
		{ year: "1993", description: 'Премьера мюзикла "The Phantom of the Opera" в Лондоне' },
		{ year: "1996", description: 'Премьера "Rent" на Бродвее' },
		{ year: "1998", description: 'Премьера пьесы "The Vagina Monologues" Эвы Энслер' },
		{ year: "2000", description: 'Открытие театра "The Royal Court Theatre" в Лондоне с новой программой' },
		{ year: "2004", description: 'Премьера мюзикла "Wicked" на Бродвее' },
	  ],
	},
	{
	  id: "block-6",
	  slides: [
		{ year: "2015", description: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' },
		{ year: "2016", description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11' },
		{ year: "2017", description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi' },
		{ year: "2018", description: 'Старт космического аппарата Solar Probe Plus, предназначенного для изучения солнца' },
		{ year: "2019", description: 'Google объявил о создании 53-кубитного квантового компьютера' },
		{ year: "2020", description: 'Корабль Crew Dragon вернудся на Землю из первого пилотируемого полёта' },
	  ],
	},
  ];

  const updateDescriptionBlock = (index: number) => {
	const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];
	setActiveIndex(index);
	const descriptionBlocks = document.querySelectorAll<HTMLDivElement>('.swiper');
	
	descriptionBlocks.forEach((block, idx) => {
		block.style.display = 'none';
	});
	setTimeout(() => {
	if (index < descriptionBlocks.length) {
	  const activeBlock = descriptionBlocks[index] as HTMLDivElement;
	  activeBlock.style.display = 'block';
	} else {
	  console.warn('Index out of bounds:', index);
	}
}, 500); 
};

  const handlePrevClick = (e: React.MouseEvent) => {
	e.stopPropagation();
	const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];
	const currentIndex = items.indexOf(carouselRef.current?.activeElement()!);
	let index = (currentIndex - 1 + items.length) % items.length;
	updateDescriptionBlock(index);
	carouselRef.current?.previous();
	swiperRef.current?.slidePrev(); 
  };

  const handleNextClick = (e: React.MouseEvent) => {
	e.stopPropagation();
	const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];
	const currentIndex = items.indexOf(carouselRef.current?.activeElement()!);
	let index = (currentIndex + 1) % items.length;
	updateDescriptionBlock(index);
	carouselRef.current?.next();
	swiperRef.current?.slideNext();
  };

  useEffect(() => {
  const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];

  carouselRef.current = buildCarousel(items, {
    radiusX: 250,
    radiusY: 210,
    activeAngle: 300,
    draggable: true,
    autoAdvance: false,
    onClick(element: HTMLDivElement, self: any) {
      let index = items.indexOf(element);
      setActiveIndex(index);
      updateDescriptionBlock(index);
      self.to(element, { duration: 1, ease: "power1.inOut" }, "short");
    },
    onActivate(element: HTMLDivElement, self: any) {
      element.classList.add("active");
    },
    onDeactivate(element: HTMLDivElement, self: any) {
      element.classList.remove("active");
    },
  });
  updateDescriptionBlock(0);
  const mm = gsap.matchMedia();
  mm.add("(min-width: 800px)", () => carouselRef.current?.resize(265, 266));
  mm.add("(max-width: 799px)", () => carouselRef.current?.resize(180, 150));

}, []);

  return (
	<>
    <TrackContainer>
      <Wrapper>
        <Descriptions activeIndex={activeIndex} />
        <Content itemRefs={itemRefs} />
		<Dates datesList={datesList} activeIndex={activeIndex} />
		<Counter current={activeIndex + 1} total={datesList.length} />
      </Wrapper>
      <SliderButtons onPrevClick={handlePrevClick} onNextClick={handleNextClick}/>
    </TrackContainer>
	<Slider slidesData={slidesData} />
	</>
  );
}

export default Track;