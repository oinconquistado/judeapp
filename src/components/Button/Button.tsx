import { IButtonProps } from "components/Button/interface/IButtonProps";
import { useKeyPress } from "hooks";
import * as React from "react";
const Button = (Args: IButtonProps) => {
	const { action, value, className } = Args;

	const handleClick = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		event.preventDefault();
		action();
	};

	const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
		event.preventDefault();
		useKeyPress(event, action, ["Enter", ""]);
	};

	return (
		<button
			type="button"
			className={className}
			onClick={(event) => handleClick(event)}
			onKeyDown={(event) => handleKeyPress(event)}
		>
			{value}
		</button>
	);
};

export default Button;
