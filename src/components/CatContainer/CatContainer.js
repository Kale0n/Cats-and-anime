import { useSelector } from 'react-redux'
export default function CatContainer () {
    const SRC = useSelector(state => state.catUrl.url)

    return  <img src={SRC} style={{maxHeight: '300px'}} alt='cat'/>
}