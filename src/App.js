import "./App.css";
import Homepage from "./Pages/Homepage/Homepage.component";
import { Route,Switch } from "react-router-dom";
import Shop from "./Pages/Shop/Shop.component";
import Header from "./components/Header/Header.component";
import SignInAndSignup from "./Pages/Sign-in-and-signup/Signin-and-signup";
import React from "react";
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';


class App extends React.Component{
  constructor() {
    super();
  
    this.state = {
       currentUser: null
    };
  }
  unsubscribeFromAuth=null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div className="App">
          <Header currentUser={this.state.currentUser} />
       
        
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
