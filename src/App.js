import "./App.css";
import Homepage from "./Pages/Homepage/Homepage.component";
import { Route,Switch } from "react-router-dom";
import Shop from "./Pages/Shop/Shop.component";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/shop" component={Shop}/>
      </Switch>
       
      </div>
   
  );
}

export default App;
