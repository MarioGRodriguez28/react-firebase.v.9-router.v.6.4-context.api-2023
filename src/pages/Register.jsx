import {useState} from "react";
import {register} from "../config/firebase";
import {useRedirectUser} from "../hooks/useRedirectActiveUSer";
import {useUserContext} from "../context/UserContext";

const Register = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const {user} = useUserContext();
  useRedirectUser(user, "/dashboard");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("me diste submit");
    try {
      const credentialUser = await register({email, password});
      console.log(credentialUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
