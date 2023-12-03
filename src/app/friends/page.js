import Navbar from "../navbar/Navbar"
import Nav from "../navbar/Nav"
export default function about() {
    return (
        <div>
            <Navbar />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Nav />
                <div style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center' , marginBottom : '15em' , fontSize : '22px' , fontWeight : 'bold' , textAlign : 'center' , marginRight : '22em'}}>
                    <h1>Welcome To Friends List Page</h1>
                    <h2>Work In Progress......</h2>
                </div>
            </div>
        </div>
    )
}
