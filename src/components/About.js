import React, {Component} from 'react'
import {Grid, Col, Image} from 'react-bootstrap'
import './About.css'

export default class About extends Component {
  render(){
    return(
      <div>
        About
        <Image src='assets/poop2.jpg' className='header-image' />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/person-1.jpg" className="about-profile-pic" rounded />
            <h3>this works</h3>
            <p>fjadksfsdl</p>
            <p>test</p>
            <p>ladjfkldsaflkasdjfklsdjflkjdkfdsfkdjlasdk;</p>
          </Col>
        </Grid>
      </div>
    )
  }
}
