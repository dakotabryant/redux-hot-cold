/* eslint-disable */
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

describe('newGame', () => {
  it('should make a new game', () => {
    let state = {
      guesses: [1, 25, 75],
      feedback: 'Guess!',
      correctAnswer: 50,
      showInfoModal: false
    };
    state = reducer(state, newGame());
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
    expect(state.showInfoModal).toBe(false);
  })
})

describe('makeGuess', () => {
  it('should add a guess', () => {
    let state = {
      guesses: [],
      feedback: '',
      correctAnswer: 51
    };
    state = reducer(state, makeGuess(1));
    expect(state.guesses).toEqual([1]);
    expect(state.feedback).toEqual('You\'re Ice Cold...');

    state = reducer(state, makeGuess(10));
    expect(state.guesses).toEqual([1, 10]);
    expect(state.feedback).toEqual('You\'re Cold...');

    state = reducer(state, makeGuess(30));
    expect(state.guesses).toEqual([1, 10, 30]);
    expect(state.feedback).toEqual('You\'re Warm');

    state = reducer(state, makeGuess(50));
    expect(state.guesses).toEqual([1, 10, 30, 50]);
    expect(state.feedback).toEqual('You\'re Hot!');

    state = reducer(state, makeGuess(51));
    expect(state.guesses).toEqual([1, 10, 30, 50, 51]);
    expect(state.feedback).toEqual('You got it!');
  })
})

describe('toggleInfoModal', () => {
  it('should toggle info modal on', () => {
    let state = {
        showInfoModal: false
      };
    state = reducer(state, toggleInfoModal());
    expect(state.showInfoModal).toEqual(true);
  })

   it('should toggle info modal off', () => {
    let state = {
        showInfoModal: true
      };
    state = reducer(state, toggleInfoModal());
    expect(state.showInfoModal).toEqual(false);
  })
})
