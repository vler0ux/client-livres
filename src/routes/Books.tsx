import { useEffect, useState } from "react"

interface IBook {
    id: number,
    title: string
    description: string
}

export const Books = () => {
    const [books, setBooks] = useState<IBook[]>([])
    const [userBookIds, setUserBookIds] = useState<number[]>([])
    const userId = localStorage.getItem('userId') 

    useEffect(() => {
        const getBooks = async () => {
            try {
                const response = await Promise.all([
                    fetch(`http://localhost:1992/api/user/${userId}/books`),
                    fetch('http://localhost:1992/api/books')
                ])
                const data = await Promise.all(response.map(res => res.json()))
                setBooks(data[1])
                setUserBookIds(data[0].map((book: any) => book.id))
            }
            catch(err) {
                console.log(err)
            }
        }
        getBooks()
    }, [userId])

    return (
        <div>
            <h1>Books</h1>
            <div className="books">
                {books.map((book) => {
                    const isBookInUserBooks = userBookIds.includes(book.id)
                    return (
                        <div className={`book ${isBookInUserBooks ? 'owned' : 'not-owned'}`}>
                            <h2>{book.title}</h2>
                            <p>{book.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}