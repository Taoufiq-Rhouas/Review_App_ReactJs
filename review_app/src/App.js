import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ReviewList from "./components/ReviewList";
import AverageRating from "./components/AverageRating";

function App() {

  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    // ...reviews is : the spread operator
    setReviews([review, ...reviews]);
  }


  return (
    <div className="row my-4" >
      <div className="col-md-8 mx-auto">
        <div className="card">
          <div className="card-header bg-white">
            <Header />
          </div>
          <div className="card-body" >
            <Form addReview={addReview} />
            <AverageRating reviews={reviews} />
            <ReviewList reviews={reviews} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
