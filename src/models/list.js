import store from 'store';
export default {
  namespace : 'list',
  state : {
    cart: store.get('CART_LIST') || []
  },
  subscriptions : {
    setup({dispatch, history}) { // eslint-disable-line
    }
  },
  effects : {
    *fetch({
      payload
    }, {call, put}) { // eslint-disable-line
      yield put({type: 'save'});
    },
    *changeCart({
      payload
    }, {select, put}) {
      let {id, quantity} = payload;
      let storeCart = store.get('CART_LIST') || [];
      let findIndex = storeCart.findIndex(item => item.id === id);

      if (findIndex > -1) {
        if (quantity === 0) {
          storeCart.splice(findIndex, 1)
        } else {
          storeCart[findIndex] = {
            ...payload,
            quantity: parseInt(quantity)
          }
        }
      } else {
        storeCart.push(payload)
      }

      store.set('CART_LIST', storeCart)
      //console.log('-------',storeCart)
      yield put({type: 'save', payload: storeCart});
    },
    *clearAll(action, {put}) {
      store.remove('CART_LIST')
      yield put({type: 'save', payload: []});
    }
  },
  reducers : {
    save(state, action) {
      let {cart} = state;
      let {payload} = action
      return {
        ...state,
        cart: action.payload
      };
    }
  }
};
