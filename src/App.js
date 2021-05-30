import "./index.css";
import Topnav from "./components/nav/Topnav";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import Footer from "./components/nav/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Topnav />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
