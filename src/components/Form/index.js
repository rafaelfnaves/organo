import Button from "../Button"
import DropDownList from "../DropDownList"
import TextField from "../TextField"
import "./Form.css"

const Form = () => {
    const teams = ["Programação", "Front-End", "Data Science", "DevOps", "UX e Design", "Mobile", "Inovação e Gestão"]

    const onSave = (event) => {
        event.preventDefault()
        console.log('submited')
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField required={true} label="Nome" placeholder="Digite seu nome"/>
                <TextField required={true} label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
                <DropDownList required={true} label="Time" items={teams}/>
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form