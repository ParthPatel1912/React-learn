import React from 'react'

const test = () => {
    const obj = {
        a: {
            name: 'name',
            std: {
                age: '20',
                message: 'Hello World!'
            }
        }
    };

    const { a: { std: { message } } } = obj;

    const numbers = [1, 2, [3, 4, [5, 6, [7, 8]]]];

    const [a, b, [c, d, [e, f, ...rest]]] = numbers;

    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3
    console.log(d); // 4
    console.log(e); // 5
    console.log(f); // 6
    console.log(rest); // []

    console.log(message);

    const heroes = ['Batman', 'Superman'];
    const villains = ['Joker', 'Bane'];
    heroes.push(...villains);
    console.log(heroes);
    return (
        <div>

        </div>
    )
}

export default test
