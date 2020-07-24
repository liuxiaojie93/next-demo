export default ({films})=>{
    return (
    <div>
        homePage
        <div><hr></hr></div>
        <div>
            <ul>
                {films.map((item,index)=>(<li key={item.name}>{item.name} - {item.synopsis}</li>))}
            </ul>
        </div>
    </div>
    )
    
}