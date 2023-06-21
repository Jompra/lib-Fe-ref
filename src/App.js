import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import BookIndex from "./components/bookIndex"
import Home from "./components/Home"
import BookAdd from "./components/BookAdd"

export default function App() {

    return (
        <>

            <h1>This is the library</h1>
            <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/books">Book Index</Link>
                <Link to="/books/add">Add a Book</Link>

            </nav>
            
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/books"
                        element={<BookIndex />}
                    />
                    <Route 
                        path="/books/add"
                        element={<BookAdd />}
                    />
                </Routes>
            </Router>

        </>

    )

}
