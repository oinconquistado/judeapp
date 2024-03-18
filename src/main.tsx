import App from "App";
import { LoginProvider } from "context/LoginContext";
import "main.css";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
	<PrimeReactProvider>
		<LoginProvider>
			<App />
		</LoginProvider>
	</PrimeReactProvider>,
);
