import { useSelector } from "react-redux"
import "./AnimeQuote.css"

export default function AnimeQuote () {
    const anime = useSelector(state => state.anime.data)
    return (
        <div className="anime">
            <blockquote className="anime__quote">"{anime.quote}"</blockquote>
            <p className="anime__character">{anime.character} | {anime.title}</p>
        </div>
    )
}