import { Routes, Route } from "react-router-dom";
import GlobalStyled from "./GlobalStyled";
import Auth from "./pages/auth/auth";
import Calendar from "./pages/calendar/calendar";
import Group from "./pages/group/group";
import GroupAdding from "./pages/group/groupAdding";
import GroupEditing from "./pages/group/groupEditing";
import GroupFilter from "./pages/group/groupFilter";

import Settings from "./pages/settings/settings";
import MemberList from "./pages/member/memberList";

function App() {
	return (
		<>
			<GlobalStyled />
			<Routes>
				<Route path="auth" element={<Auth />} />
				<Route path="calendar" element={<Calendar />} />
				<Route path="group" element={<Group />} />
				<Route path="group/add" element={<GroupAdding />} />
				<Route path="group/edit" element={<GroupEditing />} />
				<Route path="group/filter" element={<GroupFilter />} />
				<Route path="settings" element={<Settings />} />
				<Route path="members" element={<MemberList />} />
			</Routes>
		</>
	);
}

export default App;
