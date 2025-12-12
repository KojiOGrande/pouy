import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <nav className="nav">
                <div className="conteudos">
                    <section className="logo">
                        <i className="fa-solid fa-globe"></i>
                    </section>




                    <section className="links">
                        <Link className="link">
                            <i className="fa-solid fa-check do"></i>
                             A fazer
                        </Link>

                        <Link className="link">
                            <i className="fa-regular fa-clock doing"></i>
                             Em progresso
                        </Link>

                        <Link className="link">
                            <i className="fa-solid fa-circle-check done"></i>
                             Concluído
                        </Link>
                    </section>
                </div>
            </nav>



        </>
    )
}

export default Navbar