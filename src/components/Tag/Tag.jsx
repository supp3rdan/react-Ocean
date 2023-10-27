import "./Tag.css"

export default function Tag(props) {
    const tag = props.text
    return  <div className="tags">
                <div className="tag">{tag}</div>
                {/* <div className="tag">Status: Vivo</div>
                <div className="tag">Espécie: Humana</div>
                <div className="tag">Origem: Terra C-137</div> */}
            </div>
}