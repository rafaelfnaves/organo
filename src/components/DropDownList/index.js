import "./DropDownList.css"

const DropDownList = (props) => {
    return (
        <div className="drop-down-list">
            <label>{props.label}</label>
            <select required={props.required} value={props.value} onChange={ event => props.onChanged(event.target.value)}>
                <option value=""></option>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDownList