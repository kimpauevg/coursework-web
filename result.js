class Result {
    constructor(players_won) {
        this.players_won = players_won;
    }

    toString() {
        let result_str = '';
        let player_id = Object.keys(this.players_won)[0];
        let winning_combo = this.players_won[player_id];
        if (this.players_won.length === 1) {
            result_str += 'Player #' + player_id + ' won!'
        }
        result_str += ' ';
        result_str += 'Winning combination was ';
        result_str += (winning_combo.combo_name);
        return result_str;
    }
}

