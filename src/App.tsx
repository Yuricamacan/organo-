import styled from 'styled-components';
import { useState } from 'react';
import { IColaborador } from "./shared/interface/IColaborador.ts"
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import { ITime } from './shared/interface/ITime.ts';
import { v4 as uuidv4 } from "uuid";

const AppContainer = styled.div`
  background: white;
`;

function App() {

  const [times, setTimes] = useState<ITime[]>([
    {
      id: uuidv4(),
      color: "#82CFFA",
      nome: "Front-end"
    },
    {
      id: uuidv4(),
      color: "#57C278",
      nome: "Programação"
    },
    {
      id: uuidv4(),
      color: "#FFBA05",
      nome: "Mobile"
    },
    {
      id: uuidv4(),
      color: "#DB6EBF",
      nome: "UI/UX Design"
    },
    {
      id: uuidv4(),
      color: "#FF8A29",
      nome: "Gestão e Inovação"
    },
    {
      id: uuidv4(),
      color: "#A6D157",
      nome: "Data Science"
    },
    {
      id: uuidv4(),
      color: "#5533FF",
      nome: "Inteligencia Artificial"
    },
    {
      id: uuidv4(),
      color: "#E06B69",
      nome: "DevOps"
    },
  ]); 

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([]);

  const aoNovoColaborador = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function aoDeletar(id: string) {
    setColaboradores(colaboradores.filter(colab =>
      colab.id !== id
    ))
  }

  function aoMudarCor(cor: string, id: string) {
    setTimes(times.map(time => {
      if (time.id == id) {
        time.color = cor;
      }
      return time;
    }))
  }

  function aoCadastrarTime({ nome, color }: { nome: string, color: string }) {
    const timeExistente = times.find(time => time.nome == nome);

    if (!timeExistente) {
      setTimes([...times, {nome, color, id: uuidv4()}]);
    } else {
      alert('Esse time ja existe');
    }
  }

  function aoFavoritar(id: string) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id == id) colaborador.favorito = !colaborador.favorito
      return colaborador
    }))
  }

  return (
    <AppContainer>
      <Banner srcImage="/img/banner.png" />
      <Formulario
        aoCadastrarTime={aoCadastrarTime}
        times={times.map(time => time.nome)}
        aoCadastrar={colaborador => aoNovoColaborador(colaborador)}
      />
      {times.map((time) => (
        <Time
          key={time.id}
          id={time.id}
          nome={time.nome}
          color={time.color}
          colaborador={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoMudar={aoMudarCor}
          aoDeletar={aoDeletar}
          aoFavoritar={aoFavoritar}
        />
      ))}
    </AppContainer>
  );
}

export default App;