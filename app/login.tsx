import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // Basic logic to route based on user ID (email)
    if (email && password) {
      if (email.toLowerCase().includes('admin')) {
        // Redirect to admin dashboard
        router.push('/admin');
      } else {
        // Redirect to profile selection (platforms)
        router.push('/profiles');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' }} 
        style={styles.logo} 
        resizeMode="contain"
      />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.formContainer}
      >
        <Text style={styles.title}>Sign In</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Email or phone number"
          placeholderTextColor="#8c8c8c"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#8c8c8c"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        
        <View style={styles.footer}>
          <Text style={styles.newText}>New to the app? </Text>
          <TouchableOpacity>
            <Text style={styles.signupText}>Sign up now.</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 50,
    position: 'absolute',
    top: 50,
    left: 20,
  },
  formContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 8,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#333',
    height: 60,
    borderRadius: 5,
    paddingHorizontal: 20,
    color: 'white',
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#e50914',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  newText: {
    color: '#8c8c8c',
    fontSize: 16,
  },
  signupText: {
    color: 'white',
    fontSize: 16,
  },
});
