import styled from "styled-components";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar_function_icon.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/calendar_share_icon.svg";

interface HeaderProps {
	isEditMode: boolean;
	onOpenModal: () => void;
	toggleEditMode: () => void;
}

const Header = ({ isEditMode, onOpenModal, toggleEditMode }: HeaderProps) => {
	return (
		<HeaderContainer>
			<CalendarIconBox isEdit={isEditMode}>
				<CalendarIcon onClick={toggleEditMode} />
			</CalendarIconBox>
			<ShareIcon className="share-icon" onClick={onOpenModal} />
		</HeaderContainer>
	);
};

export default Header;

const HeaderContainer = styled.header`
	height: 6%;
	display: flex;
	align-items: center;
	justify-content: end;
	gap: 8px;
	padding: 8px 8px 0 0;
	box-sizing: border-box;

	.share-icon {
		cursor: pointer;
		width: 21px;
		height: 21px;
	}
`;

const CalendarIconBox = styled.div<{ isEdit: boolean }>`
	cursor: pointer;
	background-color: ${(props) => (props.isEdit ? "#6cb1f2" : "transparent")};

	svg {
		width: 32px;
		height: 32px;
	}
`;
