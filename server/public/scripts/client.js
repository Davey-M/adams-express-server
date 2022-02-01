$(main)

async function main() {
    console.log('Javascript and JQuery are loaded');

    let quotes = await getQuotes();

    for (let quote of quotes) {
        $('#quoteContainer').append(`
            <div>
                <p>By: ${quote.author}</p>
                <p>Quote: ${quote.text}</p>
            </div>
        `);
    }
}

async function getQuotes() {
    let response = await fetch('/quotes');
    let quotes = await response.json();

    return quotes;
}