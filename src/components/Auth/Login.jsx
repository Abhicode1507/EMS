import React from 'react';

const Login = ({handleLogin}) => {
    
    const [email, setEmail] = React.useState(''); // State to hold the email input value
    const [password, setPassword] = React.useState(''); // State to hold the password input value

    // Function to handle form submission
    const submitHandler = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        // console.log(email, password); // Log the email and password to the console (for demonstration purposes)
        handleLogin(email, password); // Call the handleLogin function passed as a prop with email and password
        setEmail(''); // Clear the email input field
        setPassword(''); // Clear the password input field
    }

    return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e); // Call the submit handler when the form is submitted
            }}
            autoComplete='off' // Disable autocomplete for the form fields
            className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl text-emerald-600 font-bold'>Login to EMS</h1> {/* Login title */}
                <input
                value={email} // Bind the input value to the email state
                onChange={(e) => setEmail(e.target.value)} // Update the email state when the input value changes
                required
                className='outline-none bg-transparent text-xl border-2 border-emerald-600 py-4 px-5 rounded-full placeholder:text-gray-400'
                type="email" placeholder='Enter your email'/>
                <input 
                value={password} // Bind the input value to the password state
                onChange={(e) => setPassword(e.target.value)} // Update the password state when the input value changes
                required className='outline-none bg-transparent text-xl border-2 border-emerald-600 py-4 px-5 rounded-full placeholder:text-gray-400 mt-3' type="password" placeholder='Enter your password' />
                <button className='text-white outline-none text-xl bg-emerald-600 py-4 px-5 rounded-full placeholder:text-white mt-5'>Login</button>
            </form>
        </div>
    </div> 

  );
};

export default Login;