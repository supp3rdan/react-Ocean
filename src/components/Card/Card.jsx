import "./Card.css"
import  Tag  from '../Tag/Tag'
export default function Card(props) {
    const item = props.item
    // const tags = item.tag || []
    const tags = [
        `Status: ${item.status}`, 
        `Species: ${item.species}`, 
        `Origin: ${item.origin.name}`
    ]
    
    return <div className="card">
            <h2>{item.name}</h2>
            <div className="tags">
                {tags.map(function(tag, index) {
                    return <Tag text={tag} key={`card_char_${index}`}/>
                })}
            </div>
            <img src={item.image} alt="Rick Sanchez" />  
        </div>  
    
}