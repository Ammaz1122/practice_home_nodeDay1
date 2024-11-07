import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

const Register = () => {
  
  const [years,setYears] = useState([])
  const [months] = useState([
    'jan' , 'feb' , 'mar' , 'apr', 'may' , 'jun' , 'jul' , 'aug' , 'sep' , 'oct' , 'nov','dec',
  ])

  const [formFields,setFormFields] = useState({
    m_mail : '',
    password : '',
    full_name : '',
    username : '',
    date:new Date().getDate(),
    month: months[new Date().getMonth()],
    year: new Date().getFullYear()
  })




  const {m_mail,password,full_name,username,date,month,year} = formFields




  useEffect(() => {
    const getCurrentYear = new Date().getFullYear();
  const getStartYear = 1905;

    let temp = [];
    for (let i = getCurrentYear; i >= getStartYear; i--) {
      temp.push(i);
    }
    setYears(temp);
  }, []);


      const handleChange =(e)=>{
        

        setFormFields({
          ...formFields,
          [e.target.name] : e.target.value,
        })
      }

   
     

        // On handle Register
        const handleRegister = async (e)=>{

          e.preventDefault();
          const dataForBE = {
            m_mail,password,full_name,username,dob:`${date}-${month}-${year}`
          }
          const response = await axios.post('http://localhost:3001/api/user/add-data',dataForBE)
          //to store the person in our application 
          localStorage.setItem('user',JSON.stringify(response.data))
        } 
      
        

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
             <input value={m_mail} name='m_mail' onChange={handleChange} width={500}  type="email" className="form-control w-75 m-auto" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter an email" />
             </div>

            {/* password */}
          
            <div className="form-group">
             <label className='my-2 mx-3'>Password</label>
             <input name='password' value={password} onChange={handleChange} width={500}  type="password" className="form-control w-75 m-auto" placeholder="Enter a password" />
             </div>

             {/* Full Name */}
             <div className="form-group">
             <label className='my-2 mx-3' for="exampleInputEmail1">Full Name</label>
             <input name='full_name' value={full_name} onChange={handleChange} width={500}  type="text" className="form-control w-75 m-auto" placeholder="Enter a Full Name" />
             </div>

            {/* User name */}

             <div className="form-group">
             <label className='my-2 mx-3' for="exampleInputEmail1">User Name</label>
             <input name='username' value={username} onChange={handleChange} width={500}  type="text" className="form-control w-75 m-auto"  placeholder="Enter a Full Name" />
             </div>

              {/* Date of Birth */}

              <div className="d-flex gap-2 " >
                <select  value={date}  className='form-control text-transform-capitalize'  onChange={handleChange}  name="date">
                 
                    {Array.from({length:31}).map((_,index)=>{
                      return <option value={index + 1}>
                        {index + 1}
                      </option>
                    })}
                  
                </select>

                <select value={month} className='from-control ' onChange={handleChange}  name="month" id="">

                 {months?.map((item,index)=>{
                  return <option value={item} key={index} className='text-capitalize'>
                      {item}
                  </option>
                 })}
                
               
             </select>

                    <select value={year} className='form-control' onChange={handleChange}  name="year" id="">
                      {years?.map((item,index)=>{
                        return <option  value={index + 1}>
                          {item}
                        </option>
                      })}

             </select>


              </div>

              <button onClick={handleRegister} className='btn btn-primary w-75 d-block mx-auto my-3'>
                        Sign Up
              </button>


             <Link
            to="/"
            className="text-primary d-block text-center my-2 text-decoration-none">
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