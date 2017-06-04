const suits = ['hearts', 'clubs', 'spades', 'spades']
const types = [
  { value: 1, displayName: 'One'},
  { value: 2, displayName: 'Two'},
  { value: 3, displayName: 'Three'},
  { value: 4, displayName: 'Four'},
  { value: 5, displayName: 'Five'},
  { value: 6, displayName: 'Six'},
  { value: 7, displayName: 'Seven'},
  { value: 8, displayName: 'Eight'},
  { value: 9, displayName: 'Nine'},
  { value: 10, displayName: 'Ten'},
  { value: 10, displayName: 'Jack'},
  { value: 10, displayName: 'Queen'},
  { value: 10, displayName: 'King'},
  { value: 11, displayName: 'Ace'},
]

const card = (suit, type) => {
    return {
      suit,
      type
    }
  }

const deck = []
suits.forEach( (suit) => {
  types.forEach( (type) => deck.push({ type, suit }) )
})

function shuffle(deck) {
  var length = deck.length - 1
  var toSwap
  var temp
  for (i = length; i > 0; i--) {
    toSwap = Math.floor(Math.random() * i)
    temp = deck[i]
    deck[i] = deck[toSwap]
    deck[toSwap] = temp
  }
  return deck
}

const playerCount = 4
const players = []

function createPlayer() {
  return {
    hand: []
  }
}

for (var i = 0; i < playerCount; i++) {
  players.push(createPlayer())
}

function createDealer() {
  return {
      hand: [],
      isDealer: true
  }
}

players.push(createDealer())

function deal(deck, players) {
  for (var i = 0; i < players.length; i ++) {
    players[i].hand.push(deck.pop())
    players[i].hand.push(deck.pop())
  }
  return players
}

shuffle(deck)
const game = deal(deck, players)
console.log(game)
