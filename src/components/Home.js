import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {
  Jumbotron,
  Grid,
  Row,
  Col,
  Image,
  Button
} from 'react-bootstrap'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <Grid>
      <Jumbotron>
        <h2>This WORKS</h2>
        <p>Test</p>
        <Link to="/about">
          <Button bsStyle="primary">Learn More</Button>
        </Link>
      </Jumbotron>
    </Grid>
    )
  }
}
