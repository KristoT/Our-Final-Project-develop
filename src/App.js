import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/base.scss";
import "./styles/sass-base.scss";
import Header from "./Components/Header/Header.component";
import HomePage from "./Page/homepage/homepage.component";

class App extends React.Component{
  render(){
	  return(
		  <div>
		  <Header/>
		  <Routes>
		  <Route exact path="/" component={HomePage}  />
		  </Routes>
		  </div>
	  )
  }
}

export default App;
