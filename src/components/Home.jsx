
import InstagramLogo from "../assert/InstagramLogo.png"
import LinkedinLogo from "../assert/LinkedinLogo.png"
import GitHubLogo from "../assert/GitHubLogo.png"
const Home = () => {
    return (
        <div style={{marginLeft: '50px', marginTop:'100px' ,display: "flex", justifyContent: 'start'}}>
            
            <div>

                <div style={{color: "white", display:"inline-flex"}}>
                    <h2>Olá, Me chamo </h2>
                    <h2 style={{color: 'salmon', marginLeft: '8px'}}> Rubens  </h2>
                    <h2 style={{marginLeft: '8px'}}>Castro</h2>
                </div>

                <div style={{color: "white"}}>
                    <h2>Programador Full-Stack </h2>
                </div>

                <div>

                    <a href="https://www.instagram.com/rubens_cauan12/" style={{border: "none", background: 'none', cursor: 'pointer'}}>
                        <img src= {InstagramLogo} style={{width:'70px', marginRight:'10px'}}/>
                    </a>

                    <a href = "https://www.linkedin.com/in/rubenscauancastro/" style={{border: 'none', background: 'none', cursor: 'pointer'}}>
                        <img src= {LinkedinLogo} style={{width:'70px', marginRight:'10px'}}/>
                    </a>

                    <a href='https://github.com/Rubenscauan'style={{border: 'none', background: 'none', cursor: 'pointer'}}>
                        <img src= {GitHubLogo} style={{width:'70px', marginRight:'10px'}}/>
                    </a>

                </div>

            </div>
        </div>
    )
}

export default Home;