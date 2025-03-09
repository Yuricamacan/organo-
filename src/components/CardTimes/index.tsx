import styled from "styled-components";
import { IColaborador } from "../../shared/interface/IColaborador";
import { AiOutlineCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai"

interface CardTimesProps extends IColaborador {
  id: string;
  cor: string;
  data: string;
  imagem: string;
  cargo: string;
  favorito: boolean;
  aoDeletar: (valor: string) => void
  aoFavoritar: (id: string) => void
}

interface FotoProps {
  $bgCor: string
}

const CardContainer = styled.div`
    width: 130px;
    height: 180px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0,0,0,.01);
    position: relative;
    
    svg:nth-child(1){
      position: absolute;
      left: 95%;
      top: -10%;
      background: rgba(100,100,100,.3);
      backdrop-filter: blur(10px);
      border-radius: 50%;
      color: white;
    }
`;

const FotoContainer = styled.div<FotoProps>`
    background: linear-gradient(180deg,${props => props.$bgCor || 'lightgray'} 50%, #fff 50%);
    width: 130px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 10px 0;
    border-radius: 10px;

    & img {
        width: 80px;
        height: 80px;
        background: black;
        border-radius: 50%;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px;
    width: 100%;
    
    svg{
      position: absolute;
      top: 40%;
      left: 60%;
      color: pink;
      background: white;
      border-radius: 30% 30% 50% 50%;
      user-select: none;
    }

    & h4 {
        font-size: 14px;
        padding: 10px;
    }

    & h5 {
        padding: 5px 0 20px 0;
        font-size: .5rem;
    }

    & h4,h5{
        margin: 0;
        padding: 0;
    }
`;

export default function CardTimes({ id, nome, cargo, cor, imagem, data, favorito, aoDeletar, aoFavoritar }: CardTimesProps) {

  function favoritar(): void {
    aoFavoritar(id);
  }

  return (
    <CardContainer>
      <AiOutlineCloseCircle
        size={25}
        onClick={() => aoDeletar(id)}
      />
      <FotoContainer $bgCor={cor}>
        <img src={imagem ? imagem : "./img/Deafult.svg.png"} alt={nome} />
      </FotoContainer>
      <InfoContainer>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <h5>{new Date(data).toLocaleDateString()}</h5>
        {
          favorito
            ? <AiFillHeart
              size={25}
              onClick={favoritar}
            />
            : <AiOutlineHeart
              size={25}
              onClick={favoritar}
            />
        }
      </InfoContainer>
    </CardContainer>
  )
}
