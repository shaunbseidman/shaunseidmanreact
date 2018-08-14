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
        <h2>Fart</h2>
        <p>Test</p>
        <Link to="/about">
          <Button bsStyle="primary">Learn More</Button>
        </Link>
      </Jumbotron>
      <Row className='show-grid text-center'>
        <Col xs={12} sm={4} className='person-wrapper'>
          <Image src='assets/person-1.jpg' circle className='profile-pic' />
          <p>fart</p>
        </Col>
        <Col xs={12} sm={4} className='person-wrapper'>
          <Image src='assets/person-1.jpg' circle className='profile-pic' />
          <p>fart</p>
        </Col>
        <Col xs={12} sm={4} className='person-wrapper'>
          <Image src='assets/person-1.jpg' circle className='profile-pic' />
          <p>fart</p>
        </Col>
      </Row>
    </Grid>
    )
  }
}
