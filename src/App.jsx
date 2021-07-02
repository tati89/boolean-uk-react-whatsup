import LoginPage from "./pages/LoginPage";
import { Switch, Route, Redirect } from "react-router";
import MainAppPage from "./pages/MainAppPage";
import { useState } from "react";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [conversations, setConversations] = useState([]);

  const logOut = () => {
    setCurrentUser(null);
  };

  return (
    <>
      <Switch>
        <Route path="/logged-in">
          <MainAppPage
            currentUser={currentUser}
            logOut={logOut}
            conversations={conversations}
            setConversations={setConversations}
          />
        </Route>
        <Route path="/login" exact>
          <LoginPage onLogin={setCurrentUser} />
        </Route>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
      </Switch>
    </>
  );
}
