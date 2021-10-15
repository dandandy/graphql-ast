import React from 'react';
import './App.css';
import { Card, Grid, TextField, Typography } from '@mui/material';
import { gql } from '@apollo/client';
import { removeLoc } from '@graphql-tools/optimize';
import ReactJson from 'react-json-view'

type State = 'valid' | 'invalid'

function App() {
  const [input, setInput] = React.useState("query {id}")
  let output: object = {}
  let state: State = 'invalid'
  try {
    output = formatInputAsAbstructSyntaxTree(input)
    state = 'valid'
  } catch (e) {
    state = 'invalid'
  }
  return (<>
    <Grid container alignItems="center" spacing={4} margin={'auto'}>
      <Grid item>
          <Typography>Get the Abstract Syntax Tree</Typography>
        <Card>
          <TextField fullWidth margin="normal" multiline={true} onChange={event => setInput(event.target.value)} value={input} >{input}</TextField>
        </Card>
        <Card>
        {state === 'valid' ? <ReactJson  collapsed={false} src={output}></ReactJson> : <Typography>Invalid input</Typography>}
        </Card>
      </Grid>
    </Grid>
  </>
  );
}

function formatInputAsAbstructSyntaxTree(node: string) {
  return removeLoc(gql(node))
}

export default App;
