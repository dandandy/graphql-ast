import React from 'react';
import './App.css';
import { Card, Grid, TextField, Typography } from '@mui/material';
import { gql, DocumentNode } from '@apollo/client';
import { removeLoc } from '@graphql-tools/optimize';
import { ASTNode, visit } from 'graphql';


function App() {
  const [input, setInput] = React.useState("")
  const [hover, setHover] = React.useState("")
  let output: string
  let obj: {}
  try {
    output = formatInputAsAbstructSyntaxTree(input)
    obj = JSON.parse(output)
  } catch (e) {
    output = "invalid input"
    obj = {}
  }
  return (<>
    <Grid container alignItems="center" spacing={2} margin={'auto'}>
      <Grid item>
        <Card>
          <Typography>Get the Abstract Syntax Tree</Typography>
          <TextField multiline={true} onChange={event => setInput(event.target.value)} >{input}</TextField>
            <pre ><Typography >{output}</Typography></pre>
          {process.env.NODE_ENV !== "production" && <><Typography>{input.split(' ').map(t => <><span /*display="inline"*/ onMouseLeave={() => setHover("")} onMouseOver={() => { console.log(t.replaceAll(/[{}:+-]/ig, "")); setHover(t.replaceAll(/[{}:+-]/ig, "")) }} >{t}</span><span /*display="inline"*/> </span></>)}</Typography>
            <span>FORMAT AST {formatInputAsAbstructSyntaxTreeWithHighlightingHover(obj, hover)}</span></>
          }
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

function formatInputAsAbstructSyntaxTree(node: string): string {
  return JSON.stringify(removeLoc(gql(node)), null, 2)
}

export default App;
