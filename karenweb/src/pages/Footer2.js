import React, { Component } from 'react'
import styled from 'styled-components';
import {ProductConsumer} from '../context/context';

export default function Footer() {
    return ( 
        <ProductConsumer> 
        { value => {
            return (
            <FooterWrapper>
                <div className="container py-3">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-capitalize">
                                copyright &copy; tech store
                                {new Date().getFullYear()}
                                2020{" "}
                            </p>
                        </div>
                        <div className="col-md-6">
                        </div>
                    </div>
                </div>
            </FooterWrapper>
            )
        }} 
       </ProductConsumer> 
   )
}

const FooterWrapper = styled.footer
`


`
