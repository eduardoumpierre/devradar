import React, { useEffect, useState } from 'react';
import DevList from './components/DevList';
import * as s from './style';
import { addDev, getDevs } from './services/devs';

const App = () => {
  const [devs, setDevs] = useState([]);
  const [form, setForm] = useState({
    techs: '',
    latitude: '',
    longitude: '',
    github_username: '',
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setForm(prev => ({ ...prev, latitude, longitude }));
      },
      error => {
        console.log(error);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  useEffect(() => {
    async function loadDevs() {
      const response = await getDevs();
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  const handleFormChange = ({ target }) => {
    setForm(prev => ({ ...prev, [target.name]: target.value }));
  };

  const handleFormSubmit = async e => {
    e.preventDefault();

    const response = await addDev(form);

    setDevs([...devs, response.data]);
    setForm({ ...form, github_username: '', techs: '' });
  };

  const renderForm = () => (
    <s.Form onSubmit={handleFormSubmit}>
      <s.InputBlock>
        <s.Label htmlFor="github_username">Usuário do Github</s.Label>
        <s.Input
          required
          id="github_username"
          name="github_username"
          value={form.github_username}
          onChange={handleFormChange}
        />
      </s.InputBlock>

      <s.InputBlock>
        <s.Label htmlFor="techs">Tecnologias</s.Label>
        <s.Input
          required
          id="techs"
          name="techs"
          value={form.techs}
          onChange={handleFormChange}
        />
      </s.InputBlock>

      <s.InputGroup>
        <s.InputBlock>
          <s.Label htmlFor="latitude">Latitude</s.Label>
          <s.Input
            required
            id="latitude"
            name="latitude"
            type="number"
            value={form.latitude}
            onChange={handleFormChange}
          />
        </s.InputBlock>

        <s.InputBlock>
          <s.Label htmlFor="longitude">Longitude</s.Label>
          <s.Input
            required
            id="longitude"
            name="longitude"
            type="number"
            value={form.longitude}
            onChange={handleFormChange}
          />
        </s.InputBlock>
      </s.InputGroup>

      <s.Button type="submit">Salvar</s.Button>
    </s.Form>
  );

  const renderAsideContent = () => (
    <s.Aside>
      <s.AsideTitle>Cadastrar</s.AsideTitle>
      {renderForm()}
    </s.Aside>
  );

  const renderMainContent = () => (
    <s.Main>
      <DevList items={devs} />
    </s.Main>
  );

  return (
    <s.Container>
      {renderAsideContent()}
      {renderMainContent()}
    </s.Container>
  );
};

export default App;
