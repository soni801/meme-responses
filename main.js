// Define document elements
const responseList = document.querySelector("#response-list");

fetch("/responses.json").then(r => r.json()).then(responses => responses.forEach(response =>
{
    // Load responses
    responseList.innerHTML += `
        <div id="${response.id}" class="response">
            <img src="${response.src}" alt="${response.name}">
            <div>
                <h3>${response.name}</h3>
                <span class="copy-button" content="${response.src}"></span>
            </div>
        </div>
    `;
})).then(() =>
{
    // Load copy button
    $(".copy-button").load("/assets/icons/copy.svg");

    // Add event listener to copy button
    document.querySelectorAll(".copy-button").forEach(e =>
    {
        e.addEventListener("click", () =>
        {
            navigator.clipboard.writeText(e.getAttribute("content")).then(() => console.log("Copied to clipboard"));
        });
    });
});