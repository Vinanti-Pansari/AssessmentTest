import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Root} from './Root';

export let navigationDispatchService;

class AppNavigator extends Component {

    componentDidMount(){
        const { dispatch } = this.props;
        navigationDispatchService = dispatch;
    }

    render() {
        return (
            <Root/>
        )
    }
}

AppNavigator.PropTypes = {
    //Props Validation
};

const mapStateToProps = state => {
    nav: state.nav

};

export default connect(mapStateToProps)(AppNavigator);