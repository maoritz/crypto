import {useEffect,useState} from 'react'

const useFetch = (url, handleData) => {
    const [data, setData] = useState()
    
    useEffect(() => {
        const options = {
        headers: { 'user-access-token': '55a9b1f7-d694-463e-9853-7a035952ecf9' }
        };
        const fetchData = async () => {
            const response = await fetch(
                url , options
            );
            const data = response.json()
            return data
        }
        const getAndHandleData = async () => {
            const response = await fetchData()
            setData(handleData(response))
        }
        getAndHandleData()
    }, [])

    return data
}


export default useFetch
