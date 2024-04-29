import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ShopHeader from './/components_secondPage/ShopHeader'

function App() {
  return (
    <div className="App">
      
      <ShopHeader />
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
