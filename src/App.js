import "./styles.css";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import RegistrationPage from "./Components/RegistrationPage";
import PlaylistPage from "./Components/PlaylistPage";
import SearchPage from "./Components/SearchPage";
import ModalContainer from "./modals/ModalContainer";
import useStore from "./hooks/useStore";
import { useEffect } from "react";

export default function App() {
  return  (
    <>
      <Switch>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/playlist">
          <PlaylistPage />
        </Route>
        <Route path="/register">
          <RegistrationPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
      <footer className="footer">
      &#169; Ade Inc. circa 2021
      </footer>
      <ModalContainer />
    </>
  )
}
