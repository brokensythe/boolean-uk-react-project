import "./styles.css";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import RegistrationPage from "./Components/RegistrationPage";
import PlaylistPage from "./Components/PlaylistPage";
import SearchPage from "./Components/SearchPage";
import ModalContainer from "./modals/ModalContainer";
import SongPage from "./Components/SongPage";

export default function App() {

  return  (
    <>
      <Switch>
        <Route path="/playlist">
          <SongPage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/playlists">
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
