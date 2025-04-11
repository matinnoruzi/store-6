import React from 'react'

function Loading() {
    return (
        <div className='flex items-center justify-center h-screen bg-emerald-50'>
            <svg className='w-24 h-24 text-emerald-700'
                viewBox='0 0 50 50'
                animate-spin
                >
                <circle
                    className='opacity-25'
                    cx="25"
                    cy="25"
                    r="20"
                    fill='none'
                    stroke='currentColor'
                    strokeWidth="4" />
                <circle
                    className='opacity-75'
                    cx="25"
                    cy="25"
                    r="20"
                    fill='none'
                    stroke='currentColor'
                    strokeWidth="4"
                    strokeDasharray="80"
                    strokeDashoffset="60"
                />



            </svg>
            <p className='font-semibold'>Loading...</p>
        </div>
    )
}

export default Loading