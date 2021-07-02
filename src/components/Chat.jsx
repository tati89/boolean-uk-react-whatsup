import { useParams } from "react-router-dom";

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

export default Chat;
