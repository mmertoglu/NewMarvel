import React,{useState,useEffect} from "react";
import axios from "axios";

 function useFetch (url) {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState()
    const [data,setData] = useState([])
    const fetchData = async () => {
       try {
        await axios.get(url).then(response => {
            setData(response.data.data.results)
            console.log(data)
            setLoading(false)
        })
       } catch (error) {
        console.log(error.message)
        if (error.message != 'Request failed with status code 409') {
            setError(error)
            setLoading(false)
        }
       console.log(error.message)
       setLoading(false)
       
       }
    }
    useEffect(()=> {
        fetchData()
    },[url])
    return {data,loading,error,fetchData}
}

export default useFetch