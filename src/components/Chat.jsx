import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Chat({ currentUser, restOfTheUsers }) {
  const [messages, setMessages] = useState([]);
  const { chatId } = useParams();

  const participant = restOfTheUsers.find((user) => user.id == chatId);

  useEffect(() => {
    fetch(`http://localhost:4000/messages?conversationId=${chatId}`)
      .then((resp) => resp.json())
      .then((data) => setMessages(data));
  }, []);

  console.log(messages);

  return (
    <>
      <header className="panel">
        <img
          className="avatar"
          height="50"
          width="50"
          alt=""
          src={participant.avatar}
        />
        <h3>
          {participant.firstName} {participant.lastName}
        </h3>
      </header>

      <ul className="conversation__messages">
        {messages.map((message) => (
          <li
            key={message.id}
            className={message.userId === currentUser.id ? "outgoing" : ""}
          >
            <p>{message.messageText}</p>
          </li>
        ))}
      </ul>

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
