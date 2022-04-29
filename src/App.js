import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Header from './Header/Header';
import Inventory from './Inventory/Inventory';
import LogIn from './LogIn/LogIn';
import PageNotFound from './PageNotFoound/PageNotFound';
import SignUp from './SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>

        <Route path="/inventory" element={<Inventory />} />
        <Route path="about" element={<About />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </div>
  );
}

export default App;
