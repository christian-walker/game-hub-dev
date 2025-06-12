import { Box, Grid, GridItem, Show, Switch } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import theme from "./theme";
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
