function kilometerToMeter(num) {
    if (num >= 0) {
        var result = num * 1000; //1Km=1000Meter
        return result;
    } else {
        console.log("Kilometer Can't Be Negative");
    }
}

function budgetCalculator(watch, phone, laptop) {
    if (watch >= 0 && phone >= 0 && laptop >= 0) {
        var priceOfWatch = watch * 50; //price of every watch is 50
        var priceOfPhone = phone * 100; //price of every phone is 100
        var priceOfLaptop = laptop * 500; //price of every laptop is 500

        var total = priceOfWatch + priceOfPhone + priceOfLaptop;

        return total;
    } else {
        console.log("Products(s) Can't Be Negative");
    }
}

function hotelCost(days) {
    if (days >= 0) {
        if (days <= 10) {
            total = days * 100; //first 10 days will cost 100 per day
        } else if (days <= 20) {
            var dif = days - 10; //suppose 13 days, so, 13-10=3
            var firstTan = 10 * 100; //first 10 days will cost 100 per day
            var secondTen = dif * 80; //second 10 days will cost 80 per day
            var total = firstTan + secondTen;
        } else {
            var dif = days - 20; //suppose 23 days, so, 23-10=3
            var firstTan = 10 * 100; //first 10 days will cost 100 per day
            var secondTen = 10 * 80; //second 10 days will cost 80 per day
            var lastTen = dif * 50; //more than 20 days will cost 50 per day
            var total = firstTan + secondTen + lastTen;
        }

        return total;
    } else {
        console.log("Days Can't Be Negative");
    }
}

function megaFriend(name) {
    var newName = []; //empty array to store each values of array
    if (name.length > 0) { //checking null array
        for (var i = 0; i < name.length; i++) {
            if (name[i].length > newName.length) { //matching if the length of current value is bigger than the length of stored value
                newName = name[i]; //storing new bigger value to the array
            }
        }
    } else {
        console.log("No Name Here");
    }
    return newName;
}