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

    // getQuotes();
    asyncGetQuotes();
}

function getQuotes() {
    // get quotes from the server with JQuery

    $.ajax({
        method: 'GET',
        url: '/ruotes',
    }).then(quotes => {
        for (let quote of quotes) {
            $('#quoteContainer').append(`
                <div>
                    <h3>By: ${quote.author}</h3>
                    <p>Quote: ${quote.text}</p>
                </div>
            `);
        }
    }).catch(err => {
        console.log(err)
    })
}

async function asyncGetQuotes() {

    try {

        let quotes = await $.ajax({
            method: 'GET',
            url: '/quotes',
        });

        for (let quote of quotes) {
            $('#quoteContainer').append(`
                <div>
                    <h3>By: ${quote.author}</h3>
                    <p>Quote: ${quote.text}</p>
                </div>
            `);
        }

    } catch(err) {

        console.error(err.responseText);
    }

}