const fs = require("fs");
const { promisify } = require("util");
const fetch = require("isomorphic-fetch");

const readFile = promisify(fs.readFile);

const getUrl = () => {
  return readFile("url.txt", "utf8");
};

const fetchData = url => fetch(url).then(response => response.json());

const readAndFetch = () => {
  getUrl()
    .then(url => fetchData(url))
    .then(planet => fetchData(planet.residents[0]))
    .then(resident => fetchData(resident.species[0]))
    .then(species => console.log(species.name))
    .catch(err => {
      console.log(err);
    });
};

readAndFetch();
