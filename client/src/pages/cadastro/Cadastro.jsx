import { useState } from "react";
import "./cadastro.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Cadastro = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err);

  return (
    <div className="cadastro">
      <div className="card">
        <div className="left">
          <h1>Faça Parte</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quam
            beatae unde error sequi aut, fugiat vero placeat nobis rerum atque
            reiciendis ad illo dolore temporibus commodi optio ea. Possimus.
          </p>
          <span>Ainda não é Cadastrado?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Cadastro</h1>
          <form>
            <input
              type="text"
              placeholder="Usuario"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Nome"
              name="name"
              onChange={handleChange}
            />
            <input
            //  type="cidade"
            //  placeholder="Cidade"
            //  name="cidade"
            //  onChange={handleChange}
            />

            {err && err}
            <button onClick={handleClick}>Cadastro</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
