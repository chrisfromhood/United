import { Switch, Redirect, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Switch>
      <Route path="/contact-us" exact component={ContactUs} />
      <Route path="/" exact component={Homepage} />
      <Redirect to="/" />
    </Switch>

  );
}
export default App;