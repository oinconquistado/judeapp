import { useLoginContext } from "context/LoginContext";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import React from "react";

const Login = () => {
	const {
		email,
		password,
		showPassword,
		togglePasswordView,
		changeEmail,
		changePassword,
	} = useLoginContext();

	const inputType = showPassword ? "text" : "password";

	return (
		<div className="grid place-items-center min-h-screen overflow-hidden">
			<div className="flex flex-col gap-5 p-5 w-9/12 sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12">
				<div>
					<h2 className="text-4xl font-bold">Login</h2>
				</div>
				<div className="p-inputgroup flex-1">
					<span className="p-inputgroup-addon">
						<i className="pi pi-user" />
					</span>
					<InputText
						value={email}
						onChange={(event) => changeEmail(event.target.value)}
						type="email"
						placeholder="email"
					/>
				</div>
				<div className="p-inputgroup flex-1">
					<span className="p-inputgroup-addon">
						<i className="pi pi-user" />
					</span>
					<InputText
						value={password}
						onChange={(event) => changePassword(event.target.value)}
						type={inputType}
						placeholder="password"
					/>
					<span className="p-inputgroup-addon" onClick={togglePasswordView} onKeyDown={togglePasswordView}>
						{showPassword ? (
							<i className="pi pi-eye-slash" />
						) : (
							<i className="pi pi-eye" />
						)}
					</span>
				</div>
				<div className="flex justify-end">
					<a href="http://www.google.com">
						<p className="text-xs">Esqueceu a senha?</p>
					</a>
				</div>
				<div className="w-full border">
					<Button className="w-full" label="Entrar" />
				</div>
			</div>
		</div>
	);
};

export default Login;
