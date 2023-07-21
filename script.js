let btn = document.querySelector('#new-quote');

let quote = document.querySelector('.quote');

let person = document.querySelector('.person');

const quotes = [{
    quote: `"Life is 10% what happens to us and 90% how we react to it."`,
    person: `Charles R. Swindoll`
},
{
    quote: `"You will face many defeats in life, but never let yourself be defeated."`,
    person: `Maya Angelou`
},
{
    quote: `"Do what you can, with what you have, where you are."`,
    person: `Theodore Roosevelt`
},
{
    quote: `"The only place where success comes before work is in the dictionary."`,
    person: `Vidal Sassoon`
},
{
    quote: `"You have to be odd to be number one."`,
    person: `Dr. Seuss`
},
{
    quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person: `Nelson Mandela`
},
{
    quote: `"It does not matter how many times you get knocked down, but how many times you get up."`,
    person: `Vince Lombardi`
},
{
    quote: `"Your time is limited, don't waste it living someone else's life."`,
    person: `Steve Jobs`
},
{
    quote: `"The only true wisdom is in knowing you know nothing."`,
    person: `Socrates`
},
{
    quote: `"Opportunities don't happen. You create them."`,
    person: `Chris Grosser`
},
{
    quote: `"Dream big and dare to fail."`,
    person: `Norman Vaughan`
},
{
    quote: `"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."`,
    person: `Christian D. Larson`
},
{
    quote: `"You miss 100% of the shots you don't take."`,
    person: `Wayne Gretzky`
},
{
    quote: `"You are never too old to set another goal or to dream a new dream."`,
    person: `C.S. Lewis`
},
{
    quote: `"The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it."`,
    person: `Michelangelo`
},
{
    quote: `"The future belongs to those who believe in the beauty of their dreams."`,
    person: `Eleanor Roosevelt`
},
{
    quote: `"Believe you can and you're halfway there."`,
    person: `Theodore Roosevelt`
},
{
    quote: `"In the end, it's not the years in your life that count. It's the life in your years."`,
    person: `Abraham Lincoln`
},
{
    quote: `"It does not matter how slowly you go as long as you do not stop."`,
    person: `Confucius`
},
{
    quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts. "`,
    person: `Winston Churchill`
},
{
    quote: `"Don't let anyone tell you what you can't do. Follow your dreams and persist. "`,
    person: `Barack Obama`
},
{
    quote: `"I have a dream. "`,
    person: `Martin Luther King Jr.`
},

{
    quote: `"The weak can never forgive. Forgiveness is the attribute of the strong. "`,
    person: `Mahatma Gandhi`
},];

btn.addEventListener('click', function (e) {
    // Math.random can also generate decimal number so, Math.floor is used to round down
    console.log(e.target.getAttribute('id') + " is clicked");
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})