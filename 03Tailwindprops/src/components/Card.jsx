import React from 'react'

function Card({username, btntext="Visit Us"}) {
  console.log(username);
  
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-80">
        <img
          src="https://via.placeholder.com/300x180"
          alt="Card"
          className="rounded-xl mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">React Card</h2>
        <p className="text-gray-600 mb-4">{username}</p>
        <p className="text-gray-600 mb-4">
          This is a simple card component built using React and Tailwind CSS.
        </p>
        <button className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition">
          {btntext}
        </button>
      </div>
    </div>
    )
}

export default Card