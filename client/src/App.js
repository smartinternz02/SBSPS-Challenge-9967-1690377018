
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import HomePage from "./scenes/homePage";
import Insights from './scenes/Insights/';
import Calculator from './scenes/Calculator';
import NavBar from './components/Navbar';
import DetailReport from './scenes/DetailReport';
import { useEffect } from 'react';
import ScrollToTop from './scrollToTop';
import SolutionOne from './scenes/otherSolutions/SolutionOne';
import SolutionTwo from './scenes/otherSolutions/SolutionTwo';
import SolutionThree from './scenes/otherSolutions/SolutionThree';
import SolutionFour from './scenes/otherSolutions/SolutionFour';
function App() {
 
  return (
    <>     
      <BrowserRouter>
      <NavBar />
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/insights" element={<Insights/>}></Route>
          <Route path="/solution" element={<Calculator/>}></Route>
          <Route path="/states/:stateName" element={<DetailReport/>}></Route>
          <Route path="/othersolution1" element={<SolutionOne />}></Route>
          <Route path="/othersolution2" element={<SolutionTwo />}></Route>
          <Route path="/othersolution3" element={<SolutionThree />}></Route>
          <Route path="/othersolution4" element={<SolutionFour />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
