import { useEffect, useState } from "react";
import styled from "styled-components";
import FootNavigation from "../../components/footNavigation";
import { ReactComponent as DownloadIcon } from "../../assets/icons/group_download_icon.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/group_share_icon.svg";
import { ReactComponent as LeftIcon } from "../../assets/icons/group_left_icon.svg";

import Filter from "./filter";
import CustomCalendar from "./customCalendar";
import { data, Member } from "./members";
import GroupFilter from "./groupFilter";

interface GroupCalendarProps {
	title?: string;
}

const GroupCalendar = ({ title = "신생아실 간호사 모임" }: GroupCalendarProps) => {
	const [filterModal, setFilterModal] = useState(false);
	const [selected, setSelected] = useState<string[]>([]);
	const [works, setWorks] = useState<string[]>(["DAY", "EVE", "OFF", "NIGHT", "ETC"]);
	const [filteredData, setFilteredData] = useState<Member[]>([]);

	// const filteredData = data.map((i) => i);

	const handleClickBackButton = () => {
		console.log("back");
	};

	const handleClickDownloadButton = () => {
		console.log("download");
	};

	const handleClickShareButton = () => {
		console.log("share");
	};

	const handleClickOpenFilter = () => {
		setFilterModal(true);
	};

	const handleClickCloseFilter = () => {
		setFilterModal(false);
	};

	const saveFilteredMember = (members: string[]) => {
		setSelected(members);
	};

	const saveFilteredWork = (works: string[]) => {
		setWorks(works);
	};

	useEffect(() => {
		setFilteredData(data.map((i) => i));
		setSelected(data.map((i) => i.name));
	}, []);

	useEffect(() => {
		const filtered = data.filter((i) => {
			return selected.includes(i.name);
		});
		setFilteredData(filtered);
	}, [selected]);

	return (
		<>
			<GroupCalendarContainer>
				<GroupCalendarPage>
					<GroupCalendarHeader>
						<GroupCalendarIconButton onClick={handleClickBackButton}>
							<LeftIcon />
						</GroupCalendarIconButton>
						<GroupCalendarTitle>{title}</GroupCalendarTitle>
						<GroupCalendarIconButton onClick={handleClickDownloadButton}>
							<DownloadIcon />
						</GroupCalendarIconButton>
						<GroupCalendarIconButton onClick={handleClickShareButton}>
							<ShareIcon />
						</GroupCalendarIconButton>
					</GroupCalendarHeader>
					<GroupCalendarBox>
						<CustomCalendar data={filteredData} />
					</GroupCalendarBox>
					<Filter members={filteredData.map((i) => i.name)} works={works} onClick={handleClickOpenFilter} />
				</GroupCalendarPage>
				<FootNavigation />
			</GroupCalendarContainer>
			{filterModal && (
				<GroupFilter
					members={data.map((i) => i.name)}
					selected={selected}
					onClose={handleClickCloseFilter}
					saveFilteredMember={saveFilteredMember}
					saveFilteredWork={saveFilteredWork}
				/>
			)}
		</>
	);
};

export default GroupCalendar;

const GroupCalendarContainer = styled.div`
	position: relative;
	height: 100vh;
	width: 100%;
`;

const GroupCalendarPage = styled.div`
	position: relative;
	height: calc(100% - 84px);
`;

const GroupCalendarBox = styled.div`
	height: calc(100% - 220px);
	overflow: scroll;
`;

const GroupCalendarHeader = styled.header`
	display: flex;
	align-items: center;
	padding: 20px 20px 20px 5px;
	gap: 5px;
	background: transparent;
`;

const GroupCalendarTitle = styled.p`
	width: 100%;
	font-weight: 800;
	font-size: 16px;
	text-align: left;
	padding-bottom: 2px;
	color: #000000;
`;

const GroupCalendarIconButton = styled.button`
	border: none;
	outline: none;
	background-color: transparent;
`;
