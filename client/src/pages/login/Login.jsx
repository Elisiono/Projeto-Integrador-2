import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

//const { currentUser } = useContext(AuthContext);
const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    //if(currentUser){
    //  navigate("/")
    //}
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Minha Cidade</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quam
            beatae unde error sequi aut, fugiat vero placeat nobis rerum atque
            reiciendis ad illo dolore temporibus commodi optio ea. Possimus.
          </p>
          <span>Ainda não é Cadastrado?</span>
          <Link to="/cadastro">
            <button>Cadastro</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Usuario"
              name="username"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
