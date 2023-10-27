import "./Card.css"
import  Tag  from '../Tag/Tag'
export default function Card(props) {
    const item = props.item
    return <div className="card">
            <h2>{item.nome}</h2>
            <Tag />
            <img src={item.imagemUrl} alt="Rick Sanchez" />  
        </div>  
    
}