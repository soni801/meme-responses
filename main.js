// Define document elements
const responseList = document.querySelector("#response-list");

fetch("/responses.json").then(r => r.json()).then(responses => responses.forEach(response =>
{
    responseList.innerHTML += `
        <div id="${response.id}">
            <img src="${response.src}" alt="${response.name}">
            <h3>${response.name}</h3>
        </div>
    `;
}));