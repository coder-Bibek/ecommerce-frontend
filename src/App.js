import "./App.css";
import "./Bootstrap/Style.bootstrap.css"
import {BrowserRouter as Router,Switch,Route } from "react-router-dom"
import Homepage from "./Components/Homepage/Homepage.component";
import Cartpage from "./Components/Cartpage/Cartpage.component";
function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/" component={Homepage} />
       <Route exact path="/ecommerce/cart" component={Cartpage} />
     </Switch>
   </Router>
  );
}

export default App;
