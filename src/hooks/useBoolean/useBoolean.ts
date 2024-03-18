import * as React from "react";

const useBoolean = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
	setTimeout(() => setter((prev) => !prev), 0);
};

export default useBoolean;
