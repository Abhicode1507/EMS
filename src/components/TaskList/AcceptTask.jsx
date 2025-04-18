import React from 'react';

const AcceptTask = ({data}) => {
    console.log('accept task data---',data);
    
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl '>
                <div className='flex justify-between item-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                    <h4 className='text-black! text-sm'>{data.date}</h4>
                </div>
                <h2 className='text-black! mt-5 text-2xl font-semibold'>{data.title}</h2>
                <p className='text-black! text-sm'>{data.description}</p>
                <div className='flex justify-between items-center mt-5'> 
                    <button className='bg-green-500 py-1 px-2 text-sm rounded'>Mark as Completed</button>
                    <button className='bg-red-500 py-1 px-2 text-sm rounded'>Mark as Failed</button>
                </div>
            </div>
    );
};

export default AcceptTask;