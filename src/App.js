import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [amount, setamount] = useState(0);

  const add = (num) => {
    setamount(amount + num);
  };
  return (
    <div className="App">
      <h4>Amount adder</h4>
      <div class="input-group m-auto w-25 mt-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Rs</span>
        </div>
        <input
          value={amount}
          type="number"
          class="form-control"
          aria-label="Amount (to the nearest rupee)"
          onChange={e=>setamount(parseInt(e.target.value))}
        ></input>
      </div>
      <button className="btn btn-success m-2" onClick={(e) => add(500)}>
        + 500
      </button>
      <button className="btn btn-success m-2" onClick={(e) => add(1000)}>
        + 1000
      </button>
      <button className="btn btn-success m-2" onClick={(e) => add(5000)}>
        + 5000
      </button>
    </div>
  );
}

export default App;
