import React from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroItems, HeroH1, HeroP } from './Hero.styles'
import { Button } from '../button/Button'
import Video from '../../assets/videos/hero_bg.mp4';

const Hero = () => {
    return (
        <HeroContainer>
          <HeroBg>
            <VideoBg src={Video} type="video/mp4" autoPlay loop muted/>
          </HeroBg>
          <HeroContent>
            <HeroItems>
              <HeroH1>
                Unreal Destinations
              </HeroH1>
              <HeroP>
                Out of this world
              </HeroP>
              <Button primary="true" big="true" round="true" to="trips"> Travel Now </Button>
            </HeroItems>
          </HeroContent>
        </HeroContainer>
    )
}

export default Hero
