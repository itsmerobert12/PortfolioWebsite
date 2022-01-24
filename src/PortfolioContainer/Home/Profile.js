import React from "react";
import Typical from "react-typical";
import './Profile.css';
export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                    <div className="colz-icon">
                    <a href='*'>
                        <i className='fa fa-facebook-square'>
                        </i>
                    </a>
                    <a href='https://www.linkedin.com/in/roberto-c-gomez-86a735b6/'>
                        <i className='fa fa-linkedin'>
                        </i>
                    </a>
                    <a href='https://github.com/itsmerobert12'>
                        <i className='fa fa-github'>
                        </i>
                    </a>
                    </div>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'm <span className="highlighted-text">Roberto
                            </span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Full Stack Developer 💻",
                                        1000,
                                        "React/React Native Dev ",
                                        1000,
                                        "Redux Dev",
                                        1000,
                                        "State Management Dev",
                                        1000,
                                    ]}

                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Developer who executes both front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn">
                            {" "}
                            Let's Work!
                        </button>
                        <a href="Roberto G. Resume.pdf" download="Roberto G. Resume.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    )
}