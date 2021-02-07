export function cardDeck_52_4() {
    let cardDeck = [];
    for (let i = 1; i < 14; i++)
        for (let j = 0; j < 4; j++)
            cardDeck.push({ value: i, symbol: j });

    return cardDeck;
}