// Define document elements
const searchField = document.querySelector("#search-field");
const responseList = document.querySelector("#response-list");

let allResponses;

// Load page
searchField.value = "";

fetch("/responses.json").then(r => r.json()).then(responses =>
{
    allResponses = responses;
    loadResponses(allResponses);
});

// Dynamically filter
searchField.addEventListener("keyup", () =>
{
    responseList.innerHTML = "";
    loadResponses(allResponses.filter(r => r.name.toLowerCase().includes(searchField.value.toLowerCase())));
});

function loadResponses(list)
{
    // Load responses
    list.forEach(response =>
    {
        responseList.innerHTML += `
        <div id="${response.id}" class="response">
            <img src="${response.src}" alt="${response.name}">
            <div class="context">
                <div class="naming">
                    <code>${response.id}</code>
                    <h3>${response.name}</h3>
                </div>
                <span class="copy-button" data-content="https://r.yessness.com/${response.id}"></span>
            </div>
        </div>
    `;
    });

    // Load copy button
    $(".copy-button").load("/assets/icons/copy.svg");

    // Add event listener to copy button
    document.querySelectorAll(".copy-button").forEach(e =>
    {
        e.addEventListener("click", () =>
        {
            navigator.clipboard.writeText(e.getAttribute("data-content")).then(() => console.log("Copied to clipboard"));
        });
    });
}
