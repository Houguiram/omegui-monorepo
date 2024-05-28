import { Button } from "omegui-main";
import { Card, H1, Text, YStack } from "tamagui";

function App() {
  return (
    <YStack
      flex={1}
      backgroundColor="$background"
      padding="$5"
      alignItems="center"
    >
      <H1>Vite + React</H1>
      <Card bordered marginTop="$5" padding="$5" gap="$5">
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="neutral">Neutral</Button>
        <Button variant="info">Info</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="error">Error</Button>
        <Text>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Text>
      </Card>
    </YStack>
  );
}

export default App;
