import React from "react";

    function Bmilist({range,bmi}) {
     
      return (
      
        <div className="text-center shadow-sm rounded">
          <ul className="list-group ">
            <li className="list-group-item ">
              <div className="row">
                <div className="col-4 fw-bold">Type</div>
                <div className="col-4 fw-bold">BMI</div>
                <div className="col-4 fw-bold">WEIGHT</div>
              </div>
            </li>
            <li
              className={bmi<18.5 ? "border border-danger border-3 list-group-item": "list-group-item"}>
      <div className="row">
      <div className="col-4">underweight</div>
      <div className="col-4">&lt; 18.5</div>
      <div className="col-4">&lt; {range.underweight.low} kg</div>
      </div>
      </li>

      <li
              className={bmi>18.5 && bmi<24.9 ? "border border-danger border-3 list-group-item": "list-group-item"}>
      <div className="row">
      <div className="col-4">normal</div>
      <div className="col-4">18.5-24.9</div>
      <div className="col-4">{range.normal.low + "kg " +range.normal.high}</div>
      </div>
      </li>

      <li
              className={bmi>25 &&bmi<29.9 ? "border border-danger border-3 list-group-item": "list-group-item"}>
      
      <div className="row">
      <div className="col-4">overweight</div>
      <div className="col-4">25-29.9</div>
      <div className="col-4">{range.overweight.low + "kg " +range.overweight.high}</div>
      </div>
      </li>

      <li
              className={bmi>30 && bmi<34.9 ? "border border-danger border-3 list-group-item": "list-group-item"}>
      
      <div className="row">
      <div className="col-4">obesity class1</div>
      <div className="col-4">30-34.9</div>
      <div className="col-4">{range.obesity1.low + "kg " +range.obesity1.high}</div>
      </div>
      </li>

    
    
      <li
              className={bmi>35 && bmi<39.9 ? "border border-danger border-3 list-group-item": "list-group-item"}>
      <div className="row">
      <div className="col-4">obesity class2</div>
      <div className="col-4">35-39.9</div>
      <div className="col-4">{range.obesity2.low + "kg " +range.obesity2.high}</div>
      </div>
      </li>


      <li
              className={bmi>40 ? "border border-danger border-3 list-group-item": "list-group-item"}>
      <div className="row">
      <div className="col-4">obesity class3</div>
      <div className="col-4">&gt; 40</div>
      <div className="col-4">&gt; { range.obesity3.high}</div>
      </div>
      </li>

      </ul>
      </div>
  );
}
export default Bmilist;