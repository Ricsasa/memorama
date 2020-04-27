const genDeck = () => {
    const list = [
        "Hot pepper",
        "Plum",
        "Meat",
        "Cherry",
        "Jam",
        "Grapes",
        "Strawberry",
        "Peas",
        "Milk",
        "Egg",
        "Chicken",
        "Bread"
    ];

    const deck = [];

    list.forEach(element => {
        deck.push(element);
        deck.push(`${element}.png`);
    });

    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    return deck;
};

export default genDeck;