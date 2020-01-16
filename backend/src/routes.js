const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

routes.post('/devs', async (req, res) => {
  const { github_username, techs } = req.body;

  const { data } = await axios.get(
    `https://api.github.com/users/${github_username}`
  );

  const { name = login, avatar_url, bio } = data;

  const techsArray = techs.split(',').map(tech => tech.trim());

  const dev = await Dev.create({
    bio,
    name,
    avatar_url,
    github_username,
    techs: techsArray,
  });

  return res.json(dev);
});

module.exports = routes;
