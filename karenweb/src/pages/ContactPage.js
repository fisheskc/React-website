import React from 'react'
import '../components/components.css';


export default function ContactPage() {
    return (
        <section className="contactSect">
            <h2 className="head">Contact page</h2>
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <form className="mt-5 mySect" action="https://formspree.io/fisheskc@googlemail.com" method="POST">
                    <p>Please fill your details here</p>
                        {/* first */}
                        <div className="form-group">
                            <input type="text"
                                name="firstName" 
                                className="form-control"
                                placeholder="Your name"
                             />
                        </div>
                        {/* email */}
                        <div className="form-group">
                            <input type="text"
                                    name="subject" 
                                    className="form-control"
                                    placeholder="Email here"
                             />
                        </div>
                         {/* message */}
                         <div className="form">
                            <textarea
                                name="message"
                                className="form-control"
                                rows="10"
                                placeholder="Put your message here"
                            />
                        </div>
                        {/* submit */}
                        <div className="form-group mt-3">
                            <input type="submit" value="Send"
                                className="form-control bg-primary text-white"
                             />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
