class Dealer {
    constructor(all_cards_arrays) {
        let all_combos = {};
        for (let card_arr_num in all_cards_arrays){
            let hand = new Hand(all_cards_arrays[card_arr_num]);
            all_combos[card_arr_num] = (new HandChecker(hand).getCombo());
        }
        this.combos = all_combos
    }

    declareResult() {
        let max_abs_val = 0;
        let winning_combos = {};
        for (let player in this.combos) {
            let current_combo = this.combos[player];
            if (current_combo.combo_abs_val > max_abs_val) {
                max_abs_val = current_combo.combo_abs_val;
                winning_combos = {};
                winning_combos[player] = current_combo;
            } else if (current_combo.combo_abs_val === max_abs_val) {
                winning_combos[player] = current_combo
            }

        }
        return (new Result(winning_combos)).toString()
    }
}
    