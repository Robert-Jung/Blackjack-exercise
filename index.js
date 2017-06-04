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

console.log(deck)
