import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSingInForm, setSignInForm] = useState(true);

    const handleSingIn = () => {
        setSignInForm(!isSingInForm);
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg"
                    alt="background"
                />
            </div>
            <form className='absolute z-10 p-12 w-4/12 bg-black my-40 mx-auto left-0 right-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSingInForm ? 'Sign In' : 'Sing Up'}</h1>
                {!isSingInForm && <input
                    type='text'
                    placeholder='Name'
                    className='p-4 my-4 w-full bg-gray-600 rounded'
                />}
                <input
                    type='email'
                    placeholder='Email'
                    className='p-4 my-4 w-full bg-gray-600 rounded'
                />
                <input
                    type='password'
                    placeholder='Password'
                    className='p-4 my-4 w-full bg-gray-600 rounded'
                />
                <button
                    className='p-4 my-6 bg-red-700 rounded w-full'>
                        {isSingInForm ? 'Sign In' : 'Sing Up'}
                </button>
                <p
                    className='cursor-pointer'
                    onClick={handleSingIn}
                >
                    {!isSingInForm ? 'Already registered? Sign In Now' : 'New to Netflix? Sign Up Now'}
                </p>
            </form>
        </div>
    )
}

export default Login