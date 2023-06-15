import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Insert from "./components/Insert";
import Veiw from "./components/Veiw";
import Edit from "./components/Edit";
import StudentProvider from "./context/StudentProvider";
import ModalProvider from "./context/ModalProvider";
import EmployeeProvider from "./context/EmployeeProvider";

function App() {
	return (
		<div className=" flex flex-col h-screen items-center justify-center bg-slate-50">
			<StudentProvider>
				<ModalProvider>
					<EmployeeProvider>
						<Router>
							<Routes>
								<Route path="/" element={<Veiw />}></Route>
								<Route exact path="/insert" element={<Insert />}></Route>
								<Route exact path="/edit/:id" element={<Edit />}></Route>
							</Routes>
						</Router>
					</EmployeeProvider>
				</ModalProvider>
			</StudentProvider>
		</div>
	);
}

export default App;
