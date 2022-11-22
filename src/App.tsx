import { Routes, Route } from "react-router-dom";
import GlobalStyled from "./GlobalStyled";
import Auth from "./pages/auth/auth";
import Calendar from "./pages/calendar/calendar";
import Group from "./pages/group/group";
import GroupSetting from "./pages/group/groupSetting";
import Settings from "./pages/settings/settings";
import GroupFilter from "./pages/group/groupFilter";
import MemberList from "./pages/member/memberList";

function App() {
	return (
		<>
			<GlobalStyled />
			<Routes>
				<Route path="auth" element={<Auth />} />
				<Route path="calendar" element={<Calendar />} />
				<Route path="group" element={<Group />} />
				<Route path="group-setting" element={<GroupSetting />} />
				<Route path="group-filter" element={<GroupFilter />} />
				<Route path="settings" element={<Settings />} />
				<Route path="members" element={<MemberList />} />
			</Routes>
		</>
	);
}

export default App;
