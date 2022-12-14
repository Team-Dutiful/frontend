import { ReactElement } from "react";
import styled from "styled-components";

interface ModalProps {
	children: ReactElement;
	onClose?: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
	return <ModalContainer onClick={onClose}>{children}</ModalContainer>;
};

export default Modal;

const ModalContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	left: 0;
	top: 0;
	text-align: center;
	background: rgba(0, 0, 0, 0.35);
`;
