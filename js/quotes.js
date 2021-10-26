const quotes = [
    { quotes : "The rest is silence."  ,
        author : "William Shakespeare"
    },
    { quotes : "Everything that one thinks about a lot becomes problematic."  ,
    author : "Friedrich Nietzsche"
    },
    { quotes : "Weakness of attitude becomes weakness of character."  ,
    author : "Albert Einstein"
    },
    { quotes : "Determine never to be idle...It is wonderful how much may be done if we are always doing." ,
    author : "Thomas Jefferson"
    },
    { quotes : "He that can have patience can have what he will."  ,
    author : "Benjamin Franklin"
    },
    { quotes : "Everywhere I go I find a poet has been there before me."  ,
    author : "Sigmund Freud"
    },
    { quotes : "Sometimes even to live is an act of courage."  ,
    author : "Seneca"
    },
    { quotes : "In youth we learn; in age we understand."  ,
    author : "Marie Ebner von Eschenbach"
    },
    { quotes : "Life is a long lesson in humility."  ,
    author : "James M. Barrie"
    },
    ]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

let todayQuote = quotes[Math.floor(Math.random()* quotes.length)];

function showQuete(){
    quote.innerText = todayQuote.quotes;
    author.innerText = todayQuote.author;
    todayQuote = quotes[Math.floor(Math.random()* quotes.length)];
    

}
showQuete();
setInterval(showQuete,5000);