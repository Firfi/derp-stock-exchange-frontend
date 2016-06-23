import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { deal as createDealAction } from '../actions/deal';
import { bid as createBidAction, bidChange as createBidChangeAction } from '../actions/bid';
import PubNub from 'pubnub';

class AppContainer extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    routerKey: PropTypes.number,
    store: PropTypes.object.isRequired
  }

  componentWillMount() {
    const { store } = this.props;
    this.pubnub = PubNub.init({
      publish_key: 'pub-c-8eb80bba-400f-4167-89d4-6a49c7516c85',
      subscribe_key: 'sub-c-c655cf06-3794-11e6-885b-02ee2ddab7fe'
    });

    this.pubnub.subscribe({
      channel: 'deals',
      message(message, envelope, channelOrGroup, time, channel) {
        const deal = JSON.parse(message);
        store.dispatch(createDealAction(deal));
      }
    });

    this.pubnub.subscribe({
      channel: 'bids',
      message(message, envelope, channelOrGroup, time, channel) {
        const bid = JSON.parse(message);
        store.dispatch(createBidAction(bid));
      }
    });

    this.pubnub.subscribe({
      channel: 'bidChanges',
      message(message, envelope, channelOrGroup, time, channel) {
        const bid = JSON.parse(message);
        store.dispatch(createBidChangeAction(bid));
      }
    });

  }

  render () {
    const { history, routes, routerKey, store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={history} children={routes} key={routerKey} />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
