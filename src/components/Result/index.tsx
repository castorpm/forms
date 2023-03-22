import { Data } from "@/types";
import { Box } from "@chakra-ui/react";

type Props = {
  result: Data;
};

const Result = ({ result }: Props) => {
  return (
    <Box bgColor="green.100" p="16px">
      Resultado aquí
    </Box>
  );
};

export default Result;
