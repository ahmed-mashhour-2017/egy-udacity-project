import React from 'react'
import { useDispatch } from 'react-redux';
import { getAll, update } from './../BooksAPI';

export default function Book(props) {
    let { title = "", authors = [], imageLinks = "", shelf = "" } = props.item;
    //console.log(props.item.shelf);
    const disptch = useDispatch();

    return (
        <>
            <li>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage:
                                    `url(${imageLinks.smallThumbnail})`,
                            }}
                        ></div>
                        <div className="book-shelf-changer">
                            <select onChange={((e) => {

                                update(props.item, e.target.value).then(() => { getAll(disptch) })

                                //console.log(e.target.value);
                            })}
                                defaultValue={shelf}
                            >
                                <option value="none" disabled>
                                    Move to...
                                </option>
                                <option value="currentlyReading"  >
                                    Currently Reading
                                </option>
                                <option value="wantToRead" >Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none" >None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors.map((it) => it)}</div>
                </div>
            </li>

        </>
    )
}
