import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <div className="row my-4" >
      <div className="col-md-8 mx-auto">
        <div className="card">
          <div className="card-header bg-white">
            <Header />
          </div>
          <div className="card-body" >
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
