import React from 'react'
import { Header, Navbar } from './components';
import Features from './components/feature/Features';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';

const App = ()=>{
    return(
        <div className="App">
            <div className="">
            <Navbar/>
            <Header/>
            </div>
            <div className="Features">
            <Features/>
            </div>
            <div>
                <Slider/>
            </div>
            <div>
                <Footer/>
            </div>
           
        </div>
    )
}
export default App;