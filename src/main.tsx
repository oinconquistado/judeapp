import App from "App";
import "main.css";
import {createRoot} from "react-dom/client";
import {LoginProvider} from "context/LoginContext";
import {ChakraProvider} from '@chakra-ui/react'


createRoot(document.getElementById("root")).render(
    <ChakraProvider>
        <LoginProvider>
            <App/>
        </LoginProvider>
    </ChakraProvider>
);
