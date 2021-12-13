import {useEffect,useState} from 'react'

const useFetch = (url, handleData) => {
    const [data, setData] = useState()
    
    useEffect(() => {
        
        const options = {
            headers: { 'user-access-token': '55a9b1f7-d694-463e-9853-7a035952ecf9' }
        };

        const getAndHandleData = async () => {
            const response = await fetch(
                url , options
            );

            const responseJson = await response.json()
            let formattedData = responseJson
            if(handleData){ 
                formattedData = handleData(responseJson)
            }
            setData(formattedData)
        }
        getAndHandleData()
    }, [handleData, url])

    return data
}


export default useFetch
