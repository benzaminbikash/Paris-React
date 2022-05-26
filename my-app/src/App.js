import React, { useState, useEffect } from 'react'
import Detail from './Detial/Detail';
import "./App.css"
import Loading from './Loading';

const url = "https://course-api.com/react-tours-project";

const App = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const removeItem = (id) => {
        const newData = data.filter((data) => data.id !== id)
        setData(newData)
    }
    const fetchdata = async () => {
        setLoading(true)
        try {
            const response = await fetch(url)
            const newresponse = await response.json();

            setData(newresponse)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchdata()
    }, [])

    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        )
    }
    if (data.length === 0) {
        return (
            <div className='refresh'>
                <h2>No Tours Left</h2>
                <button className='notInterested' onClick={() => fetchdata()}>Refresh</button>
            </div>
        )
    }
    return (
        <div>
            <Detail yani={data} remove={removeItem} />
        </div>
    )
}

export default App