import React from 'react'
import { showRating } from './Helpers';

export default function ListItem({review}) {

    return (
        <li className='list-group-item d-flex justify-content-between align-items-start' >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{review.name}</div>
                <p>{review.message}</p>
                <p>
                    {
                        showRating(review.rating)
                    }
                </p>
            </div>
            <div className="d-flex flex-column align-items-center">
                <button className="btn btn-sm btn-danger mb-2">
                    <i className="bi bi-trash"></i>
                </button>
                <button className="btn btn-sm btn-warning">
                    <i className="bi bi-pencil"></i>
                </button>
            </div>
        </li>
    )
}
