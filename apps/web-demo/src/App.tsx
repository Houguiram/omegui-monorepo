import { Button } from "omegui-main";
import { useState } from "react";
import { Card, H1, Text, YStack } from "tamagui";

function App() {
  const [count, setCount] = useState(0);

  return (
    <YStack
      flex={1}
      backgroundColor="$background"
      padding="$5"
      alignItems="center"
    >
      <H1>Vite + React</H1>
      <Card backgroundColor="$background2" marginTop="$5" padding="$5">
        <Button
          variant="primary"
          animation="quickest"
          onPress={() => setCount((count) => count + 1)}
        >
          {"Count is " + count}
        </Button>
        <Text marginTop="$5">
          Edit <code>src/App.tsx</code> and save to test HMR
        </Text>
      </Card>
    </YStack>
  );
}

export default App;
