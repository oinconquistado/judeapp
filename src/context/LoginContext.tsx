import * as React from "react";
import {createContext, useContext, useState} from "react";
import {useBoolean, useTimeout} from "hooks";

interface ILoginContext {
	email: string;
	password: string;
	showPassword: boolean;
	forgotPassword: boolean;
	changeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
	changePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
	tooglePasswordView: () => void;
	toogleForgotPassword: () => void;
}

const LoginContext = createContext({} as ILoginContext);

const LoginProvider = ({children}: { children: React.ReactNode }) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [forgotPassword, setForgotPassword] = useState<boolean>(false);


    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        useTimeout(() => setEmail(e.target.value), 0);
    }

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		useTimeout(() => setPassword(e.target.value), 0);
    }
    const tooglePasswordView = () => useBoolean(setShowPassword);

    const toogleForgotPassword = () => useBoolean(setForgotPassword);

	const LoginContextItems: ILoginContext ={
		email,
		password,
		showPassword,
		forgotPassword,
		changeEmail,
		changePassword,
		tooglePasswordView,
		toogleForgotPassword
	}


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
