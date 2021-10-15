import React from 'react';
import './App.css';
import { Card, Grid, TextField, Typography } from '@mui/material';
import { gql } from '@apollo/client';
import { removeLoc } from '@graphql-tools/optimize';
import ReactJson from 'react-json-view'

type State = 'valid' | 'invalid'

function App() {
  const [input, setInput] = React.useState("query {id}")
  const [hover, setHover] = React.useState("")
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

function formatInputAsAbstructSyntaxTreeWithHighlightingHover(node: object, hover: string): string {
  if (isArray(node)) {
    return '[' + node.map(value => valueIsAnObject(value) ? formatInputAsAbstructSyntaxTreeWithHighlightingHover(value, hover) : `${value}`).join(',\n') + ']'
  }
  const entries = Object.entries(node)
  const matchingEntries = entries.filter(([, value]) => valueContainsTarget(value, hover))
    .map(([key, value]) => `!!${key}: ${value}`)
  const notMatchingEntries = entries.filter(([, value]) => !valueContainsTarget(value, hover))
    .map(([key, value]) => `${key}: ${valueIsAnObject(value) ? formatInputAsAbstructSyntaxTreeWithHighlightingHover(value, hover) : `${value}`}`)

  return '{\n' + matchingEntries.concat(notMatchingEntries).join(',\n') + '}'
}

function isArray(node: object): node is Array<object> {
  const str = JSON.stringify(node)
  return str[0] === '[' && str[str.length - 1] === ']'
}

function valueIsAnObject(value: any): value is object {
  return typeof value === 'object'
}

function valueContainsTarget(value: any, target: string): boolean {
  if (typeof value === 'string') {
    return value === target
  }
  return false
}

function formatInputAsAbstructSyntaxTree(node: string) {
  return removeLoc(gql(node))
}

function handleTab(e: any, setInput: any, input: any): any {
  if (e.key === 'Tab' && !e.shiftKey) {
    const target = e.target as HTMLInputElement;
    e.preventDefault();
    setInput(target?.selectionStart === undefined || target.selectionStart === null ? input + '\t' : input.slice(0,target.selectionStart) + '\t' +  input.slice(target.selectionStart))}
    else {
      return e
    }
}

export default App;
