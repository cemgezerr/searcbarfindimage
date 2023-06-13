import İmageShow from './İmageShow'

function İmagelist({ images }){
    const renderedİmage = images.map((image) => {
        return <İmageShow image={image}/>
    })
    return <div> {renderedİmage}</div>
}
export default İmagelist;