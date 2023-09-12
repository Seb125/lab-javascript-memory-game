class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
    for (let i = 0; i < this.cards.length; i++) {
      let randomCardIndex = Math.floor(Math.random()*(this.cards.length-i));
      let lastElement = this.cards[this.cards.length-1-i];
      this.cards[this.cards.length-1-i] = this.cards[randomCardIndex];
      this.cards[randomCardIndex] = lastElement;
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.cards.length/2 > this.pairsGuessed) {
      return false;
    } else {
      return true;
    }
  }
}
