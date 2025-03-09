import { ReactElement } from "react";
import styled from "styled-components";

interface BotaoProps {
  cor: string;
  children: ReactElement | string
}

interface StyledProps{
  $cor: string
}

const BotaoContainer = styled.button<StyledProps>`
    align-self: end;
    background: #6276FD;
    border: none;
    border-radius: 10px;
    color: ${props => props.$cor || "#000"};
    padding: 20px;
                font-weight: bolder;
                text-transform: capitalize;
`

export default function Botao({ children, cor }: BotaoProps) {
  return (
    <BotaoContainer $cor={cor}>
      {children}
    </BotaoContainer>
  )
}