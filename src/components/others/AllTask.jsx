import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {

    const authData = useContext(AuthContext);
    console.log('authData---',authData);
    
    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-55 '>
            <div className='bg-emerald-400 mb-2 py-2 px-4 flex justify-between rounded'>
                    <h2 className='w-1/5 p-1'>Employee Name</h2>
                    <h3 className='w-1/5 p-1'>New Task</h3>
                    <h5 className='w-1/5 p-1'>Active Task</h5>
                    <h5 className='w-1/5 p-1'>Completed</h5>
                    <h5 className='w-1/5 p-1'>Failed</h5>
                </div>
            <div className='h-[80%] overflow-auto no-scrollbar'>
            {authData.employees.map((employee, idx) => (
                <div key={idx} className='bg-gray-800 mb-2 py-2 px-4 flex justify-between rounded'>
                    <h2 className='w-1/5 p-1'>{employee.name}</h2>
                    <h3 className='w-1/5 text-red-600! p-1'>{employee.taskCounts.newTask}</h3>
                    <h5 className='w-1/5 text-yellow-400! p-1'>{employee.taskCounts.active}</h5>
                    <h5 className='w-1/5 text-green-600! p-1'>{employee.taskCounts.completed}</h5>
                    <h5 className='w-1/5 text-red-600! p-1'>{employee.taskCounts.failed}</h5>
                </div>
            ))}
            </div>
            
        </div>
    );
};

export default AllTask;