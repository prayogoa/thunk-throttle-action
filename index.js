import throttle from 'lodash/function/throttle';
export default function createThrottledAction(actionCreator, delay) {
  return throttle((dispatch) => (...actionArgs) => dispatch(actionCreator(...actionArgs)), delay);
}
