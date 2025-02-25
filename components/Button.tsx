import { StyleSheet, View, Pressable, Text, Linking } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

type Props = {
  label: string;
  theme?: 'primary';
  url?: string;
};

export default function Button({ label, theme, url }: Props) {
  const handlePress = () => {
    if (url) {
      Linking.openURL(url);
    } else {
      alert('You pressed a button.');
    }
  };

  if (theme === 'primary') {
    return (
      <View style={[styles.buttonContainer, { borderRadius: 18 }]}>
        <Pressable style={[styles.button, { backgroundColor: '#fff' }]} onPress={handlePress}>
          <SimpleLineIcons name="login" size={18} color="black" style={[styles.icon, { borderRadius: 18 }]} />
          <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  }
});
