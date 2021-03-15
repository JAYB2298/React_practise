import React,{Component} from "react";
import Contact from "./contact/contact"
import Cards from "./Cards/Cards"
import Landing from "./LandingPage/Landing"
import Navbar from "./navbar/navbar"
import Info from "./InfoBox/Info"
import Footer from "./footer/Footer";
import './App.css';


class App extends Component{
    render(){
    return(
        <div>
           <Navbar/>
           <Landing/>
           <Cards/>
           <Info/>
           <Contact/>
           <Footer/>
        </div>
    );
};
}

export default App;
