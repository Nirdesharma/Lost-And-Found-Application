import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const PostItem = () => {
    const [postItem, setPostItem] = useState({
        title:"",
        description:"",
        category:"Lost",//lost or found by default setting to Lost
        location:"",
        date:"",
    });
    const handleChange=(e)=>{
        setPostItem({...postItem,[e.target.name]:e.target.value})
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:8080/api/postItems",postItem,{
                withCredentials:true, //ensure cookies are sent for authentication
            });
            alert("Item posted successfully!")
            setPostItem({title:"",description:"",category:"Lost",location:"",date:""})
        }catch(error){
            alert("Failed to post item. Please try again.")
        }

    };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='bg-white rounded-lg shadow-md w-96 p-6'>
            <h2 className='text-2xl font-bold text-center mb-4'>Report Lost or Found Item</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <input type="text"
                name="title"
                value={postItem.title}
                placeholder='Enter Title'
                required
                onChange={handleChange}
                className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' 
                />
                <textarea className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                name='description'
                value={postItem.description}
                placeholder='Enter Description'
                required
                onChange={handleChange}/>
                <select className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                name='category'
                value={postItem.category}
                onChange={handleChange}
                required>
                    <option value="Lost">Lost</option>
                    <option value="Found">Found</option>
                </select>
                <input className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                type="text"
                name='location'
                value={postItem.location}
                placeholder='last seen location'
                required
                onChange={handleChange}/>
                <input className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                type='date'
                name='date'
                value={postItem.date}
                required
                onChange={handleChange}/>
                <button type='submit'
                className='w-full text-white py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition '>submit</button>

            </form>

        </div>
    </div>
  )
}

export default PostItem