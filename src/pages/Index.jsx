import { useState } from "react";
import { Container, VStack, Text, Input, Button, Box } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const Index = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSolve = () => {
    // Simulate solving the question
    setAnswer(`This is a simulated answer for: "${question}"`);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box display="flex" alignItems="center" justifyContent="center">
          <Text fontSize="3xl" fontWeight="bold" mr={2}>
            Homework Solver
          </Text>
          <FaRobot size="24px" />
        </Box>
        <Text fontSize="md">Ask me any homework question!</Text>
        <Input placeholder="Type your question here..." value={question} onChange={(e) => setQuestion(e.target.value)} size="lg" />
        <Button colorScheme="blue" onClick={handleSolve} leftIcon={<FaRobot />}>
          Solve
        </Button>
        {answer && (
          <Box mt={4} p={4} borderWidth="1px" borderRadius="lg">
            <Text fontWeight="bold">Answer:</Text>
            <Text>{answer}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
