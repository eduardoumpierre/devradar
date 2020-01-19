import React from 'react';
import * as s from './style';

const DevList = ({ items }) => (
  <s.List>
    {items.map(item => (
      <s.ListItem key={item._id}>
        <s.Header>
          <s.Avatar src={item.avatar_url} alt={item.name} />
          <s.Info>
            <s.Name>{item.name}</s.Name>
            <s.Techs>{item.techs.join(', ')}</s.Techs>
          </s.Info>
        </s.Header>
        <s.Bio>{item.bio}</s.Bio>
        <s.Link
          href={`https://github.com/${item.github_username}`}
          target="_blank"
        >
          Acessar perfil no Github
        </s.Link>
      </s.ListItem>
    ))}
  </s.List>
);

export default DevList;
