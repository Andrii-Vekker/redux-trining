import { Route, Routes, Navigate } from "react-router";
import DashBoard from "./components/DashBoard";
import Layout from "./Layout/Layout";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />} >
           <Route path="login" element={<LoginPage />} />
            <Route path="dashboard" element={<DashBoard/>} />
            <Route path="*" element={<Navigate to="/" replace />} />
     </Route>
    </Routes>
  );
};

export default App;
