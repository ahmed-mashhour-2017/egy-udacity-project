import React from 'react'
import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../BooksAPI';
import Book from './Book';

export default function BookShelf() {
    const { all_data } = useSelector(state => state.books);
    const disptch = useDispatch();
    useLayoutEffect(() => {
        getAll(disptch)
        console.log(all_data);
    }, [])
    return (
        <>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {/* <Book /> */
                            all_data.length > 0 && all_data.filter(item => item.shelf === "currentlyReading").map((item, index) => {
                                // console.log(item);
                                return (
                                    <Book key={index} item={item}></Book>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {/* <Book /> */
                            all_data.length > 0 && all_data.filter(item => item.shelf === "wantToRead").map((item, index) => {
                                // console.log(item);
                                return (
                                    <Book key={index} item={item}></Book>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {/* <Book /> */
                            all_data.length > 0 && all_data.filter(item => item.shelf === "read").map((item, index) => {
                                // console.log(item);
                                return (
                                    <Book key={index} item={item}></Book>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}
