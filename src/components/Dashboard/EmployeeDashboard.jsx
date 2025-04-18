import React from 'react';
import Headers from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';
import { data } from 'autoprefixer';

const EmployeeDashboard = ({data,handleLogout}) => {
    
    return (
        <div className='flex flex-col h-screen w-screen p-10 bg-[#1C1C1C]'>
            <Headers data={data} handleLogout={handleLogout}/>
            <TaskListNumbers data={data} />
            <TaskList data={data}/>
        </div>
    );
};

export default EmployeeDashboard;