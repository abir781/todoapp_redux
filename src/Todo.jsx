import React from 'react';

const Todo = () => {

    const handlesubmit=()=>{
        e.preventdefault();
    }
    return (
        <div className='flex justify-center mt-[100px] min-h-screen '>

            <div className='mt-[40px]'>

            <form onSubmit={handlesubmit} className='flex gap-1'>
                <input type="text" name="ttt" id="" className='border-2 border-black w-[400px] h-[50px]' />
                <button  type="submit" className='px-4 py-2 bg-green-500 font-bold text-white text-lg rounded'>Submit</button>
            </form>

            </div>

          
            
        </div>
    );
};

export default Todo;