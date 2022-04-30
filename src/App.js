import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Blog from './Blog/Blog';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import Inventory from './Inventory/Inventory';
import LogIn from './LogIn/LogIn';
import PageNotFound from './PageNotFoound/PageNotFound';
import SignUp from './SignUp/SignUp';

function App() {
  return (
    <div className>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Inventory" element={<Inventory />} />
        <Route path="about" element={<About />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
