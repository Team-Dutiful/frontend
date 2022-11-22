import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyled from "./GlobalStyled";
import FindId from "./pages/auth/findId";
import FindPassword from "./pages/auth/findPassword";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signup";
import Calendar from "./pages/calendar/calendar";
import Group from "./pages/group/group";
import Settings from "./pages/settings/settings";
import Welcome from "./pages/welcome";

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
				<Route path="/signup" element={<SignUp />} />
				<Route path="/find-id" element={<FindId />} />
				<Route path="/find-password" element={<FindPassword />} />
				<Route path="calendar" element={<Calendar />} />
				<Route path="group" element={<Group />} />
				<Route path="settings" element={<Settings />} />
			</Routes>
		</>
	);
};

export default App;
