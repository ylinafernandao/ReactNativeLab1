import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Course from './Components/Course';

export default function App() {
  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.title}>CURSOS</Text>

        <View style={styles.courseStyle}>
          {/* aqui se debe hacer un for para los nombres de los cursos */}
          <Course text={'Curso 1'}/>
          <Course text={'Curso 2'}/>
          <Course text={'Curso 3'}/>
          <Course text={'Curso 4'}/>
          <Course text={'Curso 5'}/>
          <Course text={'Curso 6'}/>
          <Course text={'Curso 7'}/>
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
