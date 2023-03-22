import React from 'react'
import styled from "styled-components"
import Backgroundimage from '../components/Backgroundimage'
import Header from '../components/Header'
export default function Signup() {
  return (
    <Container>
        <Backgroundimage />
    <Header />
<div className="body flex column a-center j-center">
    <div className='text flex column'>
        <h1>Unlimited movies, Tv shows and more</h1>
        <h4>Watch anywhere. Cancel anytime.</h4>
    <h6>Ready to watch? Enter your email to create or restart your membership</h6>
    </div>
    <div className="form">
        <input type="email" placeholder="Email Adress" name="email"/>
        <input type="password" placeholder= "password" name="password"/>
        <button>Get Started</button>
    </div>
    <button>Log In</button>
</div>
    </Container>
  )
}
const Container = styled.div``;