import React from 'react'
import { GiEarthAmerica } from 'react-icons/gi'
import { MdAirplanemodeActive, MdTimer } from 'react-icons/md'
import { FaMoneyCheck } from 'react-icons/fa'

import { StatsContainer, Heading, Wrapper, StatsBox, Icon, Title, Description } from './Stats.styles'


const statsData = [
    {
      icon: (<GiEarthAmerica css={`color: #047bf1;`} />),
      title: "Over 100 Destinations",
      desc: "Travel to over 100 unique places",
    },
    {
      icon: (<MdAirplanemodeActive css={`color: #f3a82e;`} />),
      title: "1 Million Trips Made",
      desc: "Over 1 million trips completed",
    },
    {
      icon: (<MdTimer css={`color: #f34f2e;`} />),
      title: "Fastest Support",
      desc: "Access our support team 24/7",
    },
    {
      icon: (<FaMoneyCheck css={`color: #3af576;`} />),
      title: "Best Deals",
      desc: "We offer the best prices",
    },
]

function Stats() {
    return (
        <StatsContainer>
            <Heading>Why Choose Us?</Heading>
            <Wrapper>
                {
                    statsData.map((dataItem, index) => (
                        <StatsBox key={index}>
                            <Icon>{dataItem.icon}</Icon>
                            <Title>{dataItem.title}</Title>
                            <Description>{dataItem.desc}</Description>
                        </StatsBox>
                    ))
                }
            </Wrapper>
        </StatsContainer>
    )
}

export default Stats
