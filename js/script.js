/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
  
  // Hi, thanks for checking my work. I'm going for the Exceeds Expectations Requirements grade.

/*** 
 * `quotes` array references the quotes objects and their properties. Some of the properties have been commented out to test how it displays.
***/
let quotes = [
    {
        quote: "Get to the choppa!!",
        source: "Arnold Schwarzenegger as<br /> Major Alan 'Dutch' Schaefer",
        //citation: "Predator",
        year: 1987,
        genre: "Action"
    },
    {
        quote: "Somebody put me back in the fridge.",
        source: "Sylvester Stallone as<br /> John Spartan",
        citation: "Demolition Man",
        //year: 1993,
        genre: "Action"
    },
     {
        quote: "Hello. My name is Inigo Montoya. You killed my father. Prepare to die.",
        source: "Mandy Patinkin as<br /> Inigo Montoya",
        citation: "The Princess Bride",
        year: 1987,
        //genre: "Fantasy"
    },
    {
        quote: "Are you aiming for these people?",
        source: "Samuel L. Jackson as<br /> Zeus Carver",
        citation: "Die Hard with a Vengeance",
        year: 1995,
        genre: "Action"
    },
    {
        quote: "Killian, here's your Subzero... now plain zero.",
        source: "Arnold Schwarzenegger as<br />Ben Richards",
        citation: "The Running Man",
        year: 1987,
        genre: "Action"
    },
    {
        quote: "Do I look like I need a psychological evaluation?",
        source: "Gary Busey as<br /> Commander Krill",
        citation: "Under Seige",
        year: 1992,
        genre: "Action"
    },
    {
        quote: "It's so stimulating being your hat.",
        source: "Michael Hordern voicing<br /> The Wiseman's hat",
        citation: "Labyrinth",
        year: 1986,
        genre: "Fantasy"
    },
    {
        quote: "The way I see it, if you’re going to build a time machine into a car, why not do it with some style?",
        source: "Christopher Lloyd as<br /> Dr. Emmett 'Doc' Brown",
        citation: "Back  to the Future",
        year: 1985,
        genre: "Sci-fi"
    },
]



/***
 * `getRandomQuote` function picks a random number between 1 and the amount of objects in the quotes array
***/
function getRandomQuote () {
    const randomNumber = Math.floor(Math.random() * quotes.length) + 1;
    return quotes[randomNumber];
}


/***
 * `printQuote` function takes the result of getRandomQuote to pick a quote object and prints it to the element "quote-box"s inner HTML
***/

function printQuote () {
    let quoteString = '';
    let randomQuote = getRandomQuote();

    let quote = '<p class="quote">' + [randomQuote.quote] + '</p>' + '<p class="source">' + [randomQuote.source];
    let citation = '<span class="citation">' + [randomQuote.citation] + '</span>';
    let year = '<span class="year">' + [randomQuote.year] + '</span>';
    let genre = '<p class="quote-genre">' + '<span class="genre">' + [randomQuote.genre] + '</span>';

    if (randomQuote.citation && randomQuote.year) {
        quoteString = quote + citation + year;
    } else if (randomQuote.year) {
        quoteString = quote + year;
    } else if (randomQuote.citation) {
        quoteString = quote + citation;
    } else {
        quoteString = quote;
    }
    if (randomQuote.genre) {
        quoteString += genre;
    }
    document.getElementById("quote-box").innerHTML = quoteString + '</p>';
}

/***
 * `bodyColor` function to randomly generate CSS RGB colors to style the <body> elements background color
***/
   function bodyColor () {
        const r = Math.floor(Math.random() * 256) + 1;
        const g = Math.floor(Math.random() * 256) + 1;
        const b = Math.floor(Math.random() * 256) + 1;
        const randomColor = "rgb(" + r + "," + g + "," + b + ")";
        
        document.body.style.background = randomColor;
    }
    
  /***
 * `quoteTimer` function containing printQuote & bodyColor functions to be called later by setInterval, to change color and quote every 20 seconds
***/  
function quoteTimer() {
        printQuote();
        bodyColor();
}

setInterval(quoteTimer, 20000);
    

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);