import React from 'react';
import DevList from './components/DevList';
import * as s from './style';

const App = () => {
  const renderForm = () => (
    <s.Form>
      <s.InputBlock>
        <s.Label htmlFor="github_username">Usuário do Github</s.Label>
        <s.Input name="github_username" id="github_username" required />
      </s.InputBlock>

      <s.InputBlock>
        <s.Label htmlFor="techs">Tecnologias</s.Label>
        <s.Input name="techs" id="techs" required />
      </s.InputBlock>

      <s.InputGroup>
        <s.InputBlock>
          <s.Label htmlFor="latitude">Latitude</s.Label>
          <s.Input name="latitude" id="latitude" required />
        </s.InputBlock>

        <s.InputBlock>
          <s.Label htmlFor="longitude">Longitude</s.Label>
          <s.Input name="longitude" id="longitude" required />
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
      <DevList items={[1, 2, 3, 4]} />
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
