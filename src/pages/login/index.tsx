import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/main_frame.png";
import miniStar from "../../assets/images/ministar.png";
import mainStar from "../../assets/images/mainstar.png";
import memoryGame from "../../assets/images/Frame_54.png";
import rocket from "../../assets/images/rocket.png";

export const Login = () => {
  const [name, setName] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/game?player=${name}`);
  }

  return (
    <div className="login-page">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="form">
        <div className="mini-star">
          <img src={miniStar} alt="Imagem de Estrela" />
        </div>

        <div className="image-container">
          <div className="image-filter-blur"></div>

          <div className="image-center">
            <img src={memoryGame} alt="Jogo da Memória" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            className="login__input"
            type="text"
            placeholder="Nome"
            onChange={({ target }) => setName(target.value)}
          />

          <button
            className="login__button"
            type="submit"
            disabled={name.length < 2}
          >
            JOGAR
          </button>
        </form>
      </div>

      <div className="interactive-image-rocket">
        <img src={rocket} alt="Imagem de Foguete" />
      </div>

      <div className="interactive-image-star">
        <img src={mainStar} alt="Imagem de Estrela" />
      </div>
    </div>
  );
}