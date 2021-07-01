import { Link, Switch, Route, Redirect, useParams } from "react-router-dom";
import useStore from "../store";

function MainAppPage({ currentUser }) {
  const users = useStore((store) => store.users);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

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
            {restOfTheUsers.map((user, index) => (
              <li key={index}>
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
            ))}
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

function Chat({ currentUser, restOfTheUsers }) {
  const { chatId } = useParams();
  const participant = restOfTheUsers.find((user) => user.id == chatId);

  return (
    <>
      <header className="panel">Chatting with {participant.firstName}</header>
      <ul className="conversation__messages">
        <li className="outgoing">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            excepturi non odit quisquam et assumenda suscipit maxime officiis
            repellat possimus! Soluta illum rerum eligendi labore ut nemo quod
            voluptates ad.
          </p>
        </li>
        {/* <!-- Outgoing messages are messages sent by the current logged in user --> */}
        <li className="outgoing">
          <p>Lorem ipsum...</p>
        </li>
        {/* <!--  --> */}
        {/* <!-- This one doesnt belong to the current logged in user --> */}
        <li>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            excepturi non odit quisquam et assumenda suscipit maxime officiis
            repellat possimus!
          </p>
        </li>
        {/* <!--  --> */}
        <li className="outgoing">
          <p>Some test message</p>
        </li>
        <li className="outgoing">
          <p>more messagesss!!!</p>
        </li>
        <li className="outgoing">
          <p>more messagesss!!!</p>
        </li>
        <li className="outgoing">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            excepturi non odit quisquam et assumenda suscipit maxime officiis
            repellat possimus! Soluta illum rerum eligendi labore ut nemo quod
            voluptates ad.Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Natus excepturi non odit quisquam et assumenda suscipit maxime
            officiis repellat possimus! Soluta illum rerum eligendi labore ut
            nemo quod voluptates ad.Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Natus excepturi non odit quisquam et assumenda
            suscipit maxime officiis repellat possimus! Soluta illum rerum
            eligendi labore ut nemo quod voluptates ad.Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Natus excepturi non odit
            quisquam et assumenda suscipit maxime officiis repellat possimus!
            Soluta illum rerum eligendi labore ut nemo quod voluptates ad.Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Natus excepturi
            non odit quisquam et assumenda suscipit maxime officiis repellat
            possimus! Soluta illum rerum eligendi labore ut nemo quod voluptates
            ad.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            excepturi non odit quisquam et assumenda suscipit maxime officiis
            repellat possimus! Soluta illum rerum eligendi labore ut nemo quod
            voluptates ad.Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Natus excepturi non odit quisquam et assumenda suscipit maxime
            officiis repellat possimus! Soluta illum rerum eligendi labore ut
            nemo quod voluptates ad.
          </p>
        </li>
      </ul>

      {/* <!-- Message Box --> */}
      <footer>
        <form className="panel conversation__message-box">
          <input type="text" placeholder="Type a message" rows="1" />
          <button type="submit">
            {/* <!-- This is the send button --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="currentColor"
                d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
              ></path>
            </svg>
          </button>
        </form>
      </footer>
    </>
  );
}

export default MainAppPage;
