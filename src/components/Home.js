import React from 'react'
import {link} from 'react-router-dom'
import{Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap'
import './Home.css'


export default class Home extends Component{
  render(){
    return(
      <Grid>
        <Jumbotron>
          <h2>Test</h2>
          <p>this works</p>
        </Jumbotron>
      </Grid>
    )
  }
}
