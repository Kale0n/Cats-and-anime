import { getCat, getAnimeQuote } from "../../API/API"
import {useDispatch} from 'react-redux'
import { setCatUrl }from '../../store/catUrl.js'
import { setAnimeData } from "../../store/anime.js"
 import './Button.css'

export default function Button () {
    const dispatch = useDispatch()


    const handleButtonClick = () => {
        getCat()
        .then(url => dispatch(setCatUrl(url)))
        .catch(err =>  console.log(err))

        getAnimeQuote()
        .then(data => dispatch(setAnimeData({ 
            title: data.anime,
            character: data.character,
            quote: data.quote
        })))
        .catch(err => console.log(err))
    }

    return (
        <>
            <button className='Button' onClick={handleButtonClick}>Click here for your cat and animequote</button>
        </>
    )
}