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

$(onReady);

function onReady() {
    console.log('JS & JQuery');

    // getQuotes();
    asyncGetQuotes();

    $('#inputForm').on('submit', postNewQuote);
}

async function postNewQuote(e) {
    e.preventDefault();

    let form = e.target;

    try {

        let response = await $.ajax({
            method: 'POST',
            url: '/newQuote',
            data: {
                text: form.text.value,
                author: form.author.value,
            },
        });
    
        console.log(response);

        asyncGetQuotes();

    } catch(err) {
        console.log(err);
    }
}

function getQuotes() {
    // get quotes from the server with JQuery

    $.ajax({
        method: 'GET',
        url: '/quotes',
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

        renderToDOM(quotes);

    } catch(err) {

        console.error(err.responseText);
    }

}

function renderToDOM(quotes) {

    $('#quoteContainer').empty();

    for (let quote of quotes) {
        $('#quoteContainer').append(`
            <div class="quote" >
                <p>${quote.text}\n\n<i> - ${quote.author}</i></p>
            </div>
        `);
    }

}