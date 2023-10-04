import React, { useEffect, useState } from 'react'
import img from '../assets/signUp.png'
import logo from '../assets/logo.png'
import bottom_right from '../assets/bottom-right-curve.png'
import useAuthStore from '../context/store'
// import { auth,provider } from '../firebase'
// import { signInWithPopup } from 'firebase/auth'
// import { signInWithGoogle } from '../firebase'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    // const handleGoogleAuth = ()=>{
    //     signInWithPopup(auth,provider).then((data)=>[
    //         //localStorage.setItem('user',JSON.stringify(data.user))
    //         console.log(data)
    //     ])
    // }

    // useEffect(() => {
      
    // }, [])

    const navigate = useNavigate()

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Cpassword, setCPassword] = useState('');
    const register = useAuthStore((state) => state.register);
    const signInWithGoogle = useAuthStore((state) => state.signInWithGoogle);
    const signInWithGithub = useAuthStore((state) => state.signInWithGithub);


    const handleSignIn = async(e) => {
        e.preventDefault();
        try {
          if(password === Cpassword){
            console.log("click")
            await register({ firstName,lastName, email, password });
            navigate('/questions')
          }  
          else{
            alert("Confirm password does't match wiht password")
          }
        } catch (error) {
          console.error('Registration error:', error);
        }
      };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-lg p-8 space-y-4 bg-white border-r-2">
                <img src={logo} className='w-1/2 lg:w-1/4 mx-auto' />
                <h2 className="text-2xl font-semibold text-center">Hello !</h2>
                <h2 className="text-xs text-center"><span className='border-b-2 '><span className='invisible'>fvdfdwvdvwv</span></span>Create Your Account<span className='w-full border-b-2 '><span className='invisible'>fvdfdwvdvwv</span></span></h2>
                <form>
                    <div className="space-y-2">
                        <div>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                                placeholder="First Name"
                                required
                                value={firstName}
                                onChange={(e) => setfirstName(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                                placeholder="Last Name"
                                required
                                value={lastName}
                                onChange={(e) => setlastName(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                                placeholder="Confirm Password"
                                required
                                value={Cpassword}
                                onChange={(e) => setCPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mt-4 space-x-2 ">
                        <button
                            type="submit"
                            onClick={handleSignIn}
                            className="px-4 py-2 w-[100%] text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                        >
                            SIGN UP
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <p>or</p>
                    <div className="mt-5 flex justify-evenly space-x-2"> {/* Updated this line */}
                        <button
                            type="button"
                            onClick={signInWithGoogle}
                            className="flex items-center px-4 py-2 space-x-2 border-2 rounded-md"
                        >
                            SignUp with Google
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="Google"
                                className="w-5 h-5 ml-1"
                            />
                        </button>
                        <button
                            type="button"
                            className="flex items-center px-4 py-2 space-x-2 border-2 rounded-md"
                            onClick={signInWithGithub}
                        >
                            SignUp with Github
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                                alt="GitHub"
                                className="w-5 h-5 ml-2"
                            />
                        </button>
                    </div>
                    <p className='mt-3'>Already have a account ? <Link to='/login' className='text-blue-500 underline'>LOGIN</Link></p>
                </div>
            </div>
            <div className="hidden lg:block lg:w-1/3">
                <img
                    src={img}
                    alt="Signup Image"
                    className="w-full h-auto"
                />
                <img
                    src={bottom_right}
                    alt="Bottom Right Image"
                    className="absolute bottom-0 right-0 w-1/2"
                />
            </div>
        </div>
    )
}

export default Signup