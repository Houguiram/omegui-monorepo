import { useState } from "react";
import { Button, Card, H1, Text, YStack } from "tamagui";

function App() {
  const [count, setCount] = useState(0);

  return (
    <YStack flex={1} backgroundColor="$background" p="$5" alignItems="center">
      <H1>Vite + React</H1>
      <Card mt="$5" p="$5">
        <Button onPress={() => setCount((count) => count + 1)}>
          {"Count is " + count}
        </Button>
        <Text mt="$5">
          Edit <code>src/App.tsx</code> and save to test HMR
        </Text>
      </Card>
    </YStack>
  );
}

export default App;
