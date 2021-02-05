import { createStore } from 'vuex';

const store = createStore({
  state: {
    couter: 0,
    msg: 'this is state'
  }
});

export default store;