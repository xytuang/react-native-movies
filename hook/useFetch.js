import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (endpoint) => {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const options = {
        method: 'GET',
        url: `https://online-movie-database.p.rapidapi.com/title/${endpoint}`,
        params: {
            currentCountry: 'US',
            purchaseCountry: 'US',
            homeCountry: 'US'
        },
        headers: {
          'X-RapidAPI-Key': 'a055ddd20fmsh9d7775340aec884p1ee096jsn50529f2b9233',
          'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
      }

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await axios.request
            (options)
            setData(response.data)
            setLoading(false)

        } catch (error) {
            setError(error)
            alert('There is an error')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        setLoading(true)
        fetchData()
    }

    return ( data, isLoading, error, refetch )
    
}


export default useFetch