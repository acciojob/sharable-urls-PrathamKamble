const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    
    event.preventDefault();

    let url = document.getElementById('url');
    let query = window.location.search;

    url.innerHTML = `https://localhost:8080/${query}`
});