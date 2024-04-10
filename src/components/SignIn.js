import React, { useState, useEffect , useRef} from 'react'
import {checkValidData} from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import {BG_IMG} from "../utils/constants"
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';



const SignIn = () => {
   const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isSignInForm, setIsSignForm] = useState(true)

  const [values, setValues] = useState({
      email : "",
      password : ""
    })

  const [errors, setErrors] = useState({})
  
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleButtonClick = () =>{

        const Message = checkValidData(values)
        //setIsFormValid(Message)
        setErrors(Message);

        if(Message?.hasOwnProperty('email')|| Message?.hasOwnProperty('password')) return;
    
        if(!isSignInForm){
          createUserWithEmailAndPassword(auth, values.email, values.password)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // navigate("/app")
            // ...
            console.log(user)
          })
          .catch((error) => {
            const errorMessage = {email:"Email already exist"};
            setErrors(errorMessage)
           // setIsFormValid( errorMessage)
            // ..
          });
    }
        else{
          signInWithEmailAndPassword(auth, values.email, values.password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // navigate("/app")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = {email:"Unregistred email"};
            setErrors(errorMessage)
           //setIsFormValid(error.code + "-" + error.message)
          });
       }}
      const toggleSignInForm = () =>{
        setIsSignForm(!isSignInForm)
      }
  
      const handleInput = (e) =>{
        const newObj = {...values , [e.target.title] : e.target.value }
        setValues(newObj)
      }
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            const { uid, email, displayName } = user;
            dispatch(addUser({ uid: uid, email: values.email, displayName: displayName }))
            navigate("/app")
          } else {
            dispatch(removeUser())
            navigate("/")
            // User is signed out
          }
        });
        // unsubscribe when component unmounts
        return () => unsubscribe();
      }, [])

  return (
    <div>
       <div className='absolute'>
        <img className='w-screen sm:w-screen md:w-screen lg:w-screen xl:w-screen 2xl:w-screen h-screen sm:h-screen
         md:h-screen lg:h-screen xl:h-screen 2xl:h-screen'  src = {BG_IMG} alt = "bg-logo" />
      </div>
          <form   onSubmit = {(e)=>e?.preventDefault()} className="absolute text-white py-[4vh] px-[6vh] w-[49vw] sm:w-[46vw] 
          md:w-[40vw] lg:w-[33vw] xl:w-[30vw] 2xl:w-[28vw] h-[60vh]  sm:h-[60vh] 
          md:h-[60vh] lg:h-[60vh] xl:h-[60vh] 2xl:h-[40vh] my-[18vh]  mx-auto left-0 right-0 bg-black bg-opacity-90">
        <h1 className=" text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl  py-[1vh]">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm &&
          <input ref = {fullName} type="text" placeholder="Full Name" title='fullName'
           className="py-[1vh] my-[1.5vh] pl-[1vw] w-full bg-gray-800 rounded-lg" />
        }
        <input ref = {email} type="text" placeholder="Email" title='email'
         className="py-[1vh] my-[1.5vh] pl-[1vw] w-full bg-gray-800 rounded-lg" onChange={handleInput} />
         {errors.email && <p>{errors?.email}</p>}
        <input ref = {password} type="text" placeholder="Password" title='password'
        className="py-[1vh] my-[1.5vh] pl-[1vw] w-full bg-gray-800 rounded-lg"   onChange={handleInput} />
                 {errors.password && <p>{errors?.password}</p>}
        <button className="py-[1vh]  my-[1.5vh]  bg-red-700 w-full rounded-lg"
         onClick = {handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <div className="flex cursor-pointer" onClick={toggleSignInForm}>
          <p className="py-[0.6vh] text-gray-400 ">{isSignInForm ? "New User?" : "Already registered?"}</p>
          <p className="py-[0.6vh] pl-[0.5vw]">{isSignInForm ? "Sign up Now" : "Sign In Now"}</p>
          </div>
        </form>
    </div>
  )
}

export default SignIn