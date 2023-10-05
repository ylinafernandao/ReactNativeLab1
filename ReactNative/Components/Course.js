import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const course = () => {

    return (
        <View style={styles.container}>
            <Text>Estos son los estudiantes del curso</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
        alignItems: 'center',
        justifyContent: 'center',
      },
});