import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Course from './Components/Course';

export default function App() {
  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.title}>CURSOS</Text>

        <View style={styles.courseStyle}>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#111111',
    borderRadius: 5,
    backgroundColor: '#318C8C',
    fontWeight: 'bold',
    color: '#111111',
    fontSize: 30,
    textAlign: 'center',
  },

  courseStyle: {
     
  },
});
