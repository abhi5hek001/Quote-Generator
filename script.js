let btn = document.querySelector('#new-quote');

let quote = document.querySelector('.quote');

let person = document.querySelector('.person');

const apiUrl = "https://api.quotable.io/quotes/random?limit=1";

document.addEventListener('click', () => {

	fetch(apiUrl)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.json();
		})
		.then(data => {
			const quotes = data[0];
			// console.log(`Quote: ${quote.content}`);
			quote.innerText = quotes.content;
			// console.log(`Author: ${quote.author.name}`);
			person.innerText = quotes.author;
		})
		.catch(error => {
			console.error("Error fetching quote:", error);
		});

})



