function kilometerToMeter(kilometers) {
    var meters = kilometers * 1000;

    return meters;
}
var length = kilometerToMeter(20);
console.log(length);


function budgetCalculator(watch, mobile, laptop) {
    var wactchAll = watch * 50;
    var mobileAll = mobile * 100;
    var laptopAll = laptop * 500;

    return wactchAll + mobileAll + laptopAll;
}
var entirePrice = budgetCalculator(2, 2, 2);
console.log(entirePrice);


function hotelCost(bookedDays) {
    var daysTotal = 0;
    if (bookedDays <= 10) {
        daysTotal = bookedDays * 100;
    }
    else if (bookedDays <= 20) {
        var firstPortion = 10 * 100;
        var existing = bookedDays - 10;
        var secondPortion = existing * 80;
        daysTotal = firstPortion + secondPortion;
    }
    else {
        var firstPortion = 10 * 100;
        var secondPortion = 10 * 80;
        var existing = bookedDays - 20;
        var thirdPortion = existing * 50;
        daysTotal = firstPortion + secondPortion + thirdPortion;
    }
    return daysTotal;
}
var entireCost = hotelCost(30);
console.log(entireCost);


function megaFriend(friendsName) {
    var biggestName = friendsName[0]
    for (var i = 0; i < friendsName.length; i++) {
        var element = friendsName[i];
        if (element.length > biggestName.length) {
            biggestName = element;
        }
    }
    return element;
}
var allNames = megaFriend(['a', 'ab', 'abc', 'abcd', "abcde"]);
console.log(allNames);