import React from 'react'
import '../components/components.css';

export default function Projects() {
    return (
        <section className="mainSect">
            <h2 className="head">My projects</h2>
            <div className="top-area">
                <div className="box">
                    <p>box 1</p>
                </div>
                <div className="box">
                    <p>box 2</p>
                </div>
                <div className="box">
                   <p>box 3</p>
                </div>
                <div className="box">
                    <p>box 4</p>
                </div>
                <div className="box">
                    <p>box 5</p>
                </div>
                <div className="box">
                   <p>box 6</p>
                </div>
            </div>
        </section>
    )
}




.top-area {
    height: 20vh;
    width: 50%;
    /* display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr); */
    /* margin: auto; */
    /* justify-content: space-evenly; */
    /* justify-items: center;
    grid-gap: 20px; */
    padding: 30px 30px 10px 50px;
    /* justify-content: space-around; */
  }

  .box {
    /* height: 20vh; */
    background: #17bc0b; 
    color: #fff;
    text-align: center;
    /* border-bottom: 2px solid rgba(0, 0, 255, 0.52);  */
    border-top: 2px solid rgba(0, 0, 255, 0.52);
    /* margin: 15px; */
    /* width: 200px;  */
  }


  <div className="row">
                            <div class="col-md-4">
                                <div className="box-two">
                                    <p>box 4</p>
                                </div>
                            </div>    
                            <div class="col-md-4">
                                <div className="box-two">
                                    <p>box 5</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div className="box-two">
                                    <p>box 6</p>
                                </div>
                            </div>
                        </div>