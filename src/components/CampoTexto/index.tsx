import { ChangeEvent } from "react";
import styled from "styled-components";

interface CampoTextoProps {
  aoAlterar: (valor: string) => void;
  valor: string;
  placeholder: string;
  label: string;
  obrigatorio?: boolean;
  tipo?: 'date' | 'text' | 'color';
}

export const CampoContainer = styled.div`
    display: flex;
    flex-direction: column;

    & label{
        font-weight: normal;
        margin: 0 0 0 10px;

        &:first-letter{
        text-transform: capitalize;
        }
    }
`;

const CampoInput = styled.input`
    border: none;
    border-radius: 10px;
    background: white;
    box-shadow: 5px 5px 10px rgba(0,0,0,.1);
    padding: ${props => props.type == "color" ? "0 1rem" : "20px"};
    margin: 0 0 15px 0;
    width: 100%;

    &::placeholder{
        color: gray;
    }
`;

export default function CampoTexto({ aoAlterar, valor, placeholder, label, obrigatorio = false, tipo = 'text' }: CampoTextoProps) {

  const aoDigitar = (e: ChangeEvent<HTMLInputElement>) => {
    aoAlterar(e.target.value);
  }

  return (
    <CampoContainer>
      <label>{label}</label>
      <CampoInput
        value={valor}
        onChange={aoDigitar}
        type={tipo}
        placeholder={placeholder}
        required={obrigatorio}
      />
    </CampoContainer>
  )
}