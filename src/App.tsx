import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import ColorModeSwitch from "./Components/ColorModeSwitch";
import './index.css'

function App() {

  return (
   <>
    <Grid templateAreas={
      {
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }
    }>
      <GridItem area="nav" p={4}>
          <NavBar></NavBar>
          <ColorModeSwitch></ColorModeSwitch>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">Aside</GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">Main</GridItem>
    </Grid>
   </>
  )
}

export default App
