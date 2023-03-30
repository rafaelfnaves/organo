import "./TextField.css"

const TextField = (props) => {

    const onTyped = (event) => {
        props.onChanged(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input onChange={onTyped} value={props.value} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField