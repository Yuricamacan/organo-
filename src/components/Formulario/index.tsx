import styled from "styled-components";
import CampoTexto from "../CampoTexto";
import { FormEvent, useState } from "react";
import { IColaborador } from "../../shared/interface/IColaborador";
import Botao from "../Botao";
import ListaSuspensa from "../ListaSuspensa";
import { v4 as uuidv4 } from "uuid"


interface FormularioProps {
  aoCadastrar: (valor: IColaborador) => void
  aoCadastrarTime: (valor: { nome: string, color: string }) => void
  times: Array<string>
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 20px 0;
    align-items: center;
    justify-content: center;
`;

const FormContainer = styled.form`
    background: rgba(0,0,0,.1);
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    width: 80%;
`;

const TituloForm = styled.h2`
    font-size: 18px;
    font-weight: bolder;
    user-select: none;
    padding: 1rem 0;
    text-indent: 1rem;
`;

export default function Formulario({ aoCadastrar, aoCadastrarTime, times }: FormularioProps) {

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoEnviar = (e: FormEvent) => {
    e.preventDefault();
    aoCadastrar({
      nome,
      cargo,
      imagem,
      time,
      data,
      id: uuidv4(),
      favorito: false
    });
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
    setData('');
  }

  return (
    <Container>
      <FormContainer onSubmit={aoEnviar}>
        <TituloForm>
          Preencha os campos abaixo para criar um card do colaborador
        </TituloForm>

        <CampoTexto
          label="nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterar={valor => setNome(valor)}
          obrigatorio={true}
        />
        <CampoTexto
          label="cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterar={valor => setCargo(valor)}
          obrigatorio={true}
        />
        <CampoTexto
          label="URL da foto"
          placeholder="URL: https://..."
          valor={imagem}
          aoAlterar={valor => setImagem(valor)}
        />
        <CampoTexto
          label="Entrou em"
          placeholder=""
          valor={data}
          aoAlterar={valor => setData(valor)}
          tipo="date"
          obrigatorio={true}
        />
        <ListaSuspensa
          label="Times"
          itens={times}
          valor={time}
          aoAlterar={valor => setTime(valor)}
          obrigatorio={true}
        />

        <Botao cor="#fff">
          criar card
        </Botao>
      </FormContainer>

      <FormContainer
        onSubmit={(e) => {
          e.preventDefault()
          aoCadastrarTime({ nome: nomeTime, color: corTime })
          setNomeTime("");
          setCorTime("");
        }}
      >
        <TituloForm>
          Preencha os campos abaixo para criar um novo time
        </TituloForm>

        <CampoTexto
          label="nome do time"
          placeholder="Digite o nome do novo time"
          valor={nomeTime}
          aoAlterar={valor => setNomeTime(valor.trim())}
          obrigatorio={true}
        />
        <CampoTexto
          label="cor do time"
          placeholder="Ex.:#000000"
          tipo="color"
          valor={corTime}
          aoAlterar={valor => setCorTime(valor)}
          obrigatorio={true}
        />

        <Botao cor="#fff">
          criar novo time
        </Botao>
      </FormContainer>
    </Container>
  )
} 