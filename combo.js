class Combo {
    constructor(abs_val) {
        this.combo_abs_val = window[abs_val];
        this.combo_name = Combo.getName(abs_val);
    }
    static getName(name_val) {
        let all_names = {
            ROYAL_FaLUSH_VAL: 'Royal flush',
            STAIGHT_FLUSH_VAL: 'Straight flush',
            FOUR_OF_KIND_VAL: 'Four of kind',
            FULL_HOUSE_VAL: 'Full house',
            FLUSH_VAL: 'Flash',
            STRAIGHT_VAL: 'Straight',
            THREE_OF_KIND_VAL: 'Three of kind',
            TWO_PAIR_VAL: 'Two pairs',
            PAIR_VAL: 'Pair',
            HIGH_CARD_VAL: 'High card',

        }
        return all_names[name_val];
    }
}
