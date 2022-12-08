import { useLocation } from "react-router-dom";

const ChangePassword = () => {
	const location = useLocation();
	const email = location.state;

	return <div>{email}</div>;
};

export default ChangePassword;
