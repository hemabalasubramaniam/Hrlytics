import HRLlayout from './components/HRLlayout';
import Enquiry from './components/Enquiry';
import JobRequirement from './components/JobRequirement';
import './App.css';
import { Icon, Image } from 'semantic-ui-react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from './Header/Header';
import { useRef } from 'react';


function App() {
  const url = "http://localhost:8000/";
  const ref= useRef();

  const goToDown = () => {
    window.scrollTo(0,100000);
    // window.scrollTo({
    //   behavior : "smooth"
    // })
  };

  return (
    <div className="App">
      <div className='sidebar'>
        <div>
        <div><Image src={require('./Assets/Ellipse-dark green.png')}  style={{color:'#132E18'}}/></div>
        <div><Image src={require('./Assets/Ellipse-light green.png')} /></div>
        <div><Image src={require('./Assets/Ellipse-light green.png')} /></div>
        <div><Image src={require('./Assets/Ellipse-light green.png')} /></div>
        <div><Image src={require('./Assets/Ellipse-light green.png')} /></div>

        </div>

        <div className='scroll'>

        <p onClick={() => goToDown()}>Scroll down</p>
       <Image src={require('./Assets/Arrowdown.png')}/>
        </div>

      </div>

      {/* <HRLlayout /> */}
      <div className='right' ref={ref}>
        {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/enquiry' element={<Enquiry url = {url} />} />
          <Route path='/jobRequirement' element={<JobRequirement url = {url} />} />
          <Route path="/" element={<HRLlayout url = {url} />} />
        </Routes>
      </BrowserRouter>

      </div>
    </div>
  );
}

export default App;