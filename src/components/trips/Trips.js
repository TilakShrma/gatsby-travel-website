import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ImLocation } from 'react-icons/im'
import { ProductsContainer, 
        ProductsHeading, 
        ProductWrapper, 
        ProductCard, 
        TextWrap, 
        ProductTitle, 
        ProductInfo,
        ProductImg } from './Trips.styles'
import { Button } from '../button/Button'


const Trips = ({ heading }) => {

    const data = useStaticQuery(graphql`
        query TripsQuery {
            allTripsJson {
            edges {
                node {
                    alt
                    button
                    name
                    img {
                        childrenImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
            }
        } 
    `)
    
    return (
       <ProductsContainer>
           <ProductsHeading>{ heading }</ProductsHeading>
           <ProductWrapper> 
               {    
                    data && data.allTripsJson.edges.map((item, index) => (
                        <ProductCard key={index}>
                            <ProductImg 
                                image={item.node.img.childrenImageSharp[0].gatsbyImageData} 
                                alt={item.node.alt} 
                                
                            />
                            <ProductInfo>
                                <TextWrap>
                                    <ImLocation />
                                    <ProductTitle>{item.node.name || ''}</ProductTitle>
                                </TextWrap>
                                <Button to="/trips"
                                 primary="true" 
                                 round="true" 
                                 css={`position: absolute; top: 420px; font-size: 14px;`}>
                                    {item.node.button}
                                 </Button>
                            </ProductInfo>
                        </ProductCard>
                    ))
               } 
            </ProductWrapper>
       </ProductsContainer>
    )
}

export default Trips
