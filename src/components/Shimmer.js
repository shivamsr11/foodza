const Shimmer = () =>{
    return (<div className = "flex flex-wrap mt-[81px]">
        <div className='mx-[2vh]   h-[50px] w-screen bg-gray-100'></div>
        {Array(10)?.fill("")?.map((e,index)=>(
            <div key={index} className="p-4 m-3 w-[232px] h-[320px]   bg-gray-100 hover:bg-gray-300 rounded-lg"></div>
        )) }
    </div>)
}

export default Shimmer;