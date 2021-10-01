import React from 'react';
import './App.css';
import { Card, Grid, TextField, Typography } from '@mui/material';
import { gql } from '@apollo/client';
import { removeLoc } from '@graphql-tools/optimize';


function App() {
  return (<>
    <Grid container alignItems="center" spacing={2} margin={'auto'}>
      <Grid item>
        <Card>
          <GraphComonent value='schema'></GraphComonent>
        </Card>
      </Grid>
      <Grid item>
        <Card>
          <GraphComonent value='query'></GraphComonent>
        </Card>
      </Grid>
    </Grid>
  </>
  );
}

const GraphComonent = ({ value }: { value: string }) => {
  const [input, setInput] = React.useState("")
  let output: string
  try {
    output = JSON.stringify(removeLoc(gql(input)), null, 2)
  } catch (e) {
    output = "invalid query"
  }
  return <><Typography >{value}</Typography>
    <TextField multiline={true} onChange={event => setInput(event.target.value)} >{input}</TextField>
    <Typography><pre >{output}</pre></Typography></>
}

export default App;
