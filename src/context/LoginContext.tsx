import {useBoolean, useTimeout} from "hooks";
import * as React from "react";
import {createContext, useContext, useState} from "react";

interface ILoginContext {
    email: string;
    password: string;
    showPassword: boolean;
    forgotPassword: boolean;
    changeEmail: (value: string) => void;
    changePassword: (value: string) => void;
    tooglePasswordView: () => void;
    toogleForgotPassword: () => void;
}

const LoginContext = createContext({} as ILoginContext);

const LoginProvider = ({children}: { children: React.ReactNode }) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [forgotPassword, setForgotPassword] = useState<boolean>(false);

    const changeEmail = (value: string) => {
        useTimeout(() => setEmail(value), 0);
    };

    const changePassword = (value: string) => {
        useTimeout(() => setPassword(value), 0);
    };
    const tooglePasswordView = () => useBoolean(setShowPassword);

    const toogleForgotPassword = () => useBoolean(setForgotPassword);

    const LoginContextItems: ILoginContext = {
        email,
        password,
        showPassword,
        forgotPassword,
        changeEmail,
        changePassword,
        tooglePasswordView,
        toogleForgotPassword,
    };

    return (
        <LoginContext.Provider value={LoginContextItems}>
            {children}
        </LoginContext.Provider>
    );
};

const useLoginContext = () => {
    return useContext(LoginContext);
};

export {LoginProvider, useLoginContext};
