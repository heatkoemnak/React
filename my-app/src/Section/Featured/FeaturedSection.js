import React from 'react'
import {FaShopify, FaTag,FaRecycle } from "react-icons/fa6";
import { RxDoubleArrowDown } from "react-icons/rx";
import {Title} from '../About/AboutSection'

import './featured.css';
export default function FeaturedSection() {

  return (
    <>
        <div className='Wrapper'>
            <Title>
                <h2>Our Features</h2>
                <RxDoubleArrowDown size='2rem' className='ArrowDownIcon'/>
            </Title>
            <img src='https://www.danofficeit.com/media/3330/topbanner.png' alt=''/>
            <div className='features'>
                <div className='feature'>
                    <img src="https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={265} height={160}/>
                    <FaTag/>
                    <h2>SELL</h2>
                </div>
                <div className='feature'>
                    <img src="https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={260} height={160} />
                    <FaShopify/>
                    <h2>BUY</h2>
                </div>
                <div className='feature'>
                    <img src="https://images.pexels.com/photos/3850587/pexels-photo-3850587.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={260} height={160}/>
                    <FaRecycle/>
                    <h2>RECYCLE</h2>
                </div>
            </div>
        </div>
    </>
  )
}
