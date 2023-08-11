import React from 'react'
import { styled } from "styled-components";
import landGreen from "../../asset/land-green.jpg"
import {IconContext} from 'react-icons';

import './home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import FeaturedSection from '../Featured/FeaturedSection';

const MainContainer=styled.div`
    width:100%;
    height:100vh;
    align-items:center;
    background-color: #197a12;
    background-image: linear-gradient(45deg, #197a12 0%, #5ed015 100%);
    justify-content:center;
    z-index:-5;

`
const Section = styled.div`
    width:100%;
    height:100%;
    background-color:red;
`

const SearchANDTitle=styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color: #fff;

`

const Title = styled.div`
    position:absolute;
    top: 20%; 
    left: 50%;
    font-size:2rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 1rem;
    color: #fff;
    margin-bottom:100px;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    font-family: 'Nunito Sans', sans-serif;

`
const Image = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    `

const Search = styled.div`
    position:absolute;
    top: 40%;
    left: 25%;
    transform: translate(-50%, -50%);
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 10px 20px;
    border-radius: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    `
    const Input = styled.input`
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: 500;
    margin-left: 10px;
    font-family: 'Nunito Sans', sans-serif;
    width:100%;
    `
    const Button = styled.button`
    display;flex;
    align-items:center;
    justify-content:space-between;
    border: none;
    outline: none;
    background-color: #23151d;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    &:hover {
        background-color: #111;
        color: green;
    }
    `



export default function HomeSection() {
  
  return (
    <>
    <MainContainer>
        <IconContext.Provider value={{ size:'3rem', color:'#7cd553'}}>
            <Image>
                <img src={landGreen} alt="" height={500} width={1519}/>
            </Image>
            <Section>
                <SearchANDTitle>
                    <Search>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        <Input type="text" placeholder="Search for a material (plastic, bottle,etc.)" />
                        <Button >Search</Button>
                    </Search>
                    <Title>
                        <h1>Join With Us</h1>
                        <h2>To Protect Our Environment</h2>
                        <Button>Get Start For Free</Button>
                    </Title>
                    
                </SearchANDTitle>
            </Section>
    </IconContext.Provider>
    </MainContainer>
    <FeaturedSection/>
    
    </>
  )
}
