import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

const App: React.FC = () => (
  <SafeAreaView>
    <StatusBar barStyle="light-content" />
    <ScrollView contentInsetAdjustmentBehavior="automatic" />
  </SafeAreaView>
);

export default App;
