import App from "App";
import "main.css";
import {createRoot} from "react-dom/client";
import {CounterProvider} from "./context/CounterContext";
import {ChakraProvider} from '@chakra-ui/react'


createRoot(document.getElementById("root")).render(
    <ChakraProvider>
        <CounterProvider>
            <App/>
        </CounterProvider>
    </ChakraProvider>
);
