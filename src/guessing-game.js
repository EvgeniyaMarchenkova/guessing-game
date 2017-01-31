class GuessingGame {
    constructor() {
        this.secretNumber = null;
        this.arr = [];
    }
    setRange(min, max) {
        for ( var i = min; i <= max; i++) {
            this.arr.push(i);
        }
    }
    guess() {
        if (this.secretNumber = this.arr[0]  ) {
            return this.arr[0];
        }
        if (this.secretNumber = this.arr[this.arr.length-1]) {
            return this.arr[this.arr.length-1];
        }
        if (this.secretNumber = this.arr[1]  ) {
            return this.arr[1];
        }
        return;
}
    lower() {
        this.arr = this.arr.slice(0, Math.ceil(this.arr.length/2));
    }

    greater() {
        this.arr = this.arr.slice( Math.ceil(this.arr.length/2), this.arr.length);
    }
}

module.exports = GuessingGame;
