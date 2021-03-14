import React from 'react'
import { Button } from '../button/Button';
import { EmailContainer, EmailContent, FormWrap } from './Email.styles';

function Email() {
    return (
        <EmailContainer>
            <EmailContent>
                <h1>Get Access to Exclusive Content</h1>
                <p>Sign up for our newsletter below to get 50% off 
                    for your first trip!
                </p>
                <form action="#"> 
                    <FormWrap>
                        <label htmlFor="email">
                            <input 
                                type="email" 
                                placeholder="Enter Your Email" 
                                id="email"
                            />
                        </label>
                        <Button 
                            as="button" 
                            to="" 
                            type="submit" 
                            primary="true" 
                            round="true"
                            css= {`height: 48px;
                                @media screen and (max-width: 768px) {
                                    width: 100%;
                                    min-width: 350px;
                                    margin-top: 1rem;
                                }

                                @media screen and (max-width: 400px) {
                                    width: 100%;
                                    min-width: 250px;
                                    margin-top: 1rem;
                                }
                            `}
                        >
                                Sign Up
                        </Button>
                    </FormWrap>
                </form>
            </EmailContent>
        </EmailContainer>
    )
}

export default Email
