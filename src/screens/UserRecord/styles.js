import { StyleSheet, Dimensions } from 'react-native';

const screenWidth =  Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    recordView:{
        width: screenWidth * 0.9,
        alignSelf: 'center',
    }
});
export default styles;