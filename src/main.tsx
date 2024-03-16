import App from "App";
import "main.css";
import { createRoot } from "react-dom/client";
import { CounterProvider } from "./context/CounterContext";

createRoot(document.getElementById("root")).render(
	<CounterProvider>
		<App />
	</CounterProvider>,
);
