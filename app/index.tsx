import Login from '@/components/Login';
import React from 'react';
import { SafeAreaView } from 'react-native';

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Login />
    </SafeAreaView>
  );
}
