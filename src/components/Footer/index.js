import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <ul>
                    <li>
                        <a href="https://facebook.com" target="_blank">
                            <img src="/images/fb.png" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank">
                            <img src="/images/tw.png" alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank">
                            <img src="/images/ig.png" alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <img src="/images/logo.png" alt="Logo Organo" />
            </div>
            <div>
                <strong>Desenvolvido por Alura.</strong>
            </div>
        </footer>
    )
}

export default Footer