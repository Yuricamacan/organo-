import styled from "styled-components";
import { IColaborador } from "../../shared/interface/IColaborador";
import CardTimes from "../CardTimes";
import { ChangeEvent } from "react";
import hexToRgba from "hex-to-rgba";

interface StyledProps {
  $color: string;
  $backColor: string;
}

interface TimeProps {
  nome: string;
  colaborador: Array<IColaborador>;
  aoMudar: (valor1: string, valor2: string) => void;
  aoDeletar: (id: string) => void;
  aoFavoritar: (id: string) => void;
  id: string;
  color: string
}

const TimeContainer = styled.section<StyledProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.$backColor || "#fff"};
    padding: 20px 10px;
        position: relative;

        & input {
                position: absolute;
                right: 1.5rem;
                top: 1.2rem;
        }

    & h3 {
        padding: 0;
        margin: 0;
    }

    & hr {
        margin: 5px 0 20px 0;
        width: 20px;
        border: 1px solid ${props => props.$color || "#000"};
        border-radius: 50px;
    } 
`;

const SessaoTimes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
`

export default function Time({ nome, color, colaborador, aoMudar, id, aoDeletar, aoFavoritar }: TimeProps) {

  return (
    (colaborador.length > 0)
    && <TimeContainer
      $color={color}
      $backColor={hexToRgba(color, 0.3)}
    >
      <input
        type="color"
        value={color}
        onChange={(e: ChangeEvent<HTMLInputElement>) => aoMudar(e.target.value, id)}
      />
      <h3>{nome}</h3>
      <hr color={color} />
      <SessaoTimes>
        {colaborador.map(colab => (
          <CardTimes
            id={colab.id}
            cor={color}
            nome={colab.nome}
            cargo={colab.cargo}
            imagem={colab.imagem}
            data={colab.data}
            favorito={colab.favorito}
            aoDeletar={aoDeletar}
            aoFavoritar={aoFavoritar}
          />
        ))}
      </SessaoTimes>

    </TimeContainer>
  )
}