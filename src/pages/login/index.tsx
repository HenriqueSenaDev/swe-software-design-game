import { FormEvent, useContext, useState } from "react";
import { Button } from "../../components/button";
import { GameContext } from "../../contexts/game";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export const Login = () => {
  const [team, setTeam] = useState<string>('');
  const navigate = useNavigate();

  const { matchStatus, handleJoinGame } = useContext(GameContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    handleJoinGame(team, () => navigate(`/game?player=${team}`));
  }

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center p-5 gap-10 m-auto">
      <img
        src={logo}
        className="max-w-full min-[440px]:max-w-96 lg:max-w-[680px]"
        alt="baralho de cartas com símbolo de interrogação atrás e o título Jogo da Memória Projeto de Software scrito em tons de roxo e preto"
      />

      <form
        className="w-full flex flex-col max-w-96 gap-8 lg:max-w-[680px] lg:gap-[60px]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-center gap-1">
          <label
            className="text-primary font-[Montserrat] font-extrabold text-lg lg:text-2xl"
            htmlFor="team-name"
          >
            Insira o nome da equipe
          </label>

          <input
            id="team-name"
            className="w-full h-9 py-1 px-2 rounded-[4px] border-[1px] border-primary outline-none focus-visible:ring-[1px] focus-visible:ring-primary focus-visible:ring-offset-2 transition-all font-bold text-primary font-[Montserrat] text-sm selection:text-violet-500 selection:bg-blue-200 lg:text-lg lg:h-12 lg:focus-visible:ring-2"
            onChange={({ target }) => setTeam(target.value)}
            type="text"
          />
        </div>

        <div className="w-full max-w-[232px] mx-auto">
          <Button
            className="disabled:opacity-40"
            type="submit"
            disabled={matchStatus !== "active"}
          >
            Jogar
          </Button>

          {matchStatus !== "active" && (
            <p className="mt-2 text-[#0D0D0D] font-[Montserrat] font-medium">
              Aguarde a partida iniciar...
            </p>
          )}
        </div>
      </form>
    </div>
  );
}