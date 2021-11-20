// Define document elements
const responseList = document.querySelector("#response-list");

fetch("/responses.json").then(r => r.json()).then(responses => responses.forEach(response =>
{
    responseList.innerHTML += `
        <div id="${response.id}" class="response">
            <img src="${response.src}" alt="${response.name}">
            <div>
                <h3>${response.name}</h3>
                <span class="copy-button"></span>
            </div>
        </div>
    `;
})).then(() =>
{
    $(".copy-button").load("/assets/icons/copy.svg");
});