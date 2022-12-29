import styled from "styled-components";
import { ReactComponent as RefreshIcon } from "../../assets/icons/refresh_button_icon.svg";
import { ReactComponent as BackIcon } from "../../assets/icons/back_button_icon.svg";
import { useState, useEffect } from "react";

interface GroupFilterProps {
	members: string[];
	selected: string[];
	works: string[];
	onClose: () => void;
	saveFilteredMember: (members: string[]) => void;
	saveFilteredWork: (works: string[]) => void;
}

const GroupFilter = ({ members, selected, works, onClose, saveFilteredMember, saveFilteredWork }: GroupFilterProps) => {
	const WORKS = ["DAY", "EVE", "OFF", "NIGHT", "ETC"];
	const [selecedtMembers, setSelectedMembers] = useState<string[]>(selected);
	const [selectedWorks, setSelectedWorks] = useState<string[]>(works);

	const handleClickMember = (member: string) => {
		setSelectedMembers((prev) => {
			if (prev.includes(member)) {
				// 선택된 멤버가 있으면 리스트에서 빼기
				if (prev.length === members.length) {
					return [member];
				} else {
					return prev.filter((i) => i !== member);
				}
			} else {
				// 선택된 멤버 리스트에서 넣기
				return [...prev, member];
			}
		});
	};

	const handleClickAllMembers = () => {
		setSelectedMembers(members);
	};

	const handleClickWork = (work: string) => {
		setSelectedWorks((prev) => {
			if (prev.includes(work)) {
				if (prev.length === WORKS.length) {
					return [work];
				} else {
					return prev.filter((i) => i !== work);
				}
			} else {
				return [...prev, work];
			}
		});
	};

	const handleClickAllWorks = () => {
		setSelectedWorks(WORKS);
	};

	const handleClickApply = () => {
		saveFilteredMember(selecedtMembers);
		saveFilteredWork(selectedWorks);
		onClose();
	};

	return (
		<GroupFilterContainer>
			<GroupFilterTitleBox>
				<IconBar>
					<BackIcon onClick={onClose} />
					<RefreshIcon />
				</IconBar>
				<GroupFilterTitle>그룹 필터</GroupFilterTitle>
			</GroupFilterTitleBox>
			<MemberBox>
				<MemberTitle>멤버</MemberTitle>
				{members.map((member, i) => {
					if (i == 0) {
						return (
							<MemberContainer key={member}>
								<MemberNameBox
									isExist={true}
									selected={selecedtMembers.length === members.length}
									onClick={handleClickAllMembers}
								>
									전체보기
								</MemberNameBox>
								{members[0] ? (
									<MemberNameBox
										isExist={true}
										selected={selecedtMembers.length !== members.length && selecedtMembers.includes(member)}
										onClick={() => handleClickMember(member)}
									>
										{member}
									</MemberNameBox>
								) : (
									<MemberNameBox isExist={false}></MemberNameBox>
								)}
							</MemberContainer>
						);
					} else if (i % 2 !== 0 && i > 0) {
						return (
							<MemberContainer key={member}>
								<MemberNameBox
									isExist={true}
									selected={selecedtMembers.length !== members.length && selecedtMembers.includes(member)}
									onClick={() => handleClickMember(member)}
								>
									{member}
								</MemberNameBox>
								{members[i + 1] ? (
									<MemberNameBox
										isExist={true}
										selected={selecedtMembers.length !== members.length && selecedtMembers.includes(members[i + 1])}
										onClick={() => handleClickMember(members[i + 1])}
									>
										{members[i + 1]}
									</MemberNameBox>
								) : (
									<MemberNameBox isExist={false}></MemberNameBox>
								)}
							</MemberContainer>
						);
					}
				})}
			</MemberBox>
			<WorkBox>
				<WorkTitle>근무</WorkTitle>
				<WorkTypeWrapper>
					<WorkTypeBoxWrapper>
						<WorkTypeBox
							id="all"
							bgColor="#FFD9D9"
							selected={selectedWorks.length === WORKS.length}
							onClick={handleClickAllWorks}
						>
							전체보기
						</WorkTypeBox>
						<WorkTypeBox
							id="DAY"
							bgColor="#FFD9D9"
							selected={selectedWorks.length !== WORKS.length && selectedWorks.includes("DAY")}
							onClick={() => handleClickWork("DAY")}
						>
							DAY
						</WorkTypeBox>
					</WorkTypeBoxWrapper>
					<WorkTypeBoxWrapper>
						<WorkTypeBox
							id="EVE"
							bgColor="#FFB9B9"
							selected={selectedWorks.length !== WORKS.length && selectedWorks.includes("EVE")}
							onClick={() => handleClickWork("EVE")}
						>
							EVENING
						</WorkTypeBox>
						<WorkTypeBox
							id="NIGHT"
							bgColor="#B2FFE8"
							selected={selectedWorks.length !== WORKS.length && selectedWorks.includes("NIGHT")}
							onClick={() => handleClickWork("NIGHT")}
						>
							NIGHT
						</WorkTypeBox>
					</WorkTypeBoxWrapper>
					<WorkTypeBoxWrapper>
						<WorkTypeBox
							id="OFF"
							bgColor="#BBE7FF"
							selected={selectedWorks.length !== WORKS.length && selectedWorks.includes("OFF")}
							onClick={() => handleClickWork("OFF")}
						>
							OFF
						</WorkTypeBox>
						<WorkTypeBox
							id="ETC"
							bgColor="#D5CEFF"
							selected={selectedWorks.length !== WORKS.length && selectedWorks.includes("ETC")}
							onClick={() => handleClickWork("ETC")}
						>
							ETC
						</WorkTypeBox>
					</WorkTypeBoxWrapper>
				</WorkTypeWrapper>
			</WorkBox>
			<ButtonBox>
				<GroupFilterButton bgColor="#e86464" fontColor="#fff" onClick={handleClickApply}>
					적용하기
				</GroupFilterButton>
				<GroupFilterButton bgColor="#fff" fontColor="#3a3a3a" onClick={onClose}>
					취소
				</GroupFilterButton>
			</ButtonBox>
		</GroupFilterContainer>
	);
};

