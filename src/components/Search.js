import React from 'react'
import { NavLink } from 'react-router-dom';
import { search } from './../BooksAPI';
import { useDispatch, useSelector } from "react-redux";

import Book from './Book';


export default function Search() {
    const { search_data } = useSelector(state => state.books);
    const disptch = useDispatch();

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <NavLink to="/Home"
                    className="close-search"

                >
                    Close
                </NavLink>
                <div className="search-books-input-wrapper">
                    <input

                        onChange={(e) => {
                            if (e.target.value)
                                search(e.target.value.toString(), 5, disptch)


                        }}
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {search_data.length > 0 && search_data.map((item, index) => {
                        // console.log(item);
                        return (
                            <Book key={index} item={item}></Book>
                        )
                    })}
                    {
                        search_data.error && <><h1>Not Found</h1></>
                    }
                </ol>
            </div>
        </div>
    )
}
