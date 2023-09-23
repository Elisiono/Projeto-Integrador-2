import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quam
            beatae unde error sequi aut, fugiat vero placeat nobis rerum atque
            reiciendis ad illo dolore temporibus commodi optio ea. Possimus.
          </p>
          <span>Ainda não é Cadastrado?</span>
          <button>Cadastro</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Usuario" />
            <input type="text" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
