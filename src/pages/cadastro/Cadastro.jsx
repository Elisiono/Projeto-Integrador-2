import "./cadastro.scss";

const Cadastro = () => {
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
          <button>Login</button>
        </div>
        <div className="right">
          <h1>Cadastro</h1>
          <form>
            <input type="text" placeholder="Usuario" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Nome" />
            <input type="cidade" placeholder="Cidade" />
            <button>Cadastro</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
