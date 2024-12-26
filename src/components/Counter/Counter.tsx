import React from 'react';
import CounterContainer from './Counter.styles';

interface CounterProps {
    current: number;
    total: number;
}

const Counter: React.FC<CounterProps> = ({ current, total }) => {
	
    return (
        <CounterContainer>
            <span className="current">{String(current).padStart(2, '0')}
			</span>
			/<span className="total">{String(total).padStart(2, '0')}</span>
        </CounterContainer>
    );
};

export default Counter;