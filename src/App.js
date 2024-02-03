
import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';

function App() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
   <>
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Home />
    </div>
   </>
  );
}

export default App;
