import { useEffect } from "react";
import { Link, Switch, Route, Redirect, useParams } from "react-router-dom";
import Chat from "../components/Chat";
import useStore from "../store";

function MainAppPage({ currentUser, logOut, conversations, setConversations }) {
  const users = useStore((store) => store.users);

  useEffect(() => {
    fetch(`http://localhost:4000/conversations?userId=${currentUser.id}`)
      .then((resp) => resp.json())
      .then((data) => setConversations(data));
  }, []);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  if (conversations.length === 0) return "Loading..";

  const restOfTheUsers = users.filter((user) => user.id != currentUser.id);

  return (
    <div className="main-wrapper">
      {/* <!-- Side Panel --> */}
      <aside>
        {/* <!-- Side Header --> */}
        <header className="panel">
          <img
            className="avatar"
            width="50"
            height="50"
            src={currentUser.avatar}
            alt=""
          />
          <h3>
            {currentUser.firstName} {currentUser.lastName}
          </h3>
          <button onClick={logOut}>Log out</button>
        </header>

        {/* <!-- Search form --> */}
        <form className="aside__search-container">
          <input
            type="search"
            name="messagesSearch"
            placeholder="Search chats"
          />
        </form>

        {
          /* <!-- 

Side Chat List goes here. Check side-chat-list.html

 -->
    <!--  --> */
          <ul>
            {/* <!-- This first item should always be present --> */}
            <li>
              <button className="chat-button">
                <div>
                  <h3>+ Start a new Chat</h3>
                </div>
              </button>
            </li>
            {restOfTheUsers.map((user) => {
              const conversation = conversations.find(
                (conversation) =>
                  user.id === conversation.userId ||
                  user.id === conversation.participantId
              );
              return (
                <li key={user.id}>
                  <div className="chat-button">
                    <Link to={`/logged-in/${user.id}`}>
                      <img
                        className="avatar"
                        height="50"
                        width="50"
                        alt=""
                        src={user.avatar}
                      />
                      <div>
                        <h3>
                          {user.firstName} {user.lastName}
                        </h3>
                        <p>Last message</p>
                      </div>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        }
      </aside>

      {/* <!-- Main Chat Section --> */}
      <main className="conversation">
        {/* <!-- Chat header --> */}

        <Switch>
          <Route path="/logged-in" exact>
            <header className="panel">Select chat on left</header>
            <div className="conversation__messages" />
          </Route>
          <Route path="/logged-in/:chatId">
            <Chat currentUser={currentUser} restOfTheUsers={restOfTheUsers} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default MainAppPage;
