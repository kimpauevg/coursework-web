var HIGH_CARD_VAL = 1;
var PAIR_VAL = 2;
var TWO_PAIR_VAL = 3;
var THREE_OF_KIND_VAL = 4;
var STRAIGHT_VAL = 5;
var FLUSH_VAL = 6;
var FULL_HOUSE_VAL = 7;
var FOUR_OF_KIND_VAL = 8;
var STAIGHT_FLUSH_VAL = 9;
var ROYAL_FLUSH_VAL = 10;

function unique(arr_to_filter) {
    return arr_to_filter.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    })
}

function asc(arr_to_filter) {
    return arr_to_filter.sort(function (one, two) {
        return Math.sign(one - two)
    })
}