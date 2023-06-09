import "./Worker.css"

const Worker = ({name, role, image, cardColor}) => {
    return (
        <div className="worker">
            <div className="header-worker" style={{ backgroundColor: cardColor }}>
                <img src={image} alt={name} />
            </div>
            <div className="footer-worker">
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}

export default Worker