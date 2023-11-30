const submit = document.getElementById('button');
const url = document.getElementById('url');

let location = window.location.search;
submit.addEventListener('submit', () => {

url.innerHTML = location;
	
});
