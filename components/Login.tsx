import React from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import tw from 'twrnc';

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data.email)
  };

  return (
    <View style={tw`flex-1 justify-center items-center px-5`}>
      <Text style={tw`text-2xl font-bold mb-6`}>Login</Text>
      <Controller
        control={control}
        rules={{
            required: 'Email is required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
            style={tw`w-full h-12 border border-gray-300 rounded px-4 mb-2`}
            placeholder="Email"
            placeholderTextColor="#888"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value ?? ''} // 👈 Ensures it's always a string
            keyboardType="email-address"
            />
        )}
        name="email"
      />
      {errors.email && <Text style={tw`text-red-500 self-start`}>{errors.email.message}</Text>}

      {/* Password Field */}
      <Controller
        control={control}
        rules={{
            required: 'Password is required',
            minLength: { value: 6, message: 'Password must be at least 6 characters' },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
            style={tw`w-full h-12 border border-gray-300 rounded px-4 mb-2`}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value ?? ''} // 👈 Ensures it's always a string
            />
        )}
        name="password"
      />
      {errors.password && <Text style={tw`text-red-500 self-start`}>{errors.password.message}</Text>}

      {/* Login Button */}
      <Pressable style={tw`mt-5 bg-blue-500 py-3 px-6 rounded`} onPress={handleSubmit(onSubmit)}>
        <Text style={tw`text-white text-lg`}>Login</Text>
      </Pressable>
    </View>
  );
};

export default Login;
