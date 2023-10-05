import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-web';

const Course = (props) => {

    return (
        <View style={styles.courseStyle}>
            <TouchableOpacity style={styles.itemSpace}></TouchableOpacity>
            <Text style={styles.courseName}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    courseStyle:{

    },
    
    itemSpace:{

    },

    courseName:{

    },
});

export default Course;