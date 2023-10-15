import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ReviewList from "./components/ReviewList";
import AverageRating from "./components/AverageRating";

function App() {

  const [reviews, setReviews] = useState([]);
  const [reviewToEdit, setReviewToEdit] = useState({
    review: null,
    updating: false
  });

  const addReview = (review) => {
    // ...reviews is : the spread operator
    setReviews([review, ...reviews]);
  }

  const removeReview = (id) => {
    setReviews(reviews.filter(review => review.id !== id))
  }

  const editReview = (review) => {
    setReviewToEdit({
      review,
      updating: true
    });
  }

  // const updateReview = (review) => {
  //   setReviews(reviews.map(item => item.id === review.id ?
  //     {...item,...review} : item));
  //     setReviewToEdit({
  //       review: null,
  //       updating: false
  //     });
  // }



  // **********************************

  const updateReview = (review) => {

    setReviews(reviews.map(item => item.id === review.id ?
      {...item,...review} : item));
      setReviewToEdit({
        review: null,
        updating: false
      });
  }

  // **********************************

  return (
    <div className="row my-4" >
      <div className="col-md-8 mx-auto">
        <div className="card">
          <div className="card-header bg-white">
            <Header />
          </div>
          <div className="card-body" >
            <Form 
              addReview={addReview} 
              reviewToEdit={reviewToEdit}
              updateReview={updateReview}
            />
            <AverageRating reviews={reviews} />
            <ReviewList 
              reviews={reviews} 
              removeReview={removeReview}
              editReview={editReview}
              reviewToEdit={reviewToEdit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
