const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.shuffleCards();
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // select elements for the scores
  const scorePairsClicked = document.querySelector("#pairs-clicked");
  const scorePairsGuessed = document.querySelector("#pairs-guessed");
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
  
    // only proceed if the card isnt already turned
    if (!card.classList.contains('turned') && memoryGame.pickedCards.length < 2) {
      
      card.classList.add('turned');
      console.log("lol")
      // add the card to the picked Cards
      memoryGame.pickedCards.push(card);

      if (memoryGame.pickedCards.length === 2) {   // only compare two cards, when we have two cards turned
        
        const [card1, card2] = memoryGame.pickedCards;
        const name1 = card1.getAttribute('data-card-name');
        const name2 = card2.getAttribute('data-card-name');
        console.log(memoryGame.pickedCards);

        // checking if the pair matches
        if (memoryGame.checkIfPair(name1,name2)) {
          // if they match we don't remove the class turned, so that they stay turned
          memoryGame.pickedCards = [];
          scorePairsGuessed.innerHTML = memoryGame.pairsGuessed;
        } else {
          // If they don't match, turn them around again by removing the "turned" class
          setTimeout(() => {
            card1.classList.remove('turned');
            card2.classList.remove('turned');
            memoryGame.pickedCards = [];
          }, 1000);
        }

        const scorePairsClicked = document.querySelector("#pairs-clicked");
        scorePairsClicked.innerHTML = memoryGame.pairsClicked;
      }
    }

    setTimeout(() => {    // so the alert comes after the last card is turned
      if(memoryGame.checkIfFinished()) alert("you won the Game!");
    }, 2000);
    


    });
  });
});
