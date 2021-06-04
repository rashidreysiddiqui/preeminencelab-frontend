import "./index.css";
import Topnav from "./components/nav/Topnav";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Footer from "./components/nav/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Topnav />
      </header>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
