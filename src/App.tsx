import { Box, Grid, GridItem, Show, Switch } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";

function App() {

  return (
   <>
    <Grid templateAreas={
      {
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }
    }>
      <GridItem area="nav" bg="gray.900" p={4}>
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
