import React from 'react'

const Login = () => {
    const handleLogin=()=>{
        window.location.href = "http://localhost:0808/oauth2/authorization/google";
    }
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
        <div className='bg-white p-8 text-center rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold mb-8'>
                Login with College Email
            </h2>
            <button
            onClick={handleLogin}
            className='bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition'
            >
                Sign in with Google
            </button>
        </div>
    </div>
  )
}

export default Login