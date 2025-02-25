import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Button from '@/components/Button';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Have an account?</Text>
      <Button theme="primary" label="Login" url="/login" />
      <Text style={[{ color: '#fff' }]}>Or</Text>
      <Link href="/about" style={styles.button}>Create an account</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
