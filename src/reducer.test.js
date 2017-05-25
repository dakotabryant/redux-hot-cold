import reducer from './reducer';
import {newGame, makeGuess, toggleInfoModal} from './actions';


describe('Reducer tests', () => {
  it('should set the initial state', () => {
    const state = reducer(undefined, {type: 'UNKNOWN'});
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
    expect(state.showInfoModal).toBe(false);
  })
  it('should return the current state', () => {
    let currentState = {};
    const state = reducer(currentState, {type: 'UNKNOWN'});
    expect(state).toBe(currentState);
  })
});
