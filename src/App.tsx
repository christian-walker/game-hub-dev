import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import ColorModeSwitch from "./Components/ColorModeSwitch";
import './index.css'
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformFilter from "./Components/PlatformFilter";
import { Platform } from "./hooks/usePlatforms";
import { Game } from "./hooks/useGames";
import SortSelector from "./Components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
   <>
    <Grid templateAreas={
      {
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}>
      <GridItem area="nav" p={4}>
          <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" p={5}>
          <GenreList selectedGenre={gameQuery.genre} setSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main" p={4}>
        <HStack spacing={4} marginBottom={4}>
          <PlatformFilter selectedPlatform={gameQuery.platform} setSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} />
          <SortSelector sortSelected={gameQuery.sortOrder} setSortSelected={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
        </HStack>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
   </>
  )
}

export default App
