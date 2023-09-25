import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./leftBar.scss";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />

            <span>{currentUser.name} </span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Amigos</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Grupos</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Cidades</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Imagens</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Locais</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Atalhos</span>
          <div className="item">
            <img src="" alt="" />
            <span>Amigos</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Grupos</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Cidades</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Imagens</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Locais</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Outros</span>
          <div className="item">
            <img src="" alt="" />
            <span>Amigos</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Grupos</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Cidades</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Imagens</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Locais</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
