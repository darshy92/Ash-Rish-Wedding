function findSeat() {
    var name = document.getElementById('name').value;

    // Check if the name exists in the seating data
    var seatInfo = seatingData.find(item => item.name.toLowerCase() === name.toLowerCase());

    if (seatInfo) {
        var tableNumber = seatInfo.tableNumber;
        document.getElementById('result').innerHTML = name + ', your seat is at Table ' + tableNumber;
    } else {
        document.getElementById('result').innerHTML = 'Name not found. Please check your entry.';
    }
}
