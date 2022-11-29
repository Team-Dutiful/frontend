import { ReactNode } from "react";
import ReactDom from "react-dom";

interface ModalPortalProps {
	children: ReactNode;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
	const element = document.getElementById("modal-root") as HTMLElement;

	return ReactDom.createPortal(children, element);
};

export default ModalPortal;
