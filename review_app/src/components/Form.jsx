import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { v4 as uuidv4 } from 'uuid';


export default function Form({addReview}) {
    const [name, setName] = useState('');
    const [message,setMessage] = useState('');
    // rating
    const [rating, setRating] = useState(0);

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate);
    }

    const formSubmit = (e) => {
        e.preventDefault();
        const review = {
            // id: 1,
            id: uuidv4(),
            name,
            message,
            rating: rating
            // rating: rating / 20
        }
        addReview(review);
        setName('');
        setMessage('');
        setRating(0);
    }

    const isDisabled = () => {
        if(!name || !message || !rating > 0){
            return true
        }
    }



    return (
        <form className='mt-5' onSubmit={(e) => formSubmit(e)} >
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
            {/*  */}
            <div className='mb-3'>
                <Rating
                    onClick={handleRating}
                    ratingValue={rating}
                    // onPointerEnter={onPointerEnter}
                    // onPointerLeave={onPointerLeave}
                    // onPointerMove={onPointerMove}
                    /* Available Props */
                />
            </div>
            {/*  */}
            <div className='col-auto'>
                <button
                    disabled={isDisabled()}
                    type='submit' 
                    className='btn btn-primary mb-3'
                >Submit</button>
            </div>
        </form>
    )
}
