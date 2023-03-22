import { Data } from "@/types";
import { Box } from "@chakra-ui/react";

type Props = {
  sendResult: (data: Data) => void;
};

const Form = ({ sendResult }: Props) => {
  return (
    <Box bgColor="blue.100" p="16px">
      Form aquí
    </Box>
  );
};

export default Form;
