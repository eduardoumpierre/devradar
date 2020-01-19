import React from 'react';
import * as s from './style';

const App = () => {
  const renderAsideContent = () => (
    <s.Aside>
      <s.AsideTitle>Cadastrar</s.AsideTitle>
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
    </s.Aside>
  );

  return (
    <s.Container>
      {renderAsideContent()}
      <s.Main></s.Main>
    </s.Container>
  );
};

export default App;
