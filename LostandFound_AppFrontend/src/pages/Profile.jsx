import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Profile = () => {
    const [profile, setProfile] = useState({
        className:'',
        section:'',
        department:'',
    });

    const handleChange=(e)=>{
        setProfile({...profile,[e.target.name]:e.target.value})
    };
    const handleSubmit= async(e)=>{
        e.preventDefault();
        await axios.put('http://localhost:0808/api/user/profile',profile,{
            withCredentials:true,
        });
        alert("Profile updated Successfully");

    };
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
        <div className='bg-white p-8 rounded-lg shadow-lg w-96'>
        <h2 className='text-2xl text-bold mb-6 text-center'>Complete your Profile</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
            <input type="text"
             name='className'
             placeholder='Class'
             required 
             onChange={handleChange}
             className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input type="text"
             name='section'
             placeholder='Section'
             required
             onChange={handleChange}
             className='w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
             />
            <input type="text" name='department'placeholder='Department' required onChange={handleChange}
            className='w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
            <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 text-white py-2'>Update Profile</button>
        </form>
        </div>
    </div>
    
  )
}

export default Profile