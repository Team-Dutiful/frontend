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
			<CalendarIcon className="calendar-icon" onClick={toggleEditMode} />
			<ShareIcon className="share-icon" onClick={onOpenModal} />
		</HeaderContainer>
	);
};

export default Header;

const HeaderContainer = styled.header`
	height: 60px;
	display: flex;
	justify-content: end;
	padding-right: 32px;

	svg {
		cursor: pointer;
	}

	.calendar-icon {
		width: 32px;
		height: 32px;
		margin-top: 20px;
	}

	.share-icon {
		width: 17px;
		height: 20px;
		margin-left: 12px;
		margin-top: 26px;
	}
`;
