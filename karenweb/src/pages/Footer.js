import React, { Component } from 'react'
import styled from 'styled-components';
import {FaLinkedin} from 'react-icons/fa';
// import {ProductConsumer} from '../context/context';

export default class Footer extends Component {
    state = {
        socialLinks: [
            {
                id: 1,
                icon: <FaLinkedin className="icon" />,
                url: 'www.bbc.co.uk' 
            }
        ]
    }

    render() {
        return (
            <FooterWrapper>
                <section>
                    <div className="container">
                        <div className="row footerSect">
                            {this.state.socialLinks.map(item =>{
                                return (
                                    <div className="container py-3 d-flex" key={item.id}>
                                        <div className="p-2">
                                            <p>May 2020</p>
                                        </div>
                                        <div className="ml-auto p-2">
                                                <a href={item.url} >
                                                    {item.icon}
                                                </a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </FooterWrapper>
        )
    }
}

const FooterWrapper = styled.footer
`
.footerSect {
    background: var(--FooterBlue);
    min-height: 10vh;
    color: #fff;
    
}

`
