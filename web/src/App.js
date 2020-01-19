import React, { useEffect, useState } from 'react';
import DevList from './components/DevList';
import DevForm from './components/DevForm';
import { Container, Aside, AsideTitle, Main } from './style';
import { addDev, getDevs } from './services/devs';

const App = () => {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await getDevs();
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  const handleFormSubmit = async data => {
    const response = await addDev(data);

    setDevs([...devs, response.data]);
  };

  return (
    <Container>
      <Aside>
        <AsideTitle>Cadastrar</AsideTitle>
        <DevForm onSubmit={handleFormSubmit} />
      </Aside>

      <Main>
        <DevList items={devs} />
      </Main>
    </Container>
  );
};

export default App;
