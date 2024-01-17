// Function to load an HTML snippet into the given element
function loadSnippet(element) {
    const snippetUrl = element.getAttribute('data-snippet');
    fetch(snippetUrl)
        .then(response => response.text())
        .then(data => {
            element.innerHTML = data;
        })
        .catch(error => console.error('Error loading snippet:', error));
}

// Load snippets on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.snippet-container');

    containers.forEach(container => {
        loadSnippet(container);
    });
});

