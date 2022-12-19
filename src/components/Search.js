import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { getAll, search } from './../BooksAPI';
import { useDispatch, useSelector } from "react-redux";

import Book from './Book';


export default function Search() {
    const { search_data, all_data } = useSelector(state => state.books);
    const disptch = useDispatch();
    const [xxx, seXxx] = useState([]);


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
                                search(e.target.value.toString(), 5, disptch).then(() => {
                                    getAll(disptch)
                                }).then(() => {
                                    let newSearch = [];
                                    if (!search_data.error) {
                                        //newSearch = all_data.filter((it) => search_data.find(element => element.id === it.id));
                                        newSearch = search_data.map((it) => {
                                            let exist = all_data.find(element => element.id === it.id);
                                            //   console.log(exist);
                                            if (exist) {
                                                return exist;
                                            } else {
                                                return it;
                                            }
                                        })


                                    }

                                    seXxx(newSearch)
                                })



                        }}
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {xxx.length > 0 && xxx.map((item, index) => {
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
