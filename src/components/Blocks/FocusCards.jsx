import React, { useState, useEffect } from "react";
import { useNode } from "@craftjs/core";

const Card = React.memo(({
    card,
    index,
    hovered,
    setHovered
}) => (
    <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={`rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out ${hovered !== null && hovered !== index ? "blur-sm scale-[0.98]" : ""}`}
    >
        <img
            src={card.src}
            alt={card.title}
            className="object-cover absolute inset-0 w-full h-full"
        />
        <div
            className={`absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300 ${hovered === index ? "opacity-100" : "opacity-0"}`}
        >
            <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                {card.title}
            </div>
        </div>
    </div>
));

Card.displayName = "Card";

export const FocusCards = ({ cards: initialCards }) => {
    const [cards, setCards] = useState(initialCards);
    const [hovered, setHovered] = useState(null);
    const { connectors: { connect, drag } } = useNode();

    useEffect(() => {
        setCards(initialCards);
    }, [initialCards]);

    return (
        <div
            ref={ref => connect(drag(ref))}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full"
        >
            {cards.map((card, index) => (
                <Card
                    key={index}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                />
            ))}
        </div>
    );
};
const FocusCardsSettings = () => {
    const { actions: { setProp }, cards } = useNode((node) => ({
        cards: node.data.props.cards,
    }));

    const updateCard = (index, field, value) => {
        setProp((props) => {
            const newCards = [...props.cards];
            newCards[index] = { ...newCards[index], [field]: value };
            props.cards = newCards; // Directly modify the props object
        });
    };

    return (
        <div className="space-y-6 p-6 bg-white rounded-xl shadow-md">
            {cards.map((card, index) => (
                <div key={index} className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor={`title-${index}`} className="text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                            id={`title-${index}`}
                            value={card.title}
                            onChange={(e) => updateCard(index, 'title', e.target.value)}
                            placeholder="Enter card title"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor={`src-${index}`} className="text-sm font-medium text-gray-700 mb-1">Image URL</label>
                        <input
                            id={`src-${index}`}
                            value={card.src}
                            onChange={(e) => updateCard(index, 'src', e.target.value)}
                            placeholder="Enter image URL"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

FocusCards.craft = {
    props: {
        cards: [
            { title: 'Card 1', src: 'https://via.placeholder.com/300' },
            { title: 'Card 2', src: 'https://via.placeholder.com/300' },
            { title: 'Card 3', src: 'https://via.placeholder.com/300' }
        ],
    },
    related: {
        settings: FocusCardsSettings,
    },
};
