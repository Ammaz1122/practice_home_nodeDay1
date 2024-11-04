import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
    <div className="container">
      <div className="row d-flex justify-content-center my-5">
        <div className="col-lg-4">
       
            <form className='border'>
            <img className='d-block mx-auto rounded' width={200}  src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/instagram-users-irked-with-the-new-update-sixteen_nine.jpg?size=1200:675" alt="" />

            <p className="text-secondary text-center">
            Sign up to see photos and videos<br />from your friends.
            </p>
             <div className="form-group">
             <label className='my-2 mx-3' for="exampleInputEmail1">Email address</label>
             <input width={500}  type="email" className="form-control w-75 m-auto" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter an email" />
             </div>


            {/* password */}
          
            <div className="form-group">
             <label className='my-2 mx-3' for="exampleInputEmail1">Password</label>
             <input width={500}  type="password" className="form-control w-75 m-auto" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a password" />
             </div>

             {/* Full Name */}
             <div className="form-group">
             <label className='my-2 mx-3' for="exampleInputEmail1">Full Name</label>
             <input width={500}  type="text" className="form-control w-75 m-auto" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a Full Name" />
             </div>

             <Link
            to="/"
            className="text-primary d-block text-center my-2 text-decoration-none"
          >
            Already have an account?
          </Link>
            </form>
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default Register