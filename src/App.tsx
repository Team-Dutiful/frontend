import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyled from "./GlobalStyled";
import Auth from "./pages/auth/auth";
import Calendar from "./pages/calendar/calendar";
import Group from "./pages/group/group";
import Settings from "./pages/settings/settings";
import ProfileSetting from "./pages/settings/profileSetting";

const App = () => {
	const setScreenSize = () => {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	};

	useEffect(() => {
		setScreenSize();
	});

	return (
		<>
			<GlobalStyled />
			<Routes>
				<Route path="auth" element={<Auth />} />
				<Route path="calendar" element={<Calendar />} />
				<Route path="group" element={<Group />} />
				<Route path="settings" element={<Settings />} />
				<Route path="settings/profile" element={<ProfileSetting />} />
			</Routes>
		</>
	);
};

export default App;
