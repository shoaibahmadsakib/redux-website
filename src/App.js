import "./App.css";
import Homepage from "./Pages/Homepage/Homepage.component";
import { Route,Switch } from "react-router-dom";
import Shop from "./Pages/Shop/Shop.component";
import Header from "./components/Header/Header.component";
import SignInAndSignup from "./Pages/Sign-in-and-signup/Signin-and-signup";
import React from "react";
import { auth } from './Firebase/firebase.utils';


class App extends React.Component{
  constructor() {
    super()
  
    this.state = {
       currentUser: null
    };
  }
  unsubscribeFromAuth=null;

  componentDidMount(){
   this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});
    console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div className="App">
        <Header/>
       
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/shop" component={Shop}/>
          <Route exact path="/signin" component={SignInAndSignup}/>
        </Switch>
         
        </div>
     
    );
  }
  
}

export default App;
