import React from 'react'
import { NavLink } from 'react-router-dom';
import BookShelf from './BookShelf';

export default function Home() {

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf />
                </div>
            </div>
            <div className="open-search">
                <NavLink to="/Search"  >Add a book</NavLink>
            </div>
        </div>
    )
}
