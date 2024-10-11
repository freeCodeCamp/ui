import { useEffect } from "react";

interface Props {
	onWindowClose: () => void;
	onBrowserBack: () => void;
}

export const usePageLeave = ({ onWindowClose, onBrowserBack }: Props) => {
	useEffect(() => {
		window.addEventListener("beforeunload", onWindowClose);
		window.addEventListener("unload", onWindowClose);
		window.addEventListener("popstate", onBrowserBack);

		return () => {
			window.removeEventListener("beforeunload", onWindowClose);
			window.removeEventListener("unload", onWindowClose);
			window.removeEventListener("popstate", onBrowserBack);
		};
	}, []);
};
