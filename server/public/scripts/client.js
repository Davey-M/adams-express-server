// $(main)

// async function main() {
//     console.log('Javascript and JQuery are loaded');

//     let quotes = await getQuotes();

//     for (let quote of quotes) {
//         $('#quoteContainer').append(`
//             <div>
//                 <h3>By: ${quote.author}</h3>
//                 <p>Quote: ${quote.text}</p>
//             </div>
//         `);
//     }
// }

// async function getQuotes() {
//     let response = await fetch('/quotes');
//     let quotes = await response.json();

//     return quotes;
// }

$(onReady)

function onReady() {
    console.log('JS & JQuery');

    getQuotes();
}

function getQuotes() {
    // get quotes from the server with JQuery
}