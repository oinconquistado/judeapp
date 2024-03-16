import { createContext, useContext, useState } from "react";
import * as React from "react";

interface ICounterContext {
	count: number;
	increment: () => void;
	decrement: () => void;
}

const CounterContext = createContext({} as ICounterContext);

const CounterProvider = ({ children }: { children: React.ReactNode }) => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};
	const decrement = () => {
		if(count === 0) return;
		setCount(count - 1);
	};

	return (
		<CounterContext.Provider value={{ count, increment, decrement }}>
			{children}
		</CounterContext.Provider>
	);
};

const useCounterContext = () => {
	return useContext(CounterContext);
};

export { CounterProvider, useCounterContext };
