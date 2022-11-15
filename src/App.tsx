import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyled from "./GlobalStyled";
import Login from "./pages/auth/Login";
import Calendar from "./pages/calendar/calendar";
import Group from "./pages/group/group";
import Settings from "./pages/settings/settings";
import Welcome from "./pages/Welcome";

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
				<Route path="/" element={<Welcome />} />
				<Route path="/login" element={<Login />} />
				<Route path="calendar" element={<Calendar />} />
				<Route path="group" element={<Group />} />
				<Route path="settings" element={<Settings />} />
			</Routes>
		</>
	);
};

export default App;
