import React from 'react'


function Card({obj}){
    return (
        <>
    
        <div 
        className="cards h-96 w-96  flex justify-center items-center
                   bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-1">

            <div className="inside h-full w-full bg-slate-900 flex flex-col justify-center items-center p-3 ">
                        
                <div className="image h-44 w-44 border-2 border-solid border-b-gray-500 mb-3">
                    <img src={obj.image} alt="" className='h-full w-full'/>
                </div>
                <h1>{obj.name}</h1>
                <h3 className='text text-center'>{obj.description}</h3>
            </div>
        </div>

               
           
        </>
    )
}

export default Card