import React, { Component } from 'react'

export class Tailwind extends Component {
    render() {
        const people = [
            {
                name: 'Calvin Hawkins',
                email: 'calvin.hawkins@example.com',
                image:
                    'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Kristen Ramos',
                email: 'kristen.ramos@example.com',
                image:
                    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Ted Fox',
                email: 'ted.fox@example.com',
                image:
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        ]
        return (
            <div>
                <ul className="divide-y divide-gray-200">
                    {people.map((person) => (
                        <li key={person.email} className="py-4 flex">
                            <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">{person.name}</p>
                                <p className="text-sm text-gray-500">{person.email}</p>
                            </div>
                        </li>
                    ))}
                </ul>

                <button class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">...</button>

                <button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">...</button>

                <br />
                <span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
                    Hello<br />
                    World
                </span>
                <br />
                <span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
                    Hello<br />
                    World
                </span>
                <div>
                    <div class="flex items-center">
                        <img src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='' />
                            <div>
                                <strong>Andrew Alfred</strong>
                                <span>Technical advisor</span>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tailwind