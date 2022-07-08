import { useState } from 'react';

const useSetValue = () => {
  const [enteredValue, setEnteredValue] = useState('');

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  return { val: enteredValue, fnc: valueChangeHandler };
};

export default useSetValue;
