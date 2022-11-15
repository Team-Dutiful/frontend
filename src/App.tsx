import { Routes, Route } from "react-router-dom";
import GlobalStyled from "./GlobalStyled";
import Auth from "./pages/auth/auth";
import Calendar from "./pages/calendar/calendar";
import Group from "./pages/group/group";
import Settings from "./pages/settings/settings";

function App() {
	return (
		<>
			<GlobalStyled />
			<Routes>
				<Route path="auth" element={<Auth />} />
				<Route path="calendar" element={<Calendar />} />
				<Route path="group" element={<Group />} />
				<Route path="settings" element={<Settings />} />
			</Routes>
		</>
	);
}

export default App;
