const fetchData = () =>
  fetch("https://swapi.co/api/planets/1/").then(response => response.json());

const renderError = err => {
  console.error(err);
  const errorNode = document.querySelector("#errorMsg");
  errorNode.innerHTML = err;
};

const renderData = data => {
  const listNode = document.querySelector("#list");
  data.residents.forEach(resident => {
    const li = document.createElement("li");
    li.innerHTML = `URL for resident: <a href="${resident}" target="_blank">${resident}</a>`;
    listNode.appendChild(li);
  });
};

const fetchAndRender = () => {
  fetchData()
    .then(response => {
      renderData(response);
    })
    .catch(err => {
      renderError(err);
    });
};

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#displayData");
  button.addEventListener("click", fetchAndRender);
});
