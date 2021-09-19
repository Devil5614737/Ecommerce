import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import {Headers,Section,Heading,SubHeading,Buttons,Button} from '../styles/Home'
import { gsap } from "gsap";

function Home() {
    const animateHeading=useRef()
    const animatePara=useRef()
    

    useEffect(() => {
        gsap.from(animateHeading.current, { opacity:'0',transform:'translateY(50px)'});
        gsap.to(animateHeading.current,{opacity:'1',transition:'all .5s ease'})
        gsap.from(animatePara.current, { opacity:'0'});
        gsap.to(animatePara.current,{opacity:'1',transition:'all .5s ease'})
      });

    return (
        <Headers>
            <Navbar/>
            <Section >
                <Heading ref={animateHeading}>Discover your shoe curiosity</Heading>
                <SubHeading ref={animatePara}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore etem utur. Quis aute iure reprehenderit in voluptate</SubHeading>
                <Buttons>
                    <Button>Buy now</Button>
                    <Button white>Contact us</Button>
                </Buttons>
            </Section>
        </Headers>
    )
}

export default Home
