import{Link} from "react-router-dom"
function Home() {
    return (
        <section className="bg-info homes" style={{ height: "100vh"}}>

            <div className="container d-flex-colum justify-content-center align-items-center"style={{height:"100vh", display:"flex",alignItems:"center", flexDirection:"column"}}>
            <h1 className="mb-5 text-warning" style={{ color:"yellow" }}>KNOW YOUR COUNTRIES</h1>
            <h2 style={{color:"black"}}>This site allows you to access<br></br>to all the countries around the world</h2>
            <Link to="/countries" className="btn btn-primary">SEE MORE</Link>
        </div>
        <div>
            <img style={{height:"100%", width:"100%"}} src="../images/wf1.svg" alt=""/>
        </div>
        </section>
    )
}
export default Home;