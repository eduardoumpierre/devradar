import React, { useState, useEffect } from 'react';
import { Form, InputBlock, Label, Input, InputGroup, Button } from './style';

const DevForm = ({ onSubmit }) => {
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

  const handleSubmit = async e => {
    e.preventDefault();

    await onSubmit(form);
    setForm({ ...form, github_username: '', techs: '' });
  };

  const handleChange = ({ target }) => {
    setForm(prev => ({ ...prev, [target.name]: target.value }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputBlock>
        <Label htmlFor="github_username">Usuário do Github</Label>
        <Input
          required
          id="github_username"
          name="github_username"
          value={form.github_username}
          onChange={handleChange}
        />
      </InputBlock>

      <InputBlock>
        <Label htmlFor="techs">Tecnologias</Label>
        <Input
          required
          id="techs"
          name="techs"
          value={form.techs}
          onChange={handleChange}
        />
      </InputBlock>

      <InputGroup>
        <InputBlock>
          <Label htmlFor="latitude">Latitude</Label>
          <Input
            required
            id="latitude"
            name="latitude"
            type="number"
            value={form.latitude}
            onChange={handleChange}
          />
        </InputBlock>

        <InputBlock>
          <Label htmlFor="longitude">Longitude</Label>
          <Input
            required
            id="longitude"
            name="longitude"
            type="number"
            value={form.longitude}
            onChange={handleChange}
          />
        </InputBlock>
      </InputGroup>

      <Button type="submit">Salvar</Button>
    </Form>
  );
};

export default DevForm;
