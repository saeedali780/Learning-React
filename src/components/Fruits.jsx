import React from 'react';
import Fruit from './Fruit.jsx';

const Fruits = () => {
    const fruits = [
        {
            id: 1,
            name: "Apple",
            color: "Red",
            taste: "Sweet",
            price: 2.99,
            soldOut: false,
            emoji: "🍎"
        },
        {
            id: 2,
            name: "Mango",
            color: "Yellow",
            taste: "Sweet",
            price: 3.49,
            soldOut: true,
            emoji: "🥭"
        },
        {
            id: 3,
            name: "Banana",
            color: "Yellow",
            taste: "Sweet",
            price: 1.99,
            soldOut: true,
            emoji: "🍌"
        },
        {
            id: 4,
            name: "Orange",
            color: "Orange",
            taste: "Citrus",
            price: 2.49,
            soldOut: false,
            emoji: "🍊"
        }
    ];
  return (
    <div>
        <ul>
            {fruits.map((fruit)=>(
                <Fruit 
                    name={fruit.name} 
                    color={fruit.color} 
                    taste={fruit.taste} 
                    price={fruit.price}
                    emoji={fruit.emoji}
                    soldOut={fruit.soldOut}
                />
            ))}
        </ul>
    </div>
  )
}

export default Fruits
