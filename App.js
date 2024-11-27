import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TestScreen } from './src/screens/Test';

export default () => {
  return (
    <SafeAreaProvider>
      <TestScreen />
    </SafeAreaProvider>
  )
}