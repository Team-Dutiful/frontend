import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/icons/filter_search_icon.svg";

interface FilterProps {
	members: string[];
}

const Filter = ({ members }: FilterProps) => {
	return (
		<FilterContainer>
			<FilterHeader>
				<p>필터</p>
				<SearchIcon />
			</FilterHeader>
			<FilterBox>
				<FilterRow>
					<p>멤버</p>
					<FilterList>
						<Tmp>
							{members.map((member, idx) => {
								return (
									<FilterChip key={idx} fontColor="#000" bgColor="#E4E4E4">
										{member}
									</FilterChip>
								);
							})}
						</Tmp>
					</FilterList>
				</FilterRow>
				<FilterRow>
					<p>근무</p>
					<FilterList>
						<Tmp>
							<FilterChip fontColor="#393939" bgColor="#FFD9D9">
								DAY
							</FilterChip>
							<FilterChip fontColor="#393939" bgColor="#FFB9B9">
								EVENING
							</FilterChip>
							<FilterChip fontColor="#393939" bgColor="#B3FFE8">
								OFF
							</FilterChip>
							<FilterChip fontColor="#393939" bgColor="#D5CEFF">
								휴가
							</FilterChip>
						</Tmp>
					</FilterList>
				</FilterRow>
			</FilterBox>
		</FilterContainer>
	);
};

export default Filter;

const FilterContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	bottom: 0px;
	width: 100%;
	height: 140px;
`;

const FilterHeader = styled.div`
	p {
		text-align: center;
		font-weight: 700;
		font-size: 16px;
		padding-top: 10px;
	}

	svg {
		position: absolute;
		top: 6px;
		right: 16px;
	}
`;

const FilterBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;
	height: 100%;
	align-items: flex-start;
	padding: 5px 10px 5px 30px;
`;

const FilterRow = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	gap: 10px;

	p {
		width: 40px;
		font-weight: 600;
		font-size: 14px;
		line-height: 17px;
		text-align: center;
	}
`;

const FilterList = styled.div`
	width: 100%;
	overflow-y: scroll;

	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */

	&::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera*/
	}
`;

const Tmp = styled.div`
	display: flex;
	gap: 7px;
	width: 100%;
`;

const FilterChip = styled.div<{ bgColor: string; fontColor: string }>`
	min-width: 55px;
	border-radius: 5px;
	background-color: ${(props) => props.bgColor};
	color: ${(props) => props.fontColor};
	padding: 7px 5px 5px 5px;
	border: none;

	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	text-align: center;
`;
