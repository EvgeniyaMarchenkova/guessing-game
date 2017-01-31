class GuessingGame {
    constructor() {
        this.secretNumber = null;
        this.min = null;
        this.max = null;
    }
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }
    guess() {
        this.secretNumber = Math.ceil((this.max+this.min)/2);
        return this.secretNumber;
    }
    lower() {
        this.max = this.secretNumber;
    }

    greater() {
        this.min = this.secretNumber;
    }
}

module.exports = GuessingGame;
