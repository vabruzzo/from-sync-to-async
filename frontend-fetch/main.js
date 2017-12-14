const fetchData = async () => {
  const response = await fetch("https://swapi.co/api/planets/1/");
  const responseJson = await response.json();
  return responseJson;
};

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

const fetchAndRender = async () => {
  try {
    const data = await fetchData();
    renderData(data);
  } catch (err) {
    renderError(err);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#displayData");
  button.addEventListener("click", fetchAndRender);
});
