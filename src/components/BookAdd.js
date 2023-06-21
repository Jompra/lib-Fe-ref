import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import axios from 'axios'

export default function BookAdd() {

    const [formData, setFormData] = useState({
        title: '',
        genre: '',
        isFiction: '',
        numberOfPages: ''
    })

    const handleChange = (event) => {

        const form = { ...formData }
        form[event.target.name] = event.target.value
        console.log(form)
        setFormData(form)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await axios.post(
            'http://127.0.0.1:4000/book/add',
            formData 
        )
        console.log(response)
        return <Navigate to="/books"/> 
    }

    return (
        <>
            <h1>Book Add Form</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        name='title'
                        onChange={handleChange}
                        value={formData.title}
                    />
                </div>
                <div>
                    <label>Genre</label>
                    <input
                        name='genre'
                        onChange={handleChange}
                        value={formData.genre}
                    />
                </div>
                <div>
                    <label>Fiction?</label>
                    <input
                        name='isFiction'
                        onChange={handleChange}
                        value={formData.isFiction}
                    />
                </div>

                <div>
                    <label>Pages</label>
                    <input
                        name='numberOfPages'
                        onChange={handleChange}
                        value={formData.numberOfPages}
                    />
                </div>
                <div>
                    <input type="submit" />
                </div>

            </form>
        </>

    )
}