export default GroupFilter;

const GroupFilterContainer = styled.div`
	position: absolute;
	top: 0;
	display: flex;
	flex-direction: column;
	gap: 60px;
	height: 100vh;
	width: 100%;
	align-items: center;

	background-color: #fff;
`;

const IconBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	svg:nth-child(2) {
		margin-right: 10px;
	}
`;

const GroupFilterTitleBox = styled.div`
	background-color: #ff9595;
	width: 360px;
	text-align: center;
`;

const GroupFilterTitle = styled.title`
	display: block;
	padding-top: 12px;
	padding-bottom: 12px;
	font-weight: bold;
	font-family: sans-serif;
	color: #000000;
`;

const MemberBox = styled.div`
	background-color: white;

	width: 360px;
	padding: 25px;
	box-sizing: border-box;
	flex-wrap: wrap;
`;

const MemberContainer = styled.div`
	width: 310px;
	background-color: white;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const MemberNameBox = styled.div<{ isExist: boolean; selected?: boolean }>`
	height: 36px;
	width: 155px;
	background-color: ${(props) => (props.selected ? "#ffe2e2" : "#fff")};
	border: 0.5px solid #dbdbdb;

	font-size: 16px;
	font-family: sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;

	visibility: ${(props) => (props.isExist ? "visible" : "hidden")};
`;

const MemberTitle = styled.title`
	display: block;
	font-weight: bold;
	font-family: sans-serif;
	color: #505050;
	padding-bottom: 16px;
`;

const WorkBox = styled.div`
	background-color: white;
	width: 360px;
	padding: 25px;
	box-sizing: border-box;
	flex-wrap: wrap;
`;

const WorkTitle = styled.title`
	color: #505050;
	display: block;
	font-weight: bold;
	font-family: sans-serif;
	padding-bottom: 16px;
`;

const WorkTypeWrapper = styled.div``;

const WorkTypeBoxWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 16px;
	align-items: center;
`;

const WorkTypeBox = styled.div<{ bgColor: string; selected: boolean }>`
	background-color: ${(props) => (props.selected ? props.bgColor : "#fff")};
	height: 36px;
	width: 124px;

	border: 1px solid #b1b1b1;
	border-radius: 5px;

	font-size: 16px;
	font-family: sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const GroupFilterButton = styled.button<{ bgColor: string; fontColor: string }>`
	background-color: ${(props) => props.bgColor};
	color: ${(props) => props.fontColor};
	min-height: 56px;
	width: 235px;
	border: 0px;
	padding: 0;
	box-shadow: 1px 3px 1px rgba(0, 0, 0, 0.25);
	font-weight: bold;
	font-size: 18px;
`;

const ButtonBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
