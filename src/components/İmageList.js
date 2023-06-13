import './İmageList.css'
import İmageShow from './İmageShow'

function İmagelist({ images }){
    const renderedİmage = images.map((image) => {
        return <İmageShow key={image.id} image={image}/>
    })
    return <div className="image-list"> {renderedİmage}</div>
}
export default İmagelist;