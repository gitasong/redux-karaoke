const chorus = "Don't want to be a fool for you, Just another player in your game for two, You may hate me but it ain't no lie, Baby bye bye bye, Bye bye, I Don't want to make it tough, I just want to tell you that I've had enough, It might sound crazy but it ain't no lie, Baby bye bye bye";

const chorusArray = chorus.split(', ');

const initialState = {
  chorus: chorus,
  chorusArray: chorusArray,
  position: 0,
  currentPhrase: chorusArray[0]
}

console.log(initialState);

// REDUCER

const reducer = (state = initialState, action) => {

}

const { expect } = window;

// UNIT TESTS

expect(
  reducer(initialState, { type: null })
).toEqual(initialState);

const { createStore } = Redux;
const store = createStore(reducer);
console.log(store.getState());

const userClick = () => {
  console.log('click');
}
