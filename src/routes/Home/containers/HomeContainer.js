import { connect } from 'react-redux'

import Dashboard from 'components/Dashboard'
import Home from '../components/HomeView'


const mapActionCreators = {

};

const mapStateToProps = (state) => state.home;

export default connect(mapStateToProps, mapActionCreators)(Dashboard)
