import { useState } from "react"
import Button from "../Button"
import DropDownList from "../DropDownList"
import TextField from "../TextField"
import "./Form.css"

const Form = (props) => {

    const [name, setName] = useState("")
    const [role, setRole] = useState("")
    const [image, setImage] = useState("")
    const [team, setTeam] = useState("")
    
    const onSave = (event) => {
        event.preventDefault()
        props.onRegisteredWorker({name, role, image, team})
        // Reset inputs
        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    onChanged={value => setName(value)}
                />
                <TextField 
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={role}
                    onChanged={value => setRole(value)}
                />
                <TextField 
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    onChanged={value => setImage(value)}
                />
                <DropDownList 
                    required={true} 
                    label="Time" 
                    items={props.teams}
                    value={team}
                    onChanged={value => setTeam(value)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form