import React, { useContext, useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { v4 as uuidv4 } from 'uuid';
import { ReviewContext } from './context/ReviewContext';
// import { showRating } from './Helpers';


export default function Form() {
    const [name, setName] = useState('');
    const [message,setMessage] = useState('');
    // rating
    const [rating, setRating] = useState(0);

    const {addReview, reviewToEdit, updateReview} = useContext(ReviewContext)

    useEffect(() => {
        if(reviewToEdit.updating){
            setName(reviewToEdit.review.name);
            setMessage(reviewToEdit.review.message);
            setRating(reviewToEdit.review.rating);
        }
    },[reviewToEdit])

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate);
    }

    const formSubmit = (e) => {
        e.preventDefault();

        if(reviewToEdit.updating){
            console.log('FORM reviewToEdit.updating ====================================');
            const review = {
                id: reviewToEdit.review.id,
                name,
                message,
                rating: rating
                // rating: rating / 20
            }
            updateReview(review);
        }else{
            const review = {
                id: uuidv4(),
                name,
                message,
                rating: rating
                // rating: rating / 20
            }
            addReview(review);
        }
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
            <div className='col-auto'>
                <button
                    disabled={isDisabled()}
                    type='submit' 
                    className={`btn btn-${reviewToEdit.updating ? 'warning' : 'primary'}`}>
                    {
                        reviewToEdit.updating ? 'Update' : 'Submit'
                    }
                </button>
            </div>
        </form>
    )
}
