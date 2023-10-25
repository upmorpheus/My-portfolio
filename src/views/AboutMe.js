import React from "react";

const AboutMe = () => {
    return (
        <div className="about" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-lg-4">
                        <img className="img-fluid" src="img/about-us.jpg" />
                    </div>

                    <div className="col-md-6 col-lg-8">
                        <header className="section-header">
                            <h2>About Me</h2>
                        </header>
                        <h3><strong>Name:</strong>Yuu Kimura</h3>
                        <h4><strong>Profession:</strong> Senior web developer and Designer</h4>
                        <p>
                            My 7 years of experience in Frontend developing, along with my 3 years of
                            experience working as a Senior Golang Engineer at Gretel has acquainted me
                            well with the nuances of the role. My Frontend and Backend skills are finely
                            honed and all the web pages created by me are mobile-friendly and responsive.
                            My deep understanding of the latest web development trends and
                            technologies, coupled with my ability to quickly adapt to new technologies
                            makes me a valuable asset to any company I work for.
                        </p>
                        <a href="#">Hire Me</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="skills">
                            <h3>Front End Skills</h3>
                            <div className="skill-name">
                                <p>React</p><p>85%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <div className="skill-name">
                                <p>Svelte</p><p>80%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            
                            <div className="skill-name">
                                <p>JavaScript</p><p>95%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            
                            <div className="skill-name">
                                <p>TypeScript</p><p>80%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="skills">
                            <h3>Back End Skills</h3>
                            <div className="skill-name">
                                <p>Golang</p><p>90%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            
                            <div className="skill-name">
                                <p>Rust</p><p>85%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            
                            <div className="skill-name">
                                <p>Laravel</p><p>95%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <div className="skill-name">
                                <p>Node</p><p>95%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;