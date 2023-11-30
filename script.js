const submit = document.getElementById('button');

button.addEventListener('submit', () => {
const url = document.getElementById('url');

let location = window.location.search;

url.innerHTML = location;
	
});
