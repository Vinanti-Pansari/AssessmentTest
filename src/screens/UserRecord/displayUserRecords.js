import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Styles from './styles';


const displayUserRecords=(props) =>{
    const {
        recordData,
        displayUserDetails
    } = this.props;
    return(
        <TouchableOpacity
         style={Styles.recordView}
         onPress={() => displayUserDetails(recordData)}
        >

        </TouchableOpacity>
    )
};

displayUserRecords.propType = {
    recordData: PropTypes.obj,
    displayUserDetails: PropTypes.func.isRequired
};

export default displayUserRecords;