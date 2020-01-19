import React from 'react';
import * as s from './style';

const DevList = ({ items }) => (
  <s.List>
    {items.map(item => (
      <s.ListItem key={item}>
        <s.Header>
          <s.Avatar
            src="https://avatars0.githubusercontent.com/u/16882226?s=460&v=4"
            alt="Eduardo Umpierre"
          />
          <s.Info>
            <s.Name>Eduardo Umpierre</s.Name>
            <s.Techs>ReactJS</s.Techs>
          </s.Info>
        </s.Header>
        <s.Bio>Front-end developer</s.Bio>
        <s.Link href="https://github.com/eduardoumpierre">
          Acessar perfil no Github
        </s.Link>
      </s.ListItem>
    ))}
  </s.List>
);

export default DevList;
