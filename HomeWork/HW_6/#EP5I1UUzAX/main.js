// let cards = [
//     {
//         cardSuit: 'spade',
//
//         value: ['6','7','8','9','10', 'ace','jack','queen','king'],
//
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//
//         value: ['6','7','8','9','10', 'ace','jack','queen','king'],
//
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//
//         value: ['6','7','8','9','10', 'ace','jack','queen','king'],
//
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//
//         value: ['6','7','8','9','10','ace','jack','queen','king'],
//
//         color: 'red'
//     },
//
// ];
//
//
// let rez=cards[0].value.find(card => card.value === 'ace');
// console.log(rez);

let suits=[ 'spade', 'diamond','heart', 'clubs']

let values =['6','7','8','9','10', 'ace','jack','queen','king']

let cards=[]

for (let suit of suits) {
    for (let value of values) {
        let card={cardSuit:suit, cardValue:value}
        if (suit==='heart' || suit==='diamond') {
            card.cardColor='red'
        }
        if (suit==='spade' || suit==='clubs') {
            card.cardColor='black'
        }
        cards.push(card)
    }
}

console.log('Сформовано масив')
console.log(cards)

let rezult = cards.reduce((accum,card)=>{
    if (card.cardSuit==="spade"){accum.cardSpade.push(card)}
    else if (card.cardSuit==="diamond"){accum.cardDiamond.push(card)}
    else if (card.cardSuit==="heart"){accum.cardHeart.push(card)}
    else if (card.cardSuit==="clubs"){accum.cardClubs.push(card)}
    return accum;

},{cardSpade:[],cardDiamond:[],cardHeart:[],cardClubs:[]})

console.log("Результуючий об'єкт")
console.log(rezult)

// // туз пік
// console.log('Туз пік')
// console.log(cards.find(card=>card.cardValue==='ace' && card.cardSuit==='spade'))
//
// // Усі шістки
// console.log('Усі шістки')
// console.log(cards.filter(card=>card.cardValue==='6'))
//
// //Всі червоні карти
// console.log('Всі червоні карти')
// console.log(cards.filter(card=>card.cardColor==='red'))
//
// //Всі буби
// console.log('Всі буби')
// console.log(cards.filter(card=>card.cardSuit==='diamond'))
//
// //Всі трефи від 9 ...
// console.log('Всі трефи від 9 ...')
// console.log(cards.filter(card=>card.cardSuit==='clubs' && (card.cardValue>'8' || card.cardValue==='10')))

