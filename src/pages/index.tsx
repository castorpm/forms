import Form from "@/components/Form";
import Result from "@/components/Result";
import { Data } from "@/types";
import { Container, Grid } from "@chakra-ui/react";
import { useState } from "react";

const Home = () => {
  const [result, setResult] = useState<Data | undefined>();

  const sendResult = (data: Data) => {
    setResult(data);
  };

  return (
    <Container maxW="80%" mt="60px">
      <Grid gridTemplateColumns="1fr 1fr" gap="16px">
        <Form sendResult={sendResult} />
        <Result result={result} />
      </Grid>
    </Container>
  );
};

export default Home;
