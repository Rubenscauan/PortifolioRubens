import ArticleIcon from '@mui/icons-material/Article';

const Barra = () => {
    return (
        <div>
            <div>
                <div style={{ display: "flex", justifyContent: "start" }}>
                    <ArticleIcon style={{ color: 'white', marginTop: 15, marginRight:5  }} />
                    <h2
                        href="/"
                        style={{
                            fontFamily: "monospace",
                            color: "white",
                            textDecoration: "none"
                        }}
                    >
                        Portifolio
                    </h2>
                
                    <div style={{marginLeft: '65%', marginTop:"10px",}}>
                        <a
                            component="a"
                            href="/"
                            style={{
                                marginRight: 30,
                                textDecoration: 'none',
                                color: "white",
                                fontFamily: 'monospace',
                                fontSize:'20px'
                            }}
                        >
                            Home
                        </a>

                        <a
                            component="a"
                            href="/"
                            style={{
                                marginRight: 30,
                                textDecoration: 'none',
                                color:"white",
                                fontFamily: 'monospace',
                                fontSize:'20px'

                            }}
                        >
                            Sobre Mim
                        </a>

                        <a
                            component="a"
                            href="/"
                            style={{
                                marginRight: 30,
                                textDecoration: 'none',
                                color: "white",
                                fontFamily: 'monospace',
                                fontSize:'20px'

                            }}
                        >
                            Projetos
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Barra;