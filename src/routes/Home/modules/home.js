import { DEAL } from '../../../actions/deal'
import { BID, BID_CHANGE } from '../../../actions/bid'
// ------------------------------------
// Action Handlers
// ------------------------------------
const DEALS_LENGTH = 10;
const BIDS_LENGTH = 10;
const bidKind = (d) => d.bid.kind === 'Buy' ? 'buy' : 'sell';
const ACTION_HANDLERS = {
  [DEAL]: (state, action) => {
    return Object.assign({}, state, {
      lastDeals: [action.payload].concat(
        state.lastDeals.length < DEALS_LENGTH ?
          state.lastDeals :
          state.lastDeals.slice(0, state.lastDeals.length - 1)
      )
    })
  },
  [BID]: (state, action) => {
    const bidData = action.payload;
    const kind = bidKind(bidData);
    const lastBidsOfKind = state.lastBids[kind];
    return Object.assign({}, state, {
      lastBids: Object.assign({}, state.lastBids, {
        [kind]: [bidData].concat(
          lastBidsOfKind.length < BIDS_LENGTH ?
            lastBidsOfKind :
            lastBidsOfKind.slice(0, lastBidsOfKind.length - 1)
        )
      })
    })
  },
  [BID_CHANGE]: (state, action) => {
    const bidData = action.payload;
    const kind = bidKind(bidData);
    const lastBidsOfKind = state.lastBids[kind];
    const i = lastBidsOfKind.findIndex(b => b.id === bidData.id);
    return i === -1 ? state : Object.assign({}, state, {
      lastBids: Object.assign({}, state.lastBids, {
        [kind]: [...lastBidsOfKind.slice(0, i), bidData, ...lastBidsOfKind.slice(i + 1)]
      }),
      lastChangedBid: bidData
    });
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  price: undefined,
  lastChangedBid: undefined,
  lastBids: {
    buy: [],
    sell: []
  },
  lastDeals: []
};
export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state
}
