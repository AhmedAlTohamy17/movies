import axios from 'axios'
import { useContext } from 'react'
import LangContext from '../context/lang'
// const { lang, setLang } = useContext(LangContext)

const axiosInstance = axios.create(
    {
    baseURL:'https://api.themoviedb.org/3',
    params:{
    "api_key":"251cc776e7787384fd285ac7d29f199b",
    // "language":lang
    }
}
)
export default axiosInstance