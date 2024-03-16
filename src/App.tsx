import { Button } from "components";
import { useCounterContext } from "context/CounterContext";
import { Helmet } from "react-helmet";

const App = () => {
	const { count, increment, decrement } = useCounterContext();

	return (
		<>
			<Helmet>
				<title>{count.toString()}</title>
			</Helmet>
			<div className="flex items-center justify-center h-screen">
				<Button className="w-8 h-8 mr-2 text-4xl font-bold" value="+" action={increment} />
				<p className="text-4xl font-bold">{count}</p>
				<Button className="w-8 h-8 ml-2 text-4xl font-bold" value="-" action={decrement} />
			</div>
		</>
	);
};

export default App;
