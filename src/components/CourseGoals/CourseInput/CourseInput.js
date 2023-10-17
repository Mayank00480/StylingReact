import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid , setValid] = useState(true)
  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length === 0 ){
      setValid(false);
      return ;
    }
    setValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim() === '')
    {
      setValid(false);
      return ;
    }
   
    props.onAddGoal(enteredValue);
    setEnteredValue(' ')
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValid? '' : 'invalid'}`}>
        <label >Course Goal</label>
        <input value = {enteredValue}  type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button checkValid = {isValid} type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
