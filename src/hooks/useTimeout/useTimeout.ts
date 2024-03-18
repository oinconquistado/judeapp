const useTimeout = (callback: () => void, delay = 0) => {
	setTimeout(() => callback(), delay);
};

export default useTimeout;
