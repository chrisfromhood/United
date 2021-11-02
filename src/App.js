import { Switch, Redirect, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Promotions from "./pages/Promotions";
import ACInstallations from "./pages/ACInstalations";

function App() {
  return (
    <Switch>
      <Route path="/contact-us" exact component={ContactUs} />
      <Route path="/about-us" exact component={AboutUs} />
      <Route path="/promotions" exact component={Promotions} />
      <Route path="/ac-installations" exact component={ACInstallations} />
      <Route path="/" exact component={Homepage} />
      <Redirect to="/" />
    </Switch>

  );
}
export default App;