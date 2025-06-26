import { Badge, Box, Text } from "@chakra-ui/react";

interface Props {
    rating: number;
}


const MetaCritic = ({ rating } : Props) => {
  return (
    <>
    <Badge colorScheme={rating > 75 ? 'green' : rating > 60 ? 'yellow' : 'red'} fontSize="0.8em" borderRadius="md" p={1} ml={2}>
        {rating}
    </Badge>
    </>
  )
}

export default MetaCritic;