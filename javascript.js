var quotes = [
    {quote:"You miss 100% of the shots you don't take." , 
    author: "--Wayne Gretzy"},
    {quote:"Resentment is like drinking poison and waiting for your enemies to die." ,
    author: "--Nelson Mandela "},
    {quote:"Do not take life too seriously. You will not get out alive." ,
    author: "--Elbert Hubbard"},
    {quote:"The best revenge is massive success." ,
    author: "--Frank Sinatra"},
    {quote:"It's not what happens to you, but how you react to it that matters." ,
    author: "--Epictetus"}
]

function newquote() {
    var randomnumber=Math.floor(Math.random()*(quotes.length))
    document.getElementById('quotess').innerHTML=quotes[randomnumber].quote;
    document.getElementById('Auther').innerHTML=quotes[randomnumber].author;
}