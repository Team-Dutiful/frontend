import styled from "styled-components";

const data = {
	DAY: { name: "DAY", color: "#FF9F9F" },
	EVE: { name: "EVE", color: "#FFDF8D" },
	NIGHT: { name: "NIGHT", color: "#63E2BC" },
	OFF: { name: "OFF", color: "#9BC9FF" },
	ETC: { name: "ETC", color: "#9BC9FF" },
	SKIP: { name: "SKIP", color: "#DFDFDF" },
	DELETE: { name: "DELETE", color: "#E33333" },
};

interface TypeButtonProps {
	type: "DAY" | "EVE" | "NIGHT" | "OFF" | "ETC" | "SKIP" | "DELETE";
}

export const WorkTypeButton = ({ type }: TypeButtonProps) => {
	return <Button color={data[type].color}>{data[type].name}</Button>;
};

export const ActionTypeButton = ({ type }: TypeButtonProps) => {
	return <Button color={data[type].color}>{data[type].name}</Button>;
};

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => (props.color ? props.color : "DFDFDF")};
	color: white;
	width: 72px;
	height: 32px;
	padding: 8px;
	border-radius: 5px;
	border: none;
	font-size: 1rem;
`;
