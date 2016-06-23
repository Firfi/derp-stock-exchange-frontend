export const BID = 'bid';
export const BID_CHANGE = 'bidChange';

export const bid = (b) => ({
  type: BID,
  payload: b
});

export const bidChange = (b) => ({
  type: BID_CHANGE,
  payload: b
});
