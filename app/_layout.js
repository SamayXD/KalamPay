import { Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

    <SafeAreaView style={{ flex: 1 }}>
        <Stack
      screenOptions={{
        animation: 'slide_from_right',
         headerShown: false 
    }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="screens/Home"  />
    </Stack>
    </SafeAreaView>
    </GestureHandlerRootView>
    
  );
}