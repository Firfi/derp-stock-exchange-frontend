import React from 'react'
import classes from './Dashboard.scss'

const DealsTable = (ds) => (
  <div className="deals">
    <table className="table">
      <thead>
        <tr>
          <th className={classes['table-th']}>Price</th>
          <th className={classes['table-th']}>Qty</th>
        </tr>
      </thead>
      <tbody>
      {ds.map((d, i) => <tr key={i}>
        <td className={classes['table-td']}>{d.price}</td>
        <td className={classes['table-td']}>{d.qty}</td>
      </tr>)}
      </tbody>
    </table>
  </div>
)

const BidsTable = (bs, kind, highlightBids) => {
  return <div className="bids">
    <table className="table">
      <thead>
      <tr>
        <th className={classes['table-th']}>{kind === 'sell' ? 'Qty' : 'Buy'}</th>
        <th className={classes['table-th']}>{kind === 'sell' ? 'Sell' : 'Qty'}</th>
      </tr>
      </thead>
      <tbody>
      {bs.map(b => {
        const highlighted = (e) => <div className={highlightBids[b.id] ? classes.highlighted : ''}>{e}</div>;
        return <tr key={b.id}>
          <td className={classes['table-td']}>{kind === 'sell' ? highlighted(b.bid.qty) : b.bid.price}</td>
          <td className={classes['table-td']}>{kind === 'sell' ? b.bid.price : highlighted(b.bid.qty)}</td>
        </tr>
      })}
      </tbody>
    </table>
  </div>
}

export class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      highlightBids: {

      }
    }
  }
  componentWillReceiveProps(newProps) {
    const {props} = this;
    if (props.lastChangedBid !== newProps.lastChangedBid) {
      this.setState({
        highlightBids: Object.assign(this.state.highlightBids, {
          [newProps.lastChangedBid.id]: true
        })
      });
      setTimeout(_ => {
        delete this.state.highlightBids[newProps.lastChangedBid.id];
        this.setState({
          highlightBids: this.state.highlightBids
        })
      }, 2000)
    }
  }
  render() {
    const {props} = this;
    return <div>
      <div className="col-sm-12 col-md-12">
        <h3>price: {((props.lastDeals || [])[0] || {}).price || 'loading'}</h3>
      </div>
      <div className="col-sm-12 col-md-12">
        <h3>Last bids</h3>
        <div className="col-sm-6 col-md-6">
          {BidsTable(props.lastBids.sell, 'sell', this.state.highlightBids)}
        </div>
        <div className="col-sm-6 col-md-6">
          {BidsTable(props.lastBids.buy, 'buy', this.state.highlightBids)}
        </div>
      </div>
      <div className="col-sm-12 col-md-12">
        <h3>Last deals</h3>
        {DealsTable(props.lastDeals)}
      </div>
    </div>;
  }
}

Dashboard.propTypes = {
  lastDeals: React.PropTypes.array.isRequired,
  lastBids: React.PropTypes.object.isRequired,
  lastChangedBid: React.PropTypes.object
}

export default Dashboard
