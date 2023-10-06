import React, { useState } from 'react'

export default function Form() {
    const [name, setName] = useState('');
    const [message,setMessage] = useState('');


    return (
        <form className='mt-5' >
            <div className='mb-3'>
                <label htmlFor='name' className='form-label'>Name</label>
                <input 
                    type='text' 
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='form-control'
                    placeholder='Name'
                    
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='message' className='form-label'>Message</label>
                <textarea 
                    
                    name='message' 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className='form-control' 
                    placeholder='Message'
                    rows={3} 
                    // defaultValue={''} 
                />
            </div>
            <div className='col-auto'>
                <button type='submit' className='btn btn-primary mb-3'>Submit</button>
            </div>
        </form>
    )
}
