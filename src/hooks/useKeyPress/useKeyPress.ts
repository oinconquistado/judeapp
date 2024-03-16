import * as React from "react";

const useKeyPress = (
	event: React.KeyboardEvent,
	action: () => void,
	keys: string[],
) => {
	if (keys.includes(event.key)) {
		action();
	}
};

export default useKeyPress;
