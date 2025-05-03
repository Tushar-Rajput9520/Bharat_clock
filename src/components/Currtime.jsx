let Currtime=()=>{
    let time=new Date();
    return <p className="lead"> this is the Current time:{time.toLocaleDateString()}-{time.toLocaleTimeString()}</p>
}
export default Currtime;