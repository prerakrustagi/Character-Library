var Alphabet = function() {
    var data = [0,0,0,0,0,0,0,0];

    var __setLetter = function(letter) {
        switch(letter) {
            case "A":
                data = [0,0B011100,0B100010,0B111110,0B100010,0B100010,0,0]
                break;
            case "B":
                data = [0,0B111100,0B100010,0B111100,0B100010,0B111100,0,0]
                break;
            case "C":
                data = [0,0B011110,0B100000,0B100000,0B100000,0B011110,0,0]
                break;
            case "D":
                data = [0,0B111100,0B100010,0B100010,0B100010,0B111100,0,0]
                break;
            case "E":
                data = [0,0B111110,0B100000,0B111000,0B100000,0B111110,0,0]
                break;
            case "F":
                data = [0,0B111110,0B100000,0B111000,0B100000,0B100000,0,0]
                break;
            case "G":
                data = [0,0B011110,0B100000,0B101110,0B100010,0B011100,0,0]
                break;
            case "H":
                data = [0,0B100010,0B100010,0B111110,0B100010,0B100010,0,0]
                break;
            case "I":
                data = [0,0B111110,0B001000,0B001000,0B001000,0B111110,0,0]
                break;
            case "J":
                data = [0,0B000010,0B000010,0B000010,0B100010,0B011100,0,0]
                break;
            case "K":
                data = [0,0B100010,0B100100,0B111000,0B100100,0B100010,0,0]
                break;
            case "L":
                data = [0,0B100000,0B100000,0B100000,0B100000,0B111110,0,0]
                break;
            case "M":
                data = [0,0B100010,0B110110,0B101010,0B100010,0B100010,0,0]
                break;
            case "N":
                data = [0,0B100010,0B110010,0B101010,0B100110,0B100010,0,0]
                break;
            case "O":
                data = [0,0B011100,0B100010,0B100010,0B100010,0B011100,0,0]
                break;
            case "P":
                data = [0,0B111100,0B100010,0B111100,0B100000,0B100000,0,0]
                break;
            case "Q":
                data = [0,0B011100,0B100010,0B101010,0B100100,0B011010,0,0]
                break;
            case "R":
                data = [0,0B111100,0B100010,0B111100,0B100010,0B100010,0,0]
                break;
            case "S":
                data = [0,0B011110,0B100000,0B011100,0B000010,0B111100,0,0]
                break;
            case "T":
                data = [0,0B111110,0B001000,0B001000,0B001000,0B001000,0,0]
                break;
            case "U":
                data = [0,0B100010,0B100010,0B100010,0B100010,0B011100,0,0]
                break;
            case "V":
                data = [0,0B100010,0B100010,0B100010,0B010100,0B001000,0,0]
                break;
            case "W":
                data = [0,0B100010,0B100010,0B101010,0B110110,0B100010,0,0]
                break;
            case "X":
                data = [0,0B100010,0B010100,0B001000,0B010100,0B100010,0,0]
                break;
            case "Y":
                data = [0,0B100010,0B010100,0B001000,0B001000,0B001000,0,0]
                break;
            case "Z":
                data = [0,0B111110,0B000100,0B001000,0B010000,0B111110,0,0]
                break;
            case "!":
                data = [0,0B001000,0B001000,0B001000,0B000000,0B001000,0,0]
                break;
            case "?":
                data = [0,0B011100,0B100010,0B001100,0B000000,0B001000,0,0]
                break;
            case " ":
                data = [0,0,0,0,0,0,0,0]
                break;
        }
        return data;
    };

    var __setLetterR = function(letter) {
        switch(letter) {
            case "A":
                data = [0,0,0B111100,0B001010,0B001010,0B001010,0B111100,0]
                break;
            case "B":
                data = [0,0,0B111110,0B101010,0B101010,0B101010,0B010100,0]
                break;
            case "C":
                data = [0,0,0B011100,0B100010,0B100010,0B100010,0B100010,0]
                break;
            case "D":
                data = [0,0,0B111110,0B100010,0B100010,0B100010,0B011100,0]
                break;
            case "E":
                data = [0,0,0B111110,0B101010,0B101010,0B100010,0B100010,0]
                break;
            case "F":
                data = [0,0,0B111110,0B001010,0B001010,0B000010,0B000010,0]
                break;
            case "G":
                data = [0,0,0B011100,0B100010,0B101010,0B101010,0B011010,0]
                break;
            case "H":
                data = [0,0,0B111110,0B001000,0B001000,0B001000,0B111110,0]
                break;
            case "I":
                data = [0,0,0B100010,0B100010,0B111110,0B100010,0B100010,0]
                break;
            case "J":
                data = [0,0,0B010000,0B100000,0B100000,0B100000,0B011110,0]
                break;
            case "K":
                data = [0,0,0B111110,0B001000,0B001000,0B010100,0B100010,0]
                break;
            case "L":
                data = [0,0,0B111110,0B100000,0B100000,0B100000,0B100000,0]
                break;
            case "M":
                data = [0,0,0B111110,0B000100,0B001000,0B000100,0B111110,0]
                break;
            case "N":
                data = [0,0,0B111110,0B000100,0B001000,0B010000,0B111110,0]
                break;
            case "O":
                data = [0,0,0B011100,0B100010,0B100010,0B100010,0B011100,0]
                break;
            case "P":
                data = [0,0,0B111110,0B001010,0B001010,0B001010,0B000100,0]
                break;
            case "Q":
                data = [0,0,0B011100,0B100010,0B101010,0B010010,0B101100,0]
                break;
            case "R":
                data = [0,0,0B111110,0B001010,0B001010,0B001010,0B110100,0]
                break;
            case "S":
                data = [0,0,0B100100,0B101010,0B101010,0B101010,0B010010,0]
                break;
            case "T":
                data = [0,0,0B000010,0B000010,0B111110,0B000010,0B000010,0]
                break;
            case "U":
                data = [0,0,0B011110,0B100000,0B100000,0B100000,0B011110,0]
                break;
            case "V":
                data = [0,0,0B001110,0B010000,0B100000,0B010000,0B001110,0]
                break;
            case "W":
                data = [0,0,0B111110,0B010000,0B001000,0B010000,0B111110,0]
                break;
            case "X":
                data = [0,0,0B100010,0B010100,0B001000,0B010100,0B100010,0]
                break;
            case "Y":
                data = [0,0,0B000010,0B000100,0B111000,0B000100,0B000010,0]
                break;
            case "Z":
                data = [0,0,0B100010,0B110010,0B101010,0B100110,0B100010,0]
                break;
            case "!":
                data = [0,0,0B000000,0B000000,0B101110,0B000000,0B000000,0]
                break;
            case "?":
                data = [0,0,0B000100,0B000010,0B101010,0B001010,0B000100,0]
                break;
            case " ":
                data = [0,0,0,0,0,0,0,0]
                break;
        }
        return data;
    };

    var __setNumber = function(number) {
        switch(number) {
            case 0:
                data = [0,0B011100,0B100110,0B101010,0B110010,0B011100,0,0]
                break;
            case 1:
                data = [0,0B111000,0B001000,0B001000,0B001000,0B111110,0,0]
                break;
            case 2:
                data = [0,0B111100,0B000010,0B011100,0B100000,0B111110,0,0]
                break;
            case 3:
                data = [0,0B111100,0B000010,0B001100,0B000010,0B111100,0,0]
                break;
            case 4:
                data = [0,0B100100,0B100100,0B100100,0B111110,0B000100,0,0]
                break;
            case 5:
                data = [0,0B111110,0B100000,0B111100,0B000010,0B111100,0,0]
                break;
            case 6:
                data = [0,0B011110,0B100000,0B111100,0B100010,0B011100,0,0]
                break;
            case 7:
                data = [0,0B111110,0B000010,0B000100,0B001000,0B001000,0,0]
                break;
            case 8:
                data = [0,0B011100,0B100010,0B011100,0B100010,0B011100,0,0]
                break;
            case 9:
                data = [0,0B011100,0B100010,0B011110,0B000010,0B111100,0,0]
                break;
        }
        return data;
    };

    var __setDiceNumber = function(number) {
        switch(number) {
            case 1:
                data = [0,0B00000000,0B00000000,0B00011000,0B00011000,0B00000000,0B00000000,0]
                break;
            case 2:
                data = [0,0B00000110,0B00000110,0B00000000,0B00000000,0B01100000,0B01100000,0]
                break;
            case 3:
                data = [0,0B00000011,0B00000011,0B00011000,0B00011000,0B11000000,0B11000000,0]
                break;
            case 4:
                data = [0,0B01100110,0B01100110,0B00000000,0B00000000,0B01100110,0B01100110,0]
                break;
            case 5:
                data = [0,0B11000011,0B11000011,0B00011000,0B00011000,0B11000011,0B11000011,0]
                break;
            case 6:
                data = [0,0B11011011,0B11011011,0B00000000,0B00000000,0B11011011,0B11011011,0]
                break;
        }
        return data;
    };

    return {
        'setLetter': __setLetter,
        'setLetterR': __setLetterR,
        'setNumber': __setNumber,
        'setDiceNumber': __setDiceNumber,
    }
};

module.exports = Alphabet();
return module.exports;
