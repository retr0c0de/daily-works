import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderLayout from "./Components/Layouts/HeaderLayout";
import FooterLayout from "./Components/Layouts/FooterLayout";
import LoginLayout from "./Components/Layouts/Contents/LoginLayout";
import RegisterLayout from "./Components/Layouts/Contents/RegisterLayout";
import AboutUsLayout from "./Components/Layouts/AboutUsLayout";
import HomeLayout from "./Components/Layouts/HomeLayout";

function App() {
  return (
    <Router>
      <HeaderLayout />
      <Route path="/" exact component={HomeLayout} />
      <Route path="/register" component={RegisterLayout} />
      <Route path="/login" component={LoginLayout} />
      <Route path="/about" component={AboutUsLayout} />
      <FooterLayout />
    </Router>
  );
}

export default App;
