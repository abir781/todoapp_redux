import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { settext,addtodo } from './redux_tool/Feature';

const Todo = () => {

    // const [text,settext]= useState("");
    // const [arr,setarr]=useState([]);

    const dispatch = useDispatch();
    const text = useSelector((state) => state.todox.text);
    const arry = useSelector((state)=> state.todox.arr);

    const handlesubmit=(e)=>{
        e.preventDefault();
        // console.log(text);
        // setarr([...arr,text]);
        // settext("");


   
        dispatch(addtodo(text));
        console.log(text);
    }
     
    
    return (
        <div className='flex justify-center mt-[100px] min-h-screen '>

            <div>

                  <div className='mt-[40px]'>

            <form onSubmit={handlesubmit} className='flex gap-1'>
                <input  onChange={(e)=>dispatch(settext(e.target.value))} type="text" name="ttt" id="" className='border-2 border-black w-[400px] h-[50px]' />
                <button  type="submit" className='px-4 py-2 bg-green-500 font-bold text-white text-lg rounded'>Submit</button>
            </form>

            </div>

            <div>
                {
                    arry.map((single,index)=>{
                        return(
                            <div key={index}>
                                <div className='flex gap-4 mt-2 ml-2 bg-orange-500 text-white w-fit px-4 py-2'>

                                     <p>{index+1}</p>
                                    <p>{single}</p>

                                </div>
                               
                            </div>
                        )
                    })
                }
                
            </div>


            </div>

          
          
            
        </div>
    );
};

export default Todo;