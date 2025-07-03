import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import ColorModeSwitch from "./Components/ColorModeSwitch";
import './index.css'
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";

function App() {

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
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main" p={4}>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
   </>
  )
}

export default App
