// 1. Ask user Km number to cover
var kmNumber = parseInt(prompt("Quanti chilometri dovrai percorrere?"));
document.getElementById("km").innerHTML = kmNumber + " Km";
// console.log(kmNumber);

// 2. Ask user his/her age
var passengerAge = parseInt(prompt("Quanti anni ha il passeggero?"));
document.getElementById("age").innerHTML = passengerAge + " anni";
// console.log(passengerAge);

// 3. General var to calc ticket-price in relationship to Km to cover
var ticketPrice = (kmNumber * 0.21);
// console.log(ticketPrice);

// 4. Final price in relationship to specific case
if (passengerAge < 18) {
    var kidsTicket = (ticketPrice - ((ticketPrice * 20) / 100)).toFixed(2);
    document.getElementById("kids").innerHTML = kidsTicket + " &euro;";
    document.getElementById("over-65").innerHTML = "Il passeggero è minorenne";
    document.getElementById("full-price").innerHTML = "Il passeggero è minorenne";
} else if (passengerAge > 65) {
    var over65Ticket = (ticketPrice - ((ticketPrice * 40) / 100)).toFixed(2);
    document.getElementById("over-65").innerHTML = over65Ticket + " &euro;";
    document.getElementById("kids").innerHTML = "Il passeggero è over-65";
    document.getElementById("full-price").innerHTML = "Il passeggero è over-65";
} else {
    var fullPrice = ticketPrice.toFixed(2);
    document.getElementById("full-price").innerHTML = fullPrice + " &euro;";
    document.getElementById("kids").innerHTML = "Il biglietto avrà prezzo pieno";
    document.getElementById("over-65").innerHTML = "Il biglietto avrà prezzo pieno";
}



