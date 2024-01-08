const Shimmer = () =>{
    return (<div className = "flex flex-wrap mt-[85px]">
        <div className='mt-5 mx-2 h-[60px] w-screen bg-gray-100'></div>
        {Array(10)?.fill("")?.map((e,index)=>(
            <div key={index} className="p-4 m-4 w-[230px] h-[320px]  bg-gray-100 hover:bg-gray-300 rounded-lg"></div>
        )) }
    </div>)
}

export default Shimmer;