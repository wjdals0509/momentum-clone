const quotes = [
    {
        quote: "Every moment is a fresh beginning",
        author: "T.S Eliot",
    },
    {
        quote: "Everything you can imagine is real",
        author: "Pablo Picasso",
    },
    {
        quote: "Simplicity is the ultimate sophistication",
        author: "Leonardo da Vinci",
    },
    {
        quote: "Yesterday you said tomorrow. Just do it",
        author: "Nike",
    },
    {
        quote: "I don't need it to bo easy, I need it to be worth it",
        author: "Lil Wayne",
    },
    {
        quote: "And still, I rise",
        author: "Maya Angelou",
    },
    {
        quote: "If you would be loved, love, and be loveable",
        author: "Benjamin Franklin",
    },
    {
        quote: "For success, attitude is equally as import as ability",
        author: "Harry F.Banks",
    },
    {
        quote: "Don't wish it were easier. Wish you were better",
        author: "Jim Rohn",
    },
    {
        quote: "Less is more",
        author: "Mies Van der Rohe",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//Math.random() : 랜덤한 숫자를 가져다줌(0~1사이)
//floor() : 소수점 버림 
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

