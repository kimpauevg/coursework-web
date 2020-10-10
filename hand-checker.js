class HandChecker {
    constructor(hand) {
        this.hand = hand;
        this.unique_colors = unique(hand.colors);
        this.max_card_val = null;
        let ranks_asc = asc(hand.ranks);
        this.all_cards_are_in_order = true;
        for (let rank_order = 1; rank_order < 5; rank_order++) {
            if (ranks_asc[rank_order] - ranks_asc[rank_order - 1] !== 1) {
                this.all_cards_are_in_order = false;
                break;
            }
        }

        this.max_card_val = Math.max.apply(null, this.hand.ranks);
        this.cards_by_repeat = this.getRepeats(hand);
    }


    /** Functions */
    getCombo() {
        let combos_functions = {
            ROYAL_FLUSH_VAL: 'royalFlush',
            STAIGHT_FLUSH_VAL: 'straightFlush',
            FOUR_OF_KIND_VAL: 'fourOfKind',
            FULL_HOUSE_VAL: 'fullHouse',
            FLUSH_VAL: 'flush',
            STRAIGHT_VAL: 'straight',
            THREE_OF_KIND_VAL: 'threeOfKind',
            TWO_PAIR_VAL: 'twoPair',
            PAIR_VAL: 'pair',
            HIGH_CARD_VAL: 'highCard',
        };
        for (let combo_order in combos_functions) {
            let combo_method_name = combos_functions[combo_order];
            let is_combo = this[combo_method_name]();
            if (is_combo) {
                return this.asCombo(combo_order);
            }
        }
        throw Error("Unknown combo");
    }

    //start combo functions
    royalFlush() {
        return (this.all_cards_are_in_order
            && this.unique_colors.length === 1
            && this.max_card_val === ACE_VAL)
    }

    straightFlush() {
        return (this.all_cards_are_in_order
            && this.unique_colors.length === 1);
    }

    fourOfKind() {
        return this.cards_by_repeat.includes(4)
    }

    fullHouse() {
        return (this.cards_by_repeat.includes(3)
            && this.cards_by_repeat.includes(2));
    }

    flush() {
        return (this.unique_colors.length === 1)
    }

    straight() {
        return (this.all_cards_are_in_order)
    }

    threeOfKind() {
        return (this.cards_by_repeat.includes(3))
    }

    //crutch
    twoPair() {
        return (this.cards_by_repeat.includes(2) && this.cards_by_repeat.length === 3)
    }

    pair() {
        return (this.cards_by_repeat.includes(2))
    }

    highCard() {
        return true;
    }
    // end combo functions
    asCombo(abs_val) {
        return new Combo(abs_val)
    }

    getRepeats(hand) {
        let repeats_obj = {};
        for (let card_num in hand.cards) {
            let card = hand.cards[card_num];
            if (repeats_obj[card.rank]) {
                repeats_obj[card.rank]++;
            } else {
                repeats_obj[card.rank] = 1;
            }
        }
        let repeats_arr = [];
        for (let repeat_card in repeats_obj) {
            repeats_arr.push(repeats_obj[repeat_card])
        }
        return repeats_arr;
    }
}
