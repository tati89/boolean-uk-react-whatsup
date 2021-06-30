import { useEffect } from "react";
import useStore from "./store";

export default function App() {
  const users = useStore((store) => store.users);
  const fetchUsers = useStore((store) => store.fetchUsers);

  useEffect(() => fetchUsers(), []);

  return (
    <div className="main-wrapper login">
      <section className="login-section">
        <h2>Choose your user!</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <button className="user-selection">
                <img
                  className="avatar"
                  width="50"
                  height="50"
                  src={user.avatar}
                  alt={user.lastName}
                />
                <h3>
                  {user.firstName} {user.lastName}
                </h3>
              </button>
            </li>
          ))}
          <li>
            <button className="user-selection">
              <h3>+ Add a new user</h3>
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
}
