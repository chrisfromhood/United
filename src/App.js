import { Switch, Redirect, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Switch>
      <Route path="/contact-us" exact component={ContactUs} />
      <Route path="/about-us" exact component={AboutUs} />
      <Route path="/" exact component={Homepage} />
      <Redirect to="/" />
    </Switch>

  );
}
export default App;