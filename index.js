function generate(){
    var quotes = {
        "_Abhishek" : '"Nothing is impossible if you can print a star pattern in RUST."',
        "_Nelson Mandela" : '"The greatest glory in living lies not in never falling, but in rising every time we fall"',
        "-Ponnappan" : '"Ith eetha aazhccha???"',
        "-Vaasu" : '"NI dhaaravi enn kettittundo?"',
        "-Bhargavan" : '"Mone manassil laddu potti"'
    }
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    document.getElementsByTagName("p")[0].innerHTML = author;


    var quote =  quotes[author];
    document.getElementsByTagName("h1")[0].innerHTML = quote; 

}