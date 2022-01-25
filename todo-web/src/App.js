import Task from "./component/Task";
import { Center, Box, CheckboxGroup, Text } from "@chakra-ui/react";

const App = () => {
  return (
    // <>
    //   <h1>タスク一覧</h1>
    //   <Task name="買い物" />
    //   <Task name="ランニング" />
    //   <Task name="プログラミングの勉強" />
    //   <Task name="ささささｓ"/>
    // </>
    <Box mt="64px">
      <Center>
        <Box>
        <Box mb="24px">
            <Text fontSize="24px" fontWeight="bold">
              タスク一覧
            </Text>
          </Box>
          <CheckboxGroup>
            <Task name="買い物" />
            <Task name="ランニング" />
            <Task name="プログラミングの勉強" />
          </CheckboxGroup>
        </Box>
      </Center>
    </Box>

  );
}

export default App;