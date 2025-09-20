import { Stack } from "expo-router";
import { CounterProvider } from "./state/CounterProvider";

export default function RootLayout() {
  return (
    <CounterProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Page 1' }} />
        <Stack.Screen name="page2" options={{ title: 'Page2 ' }} />
      </Stack>
    </CounterProvider>
  );
}
