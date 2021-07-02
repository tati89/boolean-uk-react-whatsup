import { useEffect, useState } from "react";
import useStore from "../store";
import { useHistory } from "react-router-dom";

function LoginPage({ onLogin }) {
  const users = useStore((store) => store.users);
  const fetchUsers = useStore((store) => store.fetchUsers);
  const history = useHistory();

  useEffect(() => fetchUsers(), []);

  const login = (user) => {
    onLogin(user);
    history.push("/logged-in");
  };

  return (
    <div className="main-wrapper login">
      <section className="login-section">
        <h2>Choose your user!</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <button onClick={() => login(user)} className="user-selection">
                <img
                  className="avatar"
                  width="50"
                  height="50"
                  src={user.avatar}
                  alt=""
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

export default LoginPage;
