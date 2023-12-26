const Shimmer = () =>{
    return (<div className = "flex flex-wrap">
        {Array(10).fill("").map((e,index)=>(
            <div key={index} className="p-4 m-4 w-[230px] h-[320px]  bg-gray-100 hover:bg-gray-300 "></div>
        ))
        }
       
    </div>)
}

export default Shimmer;