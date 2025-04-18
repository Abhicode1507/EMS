import React from 'react';
import { useState } from 'react';
const Header = ({data, handleLogout}) => {
    
    // const [username, setUsername] = useState('');
    // if(!data){
    //     setUsername('Admin');
    // }else{
    //     setUsername(data.name);
    // }
    console.log('header data---',data);
    

    return (
        <div className='text-2xl font-medium flex items-center justify-between p-5'>
            <h1>Hello <br/> <span className='text-3xl font-semi-bold'>{data.name} 👋</span></h1>
            <button className='bg-red-600 px-5 py-2 rounded' onClick={handleLogout}>Log Out</button>
        </div>
    );
};

export default Header;