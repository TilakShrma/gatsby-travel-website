import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FaRegLightbulb } from 'react-icons/fa'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

import { TestimonialsContainer, TopLine, Testimonial, Description, ContentWrapper, ColumnOne, ColumnTwo, Image} from './Testimonials.styles'

const Testimonials = () => {

    const data = useStaticQuery(graphql`
        query MyQuery {
            allFile(
            filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
                name: {in: ["testimonial-1", "testimonial-2"]}}
            ) {
            edges {
                node {
                childImageSharp {
                    gatsbyImageData
                }
                }
            }
            }
        }    
    `)

    return (
        <TestimonialsContainer>
            <TopLine>
                Testimonials
            </TopLine>
            <Description>
                What People are Saying
            </Description>
            <ContentWrapper>
                <ColumnOne>
                    <Testimonial>
                        <IoMdCheckmarkCircleOutline css={`color: #f9b19b; font-size: 2rem; margin-bottom: 1rem;`}/>
                        <h3>Sean Micheal</h3>
                        <p>"The greatest experience of my life! It was so much fun exploring 
                            the mountains and they made it super easy to book my trip and accomodation."</p>
                    </Testimonial>
                    <Testimonial>
                        <FaRegLightbulb css={`color: #3fffa8; font-size: 2rem; margin-bottom: 1rem;`}/>
                        <h3>Sarah Taylor</h3>
                        <p>"The greatest experience of my life! It was so much fun exploring 
                            the mountains and they made it super easy to book my trip and accomodation."</p>
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                    {
                        data && data.allFile.edges.map((item, index) => (
                            <Image image={item.node.childImageSharp.gatsbyImageData} alt="testimonial" key={index} />
                        ))
                    }
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
    )
}

export default Testimonials
