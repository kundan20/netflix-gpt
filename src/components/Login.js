import React, { useRef, useState } from 'react'
import { checkValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [isSingInForm, setSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     password: ''
    // });

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleSingIn = () => {
        setSignInForm(!isSingInForm);
    }
   
    const handleSubmitForm = async(e) => {
        //validating the form fields
        // console.log(formData)
        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;
        setLoading(true);
        if(!isSingInForm) {
            createUserWithEmailAndPassword(
                auth,email.current.value,
                password.current.value
            ).then((userCreds) => {
                const user = userCreds.user;
                updateProfile(user,{ displayName: name.current.value }).then(() => {
                    const { uid, email, displayName } = auth.currentUser;
                    dispatch(addUser({ uid, email, displayName }));
                    setLoading(false)
                });
            })
            .catch((err) => {
                const errCode = err.code;
                const errMsg = err.message;
                setErrorMessage(errCode + ': ' + errMsg);
                setLoading(false);
            })
        } else {
            try {
                const userCreds =  await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
                console.log(userCreds.user);
                setLoading(false);
            } catch(error) {
                const errCode = error.code;
                const errMsg = error.message;
                setErrorMessage(errCode + ': ' + errMsg);
                setLoading(false);
            }
        }
    }

    return (
        <div>
            <div className='absolute'>
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg"
                    alt="background"
                    className='bg-gradient-to-b from-black bg-opacity-65'
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='absolute z-10 p-12 w-4/12 bg-black my-40 mx-auto left-0 right-0 text-white bg-opacity-80 rounded '>
                <h1 className='font-bold text-3xl py-4'>{isSingInForm ? 'Sign In' : 'Sing Up'}</h1>
                {!isSingInForm && <input
                    type='text'
                    placeholder='Name'
                    className='p-4 my-4 w-full bg-gray-600 rounded'
                    // onChange={(e) => setFormData({...formData, name: e.target.value})}
                    // value={formData.name}
                    ref={name}
                />}
                <input
                    type='email'
                    placeholder='Email'
                    className='p-4 my-4 w-full bg-gray-600 rounded'
                    // value={formData.email}
                    // onChange={(e) => setFormData({...formData, email: e.target.value})}
                    ref={email}
                />
                <input
                    type='password'
                    placeholder='Password'
                    className='p-4 my-4 w-full bg-gray-600 rounded'
                    // value={formData.password}
                    // onChange={(e) => setFormData({...formData, password: e.target.value})}
                    ref={password}
                />
                {errorMessage && <p className='text-red-600 font-bold'>{errorMessage}</p>}
                <button
                    className='p-4 my-6 bg-red-700 rounded w-full'
                    onClick={handleSubmitForm}    
                >   
                    {loading ? 'Loading...' : (isSingInForm ? 'Sign In' : 'Sing Up')}
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