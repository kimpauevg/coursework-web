var ACE_VAL = 14;
var QUEEN_VAL = 13;
var KING_VAL = 12;
var JACK_VAL = 11;

class Hand {
    constructor(cards_str_array) {
        let cards = [];
        let colors = [];
        let ranks = [];
        for (let card_str_num in cards_str_array) {
            let card_str = cards_str_array[card_str_num];
            let card_color = Hand.getColor(card_str)

            let card_rank = Hand.getRankNumeric(card_str);

            let card = {
                color: card_color,
                rank: card_rank
            };
            cards.push(card);
            colors.push(card_color);
            ranks.push(card_rank);
        }
        this.cards = cards;
        this.colors = colors;
        this.ranks = ranks;

    }

    static getColor(card_str) {
        return card_str.substr(card_str.length - 1, 1);
    }

    static getRankNumeric(card_str) {
        let card_rank_str = card_str.substr(0, card_str.length - 1);
        if (card_rank_str >= 2 && card_rank_str <= 9) {
            return parseInt(card_rank_str);
        }
        switch (card_rank_str) {
            case '1':
                return 10;
            case 'В':
                return JACK_VAL;
            case 'К':
                return KING_VAL;
            case 'Д':
                return QUEEN_VAL;
            case 'Т':
                return ACE_VAL;

            default:
                throw Error('Card is not registered')
        }

    }

}

