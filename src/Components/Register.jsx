import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const {createuser} = useContext(AuthContext)
    const [error, setError] = useState('')
    const handleSubmit = (event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        console.log(email,password,name)
        createuser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            toast.success('successfully register', {autoClose:500})
            form.reset()
        })
        .catch(error=>{
            console.error('error', error)
            setError(error.message)

        })       
    }
    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Register Now!!</h1>
                    
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit}>
                        <div className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name='name' className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
                        
                        <label className="label">
                            <p>Already have an account.<Link className="btn btn-link p-0" to={'/signin'}>Sign in</Link></p>
                        </label>
                        </div>
                        <p><small>{error}</small></p>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign up</button>
                        </div>
                    </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;