import React from 'react'

export default function AverageRating({reviews}) {

    const calculateReviewsAverage = () => {
        let average = reviews.reduce((acc,review) => {
            return acc + review.rating / reviews.length;
        },0);

        // .toFixed(1) = for Returns a single number after the comma
        return average > 0 ? average.toFixed(1) : 0
    }

    return (
        <div className='container my-4' >
            <div className="d-flex justify-content-between align-items-center">
                <h5>Reviews:
                    {" "}
                    <span className="badge bg-dark rounded-pill">
                        {reviews.length}
                    </span>
                </h5>
                <h5>Average: 
                    {" "}
                    <span className="badge bg-warning text-dark rounded-pill">
                        {
                            calculateReviewsAverage()
                        }
                    </span>
                </h5>
            </div>
        </div>
    )
}
