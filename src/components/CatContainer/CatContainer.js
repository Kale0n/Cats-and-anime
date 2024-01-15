import { useSelector } from 'react-redux'
import "./CatContainer.css"

export default function CatContainer () {
    const SRC = useSelector(state => state.catUrl.url)

    return  <img className="cat" src={SRC} style={{maxHeight: '300px'}} alt='cat'/>
}