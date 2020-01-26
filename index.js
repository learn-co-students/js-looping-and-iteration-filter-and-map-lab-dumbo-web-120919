// Code your solution here:
function driversWithRevenueOver(arrOfObjs, rev) {
    return arrOfObjs.filter(function(obj) {
        return obj['revenue'] > rev;
    });
}

function driverNamesWithRevenueOver(arrOfObjs, rev) {
    return driversWithRevenueOver(arrOfObjs, rev).map(function(obj) {
        return obj['name'];
    });
}

function exactMatch(arrOfObjs, match) {
    return arrOfObjs.filter(function(obj) {
        for (const key in match) {
            return match[key] === obj[key];
        }
    });
}

function exactMatchToList(arrOfObjs, match) {
    return exactMatch(arrOfObjs, match).map(function(obj) {
        return obj['name'];
    });
}