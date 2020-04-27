import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import genDeck from './';

export default function useGame() {
    const [errors, setErrors] = useState(0);
    const [matches, setMatch] = useState([]);
    const [flipping, setFlip] = useState({ i: [], v: [] });
    const [deck, setDeck] = useState(genDeck());

    console.log(deck);

    useEffect(() => {
        if (flipping.i.length === 2) {
            checkFlip(flipping);
        }
    }, [flipping]);

    function checkFlip(f) {
        if (f.v[0] === f.v[1]) {
            setMatch([...matches, f.v[0]]);
            setFlip({ i: [], v: [] });
        } else {
            setErrors(() => errors + 1);
            setTimeout(() => {
                setFlip({ i: [], v: [] });
            }, 1500);
        }
    }

    function reshuffle() {
        setFlip({ i: [], v: [] });
        setMatch([]);
        setErrors(0);
        setTimeout(() => setDeck(genDeck()), 600);
    }

    function cardClick(value, index) {
        const { i, v } = flipping;
        if (i.length < 2) {
            setFlip({ i: [...i, index], v: [...v, value] });
        }
    }

    const cards = deck.map((value, i) => {

        const cleanValue = (value) => {
            const lastDotPosition = value.lastIndexOf(".");
            if (lastDotPosition === -1) return value;
            else return value.substr(0, lastDotPosition);
        }

        return (
            <Card key={i}
                onClick={() => cardClick(cleanValue(value), i)}
                value={value}
                matched={matches.includes(cleanValue(value))}
                flipping={flipping.i.includes(i)}
            />
        );
    });

    const finished = matches.length === deck.length / 2;

    return [cards, reshuffle, errors, finished];
}
