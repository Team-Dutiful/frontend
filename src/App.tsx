import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyled from "./GlobalStyled";

import Welcome from "./pages/welcome";
import FindId from "./pages/auth/findId";
import FindPassword from "./pages/auth/findPassword";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/signup";
import Calendar from "./pages/calendar/calendar";
import CalendarSetting from "./pages/calendar/setting";
import ManageWork from "./pages/calendar/manageWork";
import Group from "./pages/group/group";
import GroupCalendar from "./pages/group/groupCalendar";
import GroupAdding from "./pages/group/groupAdding";
import GroupEditing from "./pages/group/groupEditing";

import Settings from "./pages/settings/settings";
import MemberList from "./pages/member/memberList";
import ProfileSetting from "./pages/settings/profileSetting";
import Setting from "./pages/settings/setting";
import AccountSetting from "./pages/settings/accountSetting";
import PasswordSetting from "./pages/settings/passwordSetting";
import EmailSetting from "./pages/settings/emailSetting";
import MemberInviting from "./pages/member/memberInviting";
import ChangePassword from "./pages/auth/changePassword";
import Kakao from "./pages/auth/kakao";
import Naver from "./pages/auth/naver";

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
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<SignUp />} />
				<Route path="find-id" element={<FindId />} />
				<Route path="find-password" element={<FindPassword />} />
				<Route path="change-password" element={<ChangePassword />} />
				<Route path="calendar" element={<Calendar />} />
				<Route path="oauth/callback/kakao" element={<Kakao />} />
				<Route path="oauth/callback/naver" element={<Naver />} />
				<Route path="calendar/setting" element={<CalendarSetting />} />
				<Route path="calendar/manage" element={<ManageWork />} />
				<Route path="group" element={<Group />} />
				<Route path="group/calendar" element={<GroupCalendar />} />
				<Route path="group/add" element={<GroupAdding />} />
				<Route path="group/edit" element={<GroupEditing />} />
				<Route path="settings" element={<Settings />} />
				<Route path="members" element={<MemberList />} />
				<Route path="members/invite" element={<MemberInviting />} />
				<Route path="setting" element={<Setting />}>
					<Route path="profile" element={<ProfileSetting />} />
					<Route path="account" element={<AccountSetting />} />
					<Route path="email" element={<EmailSetting />} />
					<Route path="password" element={<PasswordSetting />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
