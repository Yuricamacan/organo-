import styled from "styled-components";
import { CampoContainer } from "../CampoTexto";

interface ListaSuspensaProps {
    label: string;
    valor: string;
    aoAlterar: (valor: string)=> void;
    obrigatorio: boolean;
    itens: Array<string>;
}

const ListaSuspensaContainer = styled.select`
    border: none;
    border-radius: 10px;
    background: white;
    box-shadow: 10px 10px 10px rgba(0,0,0,.1);
    padding: 20px;
    margin: 0 0 15px 0;
    color: gray;
`;

export default function ListaSuspensa ({label, valor, aoAlterar, obrigatorio, itens}: ListaSuspensaProps){
    return(
        <CampoContainer>
            <label>{label}</label>
            <ListaSuspensaContainer
                value={valor}
                onChange={e => aoAlterar(e.target.value)}
                required={obrigatorio}
            >
                <option></option>
                {
                    itens.map(equipe=>(
                        <option>{equipe}</option>
                    ))
                }
            </ListaSuspensaContainer>
        </CampoContainer>
    )
}