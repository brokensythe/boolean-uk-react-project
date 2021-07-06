import "./styles.css";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import RegistrationPage from "./Components/RegistrationPage";

export default function App() {
  return  (
    <>
      <Switch>
        <Route path="/register">
          <RegistrationPage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
      <footer className="footer">
      &#169; Ade Inc. circa 2021
      </footer>
    </>
  )
}
