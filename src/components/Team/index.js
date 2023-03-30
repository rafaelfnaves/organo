import Worker from "../Worker"
import "./Team.css"

const Team = (props) => {
    return (
        props.workers.length > 0 && <section className="team" style={{ backgroundColor: props.secondaryColor }}> {/** Renderização condicional */}
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className="workers">
                {props.workers.map(worker => <Worker cardColor={props.primaryColor} key={worker.name} name={worker.name} role={worker.role} image={worker.image}/>)}
            </div>
        </section>
    )
}

export default Team