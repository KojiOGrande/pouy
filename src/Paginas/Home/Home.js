import Navbar from "../../components/Navabar";
import "./Home.css"

function Home() {
    return (
        <>
            <Navbar />
            <div className="inicio">
                <div className="minhasTarefas">

                    <div className="tarefas">
                        <section>
                            <h2>Minhas Tarefas</h2>
                            <p>Gerencie suas actividades diárias com eficiência</p>
                        </section>

                        <section>
                            <button className="btnTarefa"><i className="fa-solid fa-plus"></i> Nova Tarefa</button>
                        </section>
                    </div>

                    <div className="cards">


                        {/*----- PRIMEIRO CARD------*/}
                        <div className="cardFazer">
                            <div className="titulo">
                                <h2>A fazer <span>2</span></h2>
                            </div>

                            <div className="conteudo">
                                <div className="conteudoCard">
                                    <section className="iconCard">
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </section>
                                    
                                    <section className="headCard">
                                    <p className="titleCardFazer">Média</p>
                                    <h4>Revisar design da landing page</h4>
                                    <p>Verificar consistência visual e responsividade nos dispositivos nos dispositivos móveis</p>
                                     </section>

                                    <section className="footerCard">
                                        <p className="titleFooter"><i className="fa-regular fa-calendar"></i> 2025-10-02</p>
                                        <p className="textFooterFazer">A fazer</p>
                                    </section>
                                   
                                     

                                   
                                </div>

                            </div>
                        </div>

                        {/*----- SEGUNDO CARD------*/}
                        <div className="cardEmProcesso">
                            <div className="titulo">
                                <h2>Em Progresso <span>1</span></h2>
                            </div>

                            <div className="conteudo">
                                <div className="conteudoCard">
                                    <section className="iconCard">
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </section>
                                    
                                    <section className="headCard">
                                    <p className="titleCardEmProgresso">Média</p>
                                    <h4>Revisar design da landing page</h4>
                                    <p>Verificar consistência visual e responsividade nos dispositivos nos dispositivos móveis</p>
                                     </section>

                                    <section className="footerCard">
                                        <p className="titleFooter"><i className="fa-regular fa-calendar"></i> 2025-10-02</p>
                                        <p className="textFooterEmProgresso">Em Progresso</p>
                                    </section>
                                   
                                     

                                   
                                </div>

                            </div>
                        </div>

                        {/*----- TERCEIRO CARD------*/}
                        <div className="cardConcluido">
                            <div className="titulo">
                                <h2>Concluído <span>2</span></h2>
                            </div>

                            <div className="conteudo">
                                <div className="conteudoCard">
                                    <section className="iconCard">
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </section>
                                    
                                    <section className="headCard">
                                    <p className="titleCardConcluido">Média</p>
                                    <h4>Revisar design da landing page</h4>
                                    <p>Verificar consistência visual e responsividade nos dispositivos nos dispositivos móveis</p>
                                     </section>

                                    <section className="footerCard">
                                        <p className="titleFooter"><i className="fa-regular fa-calendar"></i> 2025-10-02</p>
                                        <p className="textFooterConcluido">Concluído</p>
                                    </section>
                                   
                                     

                                   
                                </div>

                            </div>
                        </div>

                    </div>



                </div>


            </div>

        </>
    )
}

export default Home