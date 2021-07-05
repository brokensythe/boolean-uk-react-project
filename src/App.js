import "./styles.css";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";

export default function App() {
  return <Switch>
    <Route path="/">
      <LoginPage />
    </Route>
  </Switch>
}
