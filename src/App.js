// import { Route, Routes, Navigate } from "react-router";
// import DashBoard from "./components/DashBoard";
// import Layout from "./Layout/Layout";
// import LoginPage from "./pages/LoginPage";
import { useSelector, useDispatch } from "react-redux";
import { update } from "./redux/clicksSlise";



// function App() {
//   return (
//     <Routes>
//         <Route path="/" element={<Layout />} >
//            <Route path="login" element={<LoginPage />} />
//         {/* <Route path="dashboard" element={<DashBoard/>} /> */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//      </Route>
//     </Routes>
//   );
// };




function App() {
  const numberClicks = useSelector(state => state.clicks.value)
  const dispatch = useDispatch()
  return (
    <>
    <div><button type="button" style={{width:"150px"}} onClick={() => dispatch(update(5))}>{numberClicks}</button></div>
    <div><button type="button" style={{width:"150px"}} onClick={() => dispatch(update(10))}>{numberClicks}</button></div>
    <div><button type="button" style={{width:"150px"}} onClick={() => dispatch(update(15))}>{numberClicks}</button></div>
      </>
      )
      
}


export default App;
