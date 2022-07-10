import { useReducer } from 'react';

const reducer = (state, action) => {
  if (action.type === 'CHANGE') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true };
  }
  return { value: '', isTouched: false };
};

const useSetValue = (validator) => {
  const [state, dispatch] = useReducer(reducer, {
    value: '',
    isTouched: false,
  });

  const isValid = validator(state.value);
  const hasError = !isValid && state.isTouched;

  const valueChangeHandler = (e) => {
    dispatch({ type: 'CHANGE', value: e.target.value });
  };

  const valueBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  return {
    val: state.value,
    chgFnc: valueChangeHandler,
    blurFnc: valueBlurHandler,
    valid: isValid,
    err: hasError,
  };
};

export default useSetValue;
