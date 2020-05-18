import React, { Component } from 'react'
import styled from "styled-components";
import '../components/components.css';
// import five_dots from '../images/five_dots.png';

export default class ProjectItems extends Component {
    state= {
        projectItem: [
            {
                id: 1,
                title: 'Project One',
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati facilis, possimus dolorum minima, iste nemo & iste nemo.",
                url: "img/product-0.png"
            },
            {
                id: 2,
                title: 'Project Two',
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati facilis, possimus dolorum minima, iste nemo & iste nemo.",
                url: "img/product-0.png"
            },
            {
                id: 3,
                title: 'Project Three',
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati facilis, possimus dolorum minima, iste nemo & iste nemo.",
                url: "img/product-0.png"
            },
            {
                id: 4,
                title: 'Project four',
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati facilis, possimus dolorum minima, iste nemo & iste nemo.",
                url: "img/product-0.png"
            },
            {
                id: 5,
                title: 'Project five',
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati facilis, possimus dolorum minima, iste nemo & iste nemo.",
                url: "img/product-0.png"
            },
            {
                id: 6,
                title: 'Project six',
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati facilis, possimus dolorum minima, iste nemo & iste nemo.",
                url: "img/product-0.png"
            },

        ]
    }

    render() {
        return (
           
            <ProjectItemsWrapper className="proSect">
                <section className="container">
                <div className="row mybackgr">
                    {this.state.projectItem.map(item =>{
                        return (
                            <div className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
                            key={item.id}>
                                <div className="box-two">
                                    <h4 className="mt-3 text-capitalize">{item.title}</h4>
                                    <div className="img-container">
                                        <img src={item.url} className="project-image py-5"
                                            alt="project-image"
                                            style={{height: "120px"}}
                                            />
                                    </div>
                                    <p className="mt-3 textSect">{item.text}</p>
                                </div>
                            </div>
                        );
                     })}
                     </div>
                </section>
            </ProjectItemsWrapper>
            
        )
    }
}

const ProjectItemsWrapper = styled.section`
.head {
    text-align: center;
    padding-top: 20px;
  }

.project-image {
    background: yellow;
}  

.mb-4, .my-4 {
    margin-bottom: 1.5rem!important;
}
.shadow-sm {
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
}
.box-two {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    /* min-width: 0; */
    word-wrap: break-word;
    margin: 30px 20px 20px 20px;
    background-color: #76a0c5;
    /* background-clip: border-box; */
    /* border: 1px solid rgba(0,0,0,.125); */
    border-top: 2px solid rgba(0, 0, 255, 0.52);
    border-radius: .25rem;
  }

  .mybackgr {
    background-color: #5564e8;
    border-radius: 0% 5% / 0% 5%;
  }

  .textSect {
      margin: 20px 20px;
  }


  /*========================================================================
 This pattern is downloaded from www.toptal.com/designers/subtlepatterns/ 
 */
  

`

// ProjectItems.defaultProps = {
//     img: five_dots
//   };