const fs = require("fs");
const { promisify } = require("util");
const fetch = require("isomorphic-fetch");

const readFile = promisify(fs.readFile);

const getUrl = async () => {
  return await readFile("url.txt", "utf8");
};

const fetchData = async url => {
  const response = await fetch(url);
  return await response.json();
};

const readAndFetch = async () => {
  try {
    const url = await getUrl();
    const planet = await fetchData(url);
    const resident = await fetchData(planet.residents[0]);
    const species = await fetchData(resident.species[0]);
    console.log(species.name);
  } catch (err) {
    console.error(err);
  }
};

readAndFetch();
