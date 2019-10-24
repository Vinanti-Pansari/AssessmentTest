import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import Styles from './styles';
import { fetchUserRecords } from '../../modules/fetchUserRecoeds';
import DisplayUserRecords from './displayUserRecords';
import { navigateToScreen } from '../../utility/handleNavigation';


class UserRecordScreen extends Component {
    componentDidMount(){
        this.getUserRecords();
    }

    /**
     * Method to integrate the API call for getting the list of the user records.
     */
    getUserRecords = () =>{
      const { navigation: { dispatch } } = this.props;
        dispatch(fetchUserRecords())
    };

    /**
     * Method to handle the navigation to view user details.
     * @param data
     */
    displayUserDetails = (data) => {
        navigateToScreen('UserDetailsScreen', data)
    };

    render() {
        const { fetchUserRecords } = this.props;
        return (
            <View style={Styles.container}>
                <FlatList
                    data={fetchUserRecords}
                    renderItem={(recordData) => {
                        return(
                            <DisplayUserRecords
                                data={ recordData }
                                displayUserDetails={(data) => this.displayUserDetails(data)}
                            />
                        )
                    }}
                />
            </View>
        )
    }

}

UserRecordScreen.PropTypes = {
    //Props Validation
    dispatch: PropTypes.obj
};

const mapStateToProps = state => {
    userRecords: state.fetchUserRecords.userRecords
};

export default connect(mapStateToProps)(UserRecordScreen);