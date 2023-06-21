import React, { useEffect, useState } from 'react'
import axios from 'axios'

// get all of our Books
// render all of our Books

export default function BookIndex() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        getAllBooks()
    }, [])

    const getAllBooks = async () => {
        const response = await axios.get('http://127.0.0.1:4000/book/index')
        console.log(response)
        setBooks(response.data)
    }

    const deleteBook = async (bookId) => {
        const response = await axios.post(
            `http://127.0.0.1:4000/book/delete?id=${bookId}`
        )

        console.log(response)
        getAllBooks()
    }

    const allBooks = books.map(book => {
        return (
            <div key={book._id}>
                <h3>{`${book.title}  |  ${book.genre}`}</h3>
                <button
                    onClick={() => {deleteBook(book._id)}}
                >
                    Delete Book
                </button>
            </div>
        )
    })



    return (
        <>
            <h1>Book Index</h1>
            {allBooks}
        </>

    )
}