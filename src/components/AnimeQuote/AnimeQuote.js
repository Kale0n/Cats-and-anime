import { useSelector } from "react-redux"

export default function AnimeQuote () {
    const anime = useSelector(state => state.anime.data)
    return (
        <div>
            <h3>{anime.title}</h3>
            <p>{anime.character}</p>
            <blockquote>{anime.quote}</blockquote>
        </div>
    )
}