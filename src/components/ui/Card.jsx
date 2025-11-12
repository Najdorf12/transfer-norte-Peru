export default function Card ({card}) {
    const { title, text} = card;
    return(
        <div className="w-44 h-56">
            <div>{title}</div>
            <div>{text}</div>
        </div>
    )
}