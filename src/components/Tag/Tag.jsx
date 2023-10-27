import "./Tag.css"

export default function Tag(props) {
    const tag = props.text
    return  <div className="tags">
                <div className="tag">{tag}</div>
            </div>
}