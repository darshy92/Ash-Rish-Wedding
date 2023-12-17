function findSeat() {
    var name = document.getElementById('name').value.toLowerCase();

    // Check if the name exists in the seating data
    var matchingSeats = seatingData.filter(item => {
        return item.name.toLowerCase().includes(name);
    });

    if (matchingSeats.length > 0) {
        var resultHtml = '<p>Multiple matches found:</p>';
        matchingSeats.forEach(seat => {
            resultHtml += `<p>${seat.name}, your seat is at Table ${seat.tableNumber}</p>`;
        });
        document.getElementById('result').innerHTML = resultHtml;
    } else {
        document.getElementById('result').innerHTML = 'Name not found. Please check your spelling and ensure there are no spaces after your name.';
    }
}
