import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props {
    gameQuery: GameQuery;
}
const GameHeading = ({gameQuery} : Props) => {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
  return (
    <Heading as='h1' fontSize='5xl' paddingY={5}>
        {heading.trim() || 'Games'}
    </Heading>
  )
}

export default GameHeading