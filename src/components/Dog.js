import './Dog.css';

export default function Dog(props) {
    function destroy() {
        props.destroy(props.id)
    }
    return <div className="dog-container">
        <img className="dog-image" alt="dog" src={props.url}>

        </img>
        <img className="delete-button" alt="cross" src="x.svg" onClick={destroy}></img>
    </div>
}