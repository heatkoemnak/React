import React from 'react'

import { styled } from "styled-components";
import sodana from "../../asset/sodana.jpg";
import sopheak from "../../asset/sopheak.jpg";
import soumany from "../../asset/soumany.jpg";
import chhaylin from "../../asset/chhaylin.jpg";
import koemnak from "../../asset/koemnak.jpg";
import { RxDoubleArrowDown } from "react-icons/rx";

import './about.css';


const Section = styled.div`
    height: 100vh;
    display:flex;
    flex-direction:column;
    scroll-snap-type: y mandatory;

    scroll-behavior: smooth;

    overflow-y: auto;

    scrollbar-width: none;

    background-color:#220925;

    &::-webkit-scrollbar {

        display: none;

    }
`
const Teams = styled.div`
    width:100%;
    border-top:2px solid #dbdee6;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: #f5f9f9;
    color: #fff;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div{
        align-items: center;
        justify-content: center;
        padding: 10px;
        h2{
            font-size: 1.2rem;
        }
        p{
            font-size: 1rem;
        }
    }
    @media screen and(max-width :768px){
        h1{
            font-size: 2rem;
        }
        div{
            h2{
                font-size: 1.5rem;
            }
            p{
                font-size: 1rem;
            }
        }
    }
    @media only screen
    and (min-device-width: 768px)
    and (max-device-width: 1024px)
    and (-webkit-min-device-pixel-ratio: 1) {
        h1{
            font-size: 2rem;
        }
        div{
            h2{
                font-size: 1.5rem;
            }
            p{
                font-size: 1rem;
            }
        }
    }
    @media screen and (max-width: 480px) {
        h1{
            font-size: 2rem;  
            }
        div{
            h2{
                font-size: 1.5rem;
                }
            p{
                font-size: 1rem;
                padding:3% ;
                }
          }

   
`
const Team = styled.div`

    display:flex;
    flex-wrap:wrap;
    align-items:center;
    background-color:#574a68;
   
`
const Title = styled.div`
    height:100px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    color: gray;


`
const H2 = styled.div`
font-size:1.5rem;
    font-weight: 500;
    height:50px;
    text-align: center;
    font-family: 'Nunito Sans', sans-serif;
`

const Profile = styled.div`
    display:flex;
    background-color:#f6f5f9;
    margin:10px;
    padding:30px ;
    // box-shadow:-4px -8px #e7dcdc,
    // 8px  16px#cacece,-4px   16px#b
    // ,8px     24px#aaddad,-4px      24px#
    // bbbbbb,-4px       32px#99cccc,-4px        3
    // cccc,-4px          40px#88bbbb,-4px           40
    // px#77aaaa,-4px         48px#6699aa,-
    // 4px            56px#558899,-4px             56
    // px#447788,-4px        64px#336
    // 99,#225577,-4px               72px#11
    // 88;#fff;


    h2{
        text-align:left;
    
    }
    
    



   
`

export default function AboutSection() {
  return (
    <Section>
      <Teams>
        <Title>
            <H2>Our Team</H2>
            <RxDoubleArrowDown size='3rem'color='#7cd553'/>
        </Title>
        <Team>
            <Profile>
                <div className='image'>
                    <img src={sopheak} alt=''width={189}/>
                </div>
                <div>
                    <h2>Saing Sopheak</h2>
                    <p>Role</p>
                    <p>Team Leader, Backend & Server Side</p>
                    <a href="https://github.com/saingsopheak" target="blank">Github Profile</a>
                    <button>To Know More</button>
                </div>
                
              
            </Profile>
         
            <Profile>
              <img src={koemnak} alt=''width={200}/>
              <h2>HeatKoemnak</h2>
              <p>Team 2</p>
            </Profile>
          
         
            <Profile>
              <img src={soumany} alt=''width={200}/>
              <h2>Sou Many</h2>
              <p>Team 3</p>
            </Profile>
          
         
          <Profile>
              <img src={sodana} alt=''width={200}/>
              <h2>Som Sodana</h2>
              <p>Team 4</p>
          </Profile>

          
         
            <Profile>
              <img src={chhaylin} alt=''width={200}/>
              <h2>Srun ChhayLin</h2>
              <p>Team 5</p>
            </Profile>
          
        </Team>
       
      </Teams>
      </Section>
  )
}
