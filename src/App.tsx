import { Routes, Route } from "react-router-dom";
import GlobalStyled from "./GlobalStyled";
import Settings from "./pages/settings";

function App() {
	return (
		<>
			<GlobalStyled />
			<Routes>
				<Route path="settings" element={<Settings />} />
			</Routes>
		</>
	);
}

export default App;
