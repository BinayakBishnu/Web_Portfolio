import React from 'react'

import projectStyles from './Projects.module.css'

import project1Thumbnail from '../assets/projects/LinkedInScrape1.png'
import project2Thumbnail from '../assets/projects/RainfallAnalysis1.png'
import project3Thumbnail from '../assets/projects/BookRev1.webp'
import project4Thumbnail from '../assets/projects/MediServ1.webp'

function Projects() {
    const projectFilter = (event) => {
        var flag = 0;
        var childrenCount = document.getElementById('projectsMainPart').childElementCount;
        for (var i = 1; i <= childrenCount - 1; i++) {
            var element = document.getElementById(`project${i}`);
            if (element.classList.contains(event.target.id)) {
                // alert(event.target.id + '\n' + element.classList);
                element.style.display = 'block';
                flag += 1;
            } else {
                // alert('Removing: ' + element.id);
                element.style.display = 'none';
            }
        }
        document.getElementById("filterResultDiv").style.display = "flex";
        flag === 0 ? document.getElementById("countFiltersMatched").innerHTML = "None matched &nbsp;" : document.getElementById("countFiltersMatched").innerHTML = `${flag} matched &nbsp;`;
    }

    const removeFilters = () => {
        document.getElementById("filterResultDiv").style.display = "none";
        for (var i = 1; i <= 2; i++) {
            var element = document.getElementById(`project${i}`);
            element.style.display = 'block';
        }
    }

    return (
        <section className={`${projectStyles.projectsParent}`} id="projects"
            initial={{ rotate: 0, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1.0 }}
            transition={{ duration: 1, /* yoyo: 1 */ }}
        >
            <section className={`${projectStyles.projects}`} id="projects">
                <div id="headWithLine">
                    <div className={`${projectStyles.projectsHeadDiv}`}>
                        <h3 className={`${projectStyles.projectsHead}`}>Projects</h3>
                        <ul className={`${projectStyles.projectFilters}`}>
                            {/* <li className={`${projectStyles.filterHeading}`}>Filters: </li> */}
                            <li className={`${projectStyles.projectFiltersCategory}`}>
                                <button className={`${projectStyles.projectFiltersButton}`} name="projectFiltersAnalytics" id="analytics" onClick={(e) => projectFilter(e)}>Analytics</button>
                            </li>
                            <li className={`${projectStyles.projectFiltersCategory}`}>
                                <button className={`${projectStyles.projectFiltersButton}`} name="projectFiltersDashboards" id="dashboards" onClick={(e) => projectFilter(e)}>Dashboards</button>
                            </li>
                            <li className={`${projectStyles.projectFiltersCategory}`}>
                                <button className={`${projectStyles.projectFiltersButton}`} name="projectFiltersFullStack" id="fullStack" onClick={(e) => projectFilter(e)}>Full Stack</button>
                            </li>
                            <li className={`${projectStyles.projectFiltersCategory}`}>
                                <button className={`${projectStyles.projectFiltersButton}`} name="projectFiltersExcel" id="Excel" onClick={(e) => projectFilter(e)}>Excel</button>
                            </li>
                            <li className={`${projectStyles.projectFiltersCategory}`}>
                                <button className={`${projectStyles.projectFiltersButton}`} name="projectFiltersSQL" id="SQL" onClick={(e) => projectFilter(e)}>SQL</button>
                            </li>
                            {/* <li className={`${projectStyles.projectFiltersCategory}`}>
                                <button className={`${projectStyles.projectFiltersButton}`} name="projectFiltersTableau" id="Tableau" onClick={(e) => projectFilter(e)}>Tableau</button>
                            </li> */}
                            {/* <li className={`${projectStyles.projectFiltersCategory}`}>
                                <button className={`${projectStyles.projectFiltersButton}`} name="projectFiltersEDA" id="EDA" onClick={(e) => projectFilter(e)}>EDA</button>
                            </li> */}
                            <li className={`${projectStyles.projectFiltersCategory}`}>
                                <button className={`${projectStyles.projectFiltersButton}`} name="projectFiltersOthers" id="Others" onClick={(e) => projectFilter(e)}>Others</button>
                            </li>
                        </ul>
                        <a href="/allprojects" style={{ "color": "white" }}>See all</a>
                    </div>
                    <hr className={`${projectStyles.hLine}`} />
                </div>

                <div id="filterResultDiv" className={`${projectStyles.filterResultDiv}`}>
                    <p id="countFiltersMatched" className={`${projectStyles.countFiltersMatched} m-0 mb-2 p-0`}></p>
                    <button id="removeFilters" onClick={removeFilters} className={`${projectStyles.removeFilters}`}>
                        Remove filters
                    </button>
                </div>

                <div id="projectsMainPart" className={`${projectStyles.projectsMainPart}`}>
                    <p className={`${projectStyles.mobileHint} m-0 mb-2 p-0`}>Click on any to expand</p>
                    <div id="project1" className={`${projectStyles.project} ${projectStyles.project1} webscrapping Python Others`}>
                        <div className={`${projectStyles.container}`}>
                            <a href="/allprojects#project1">
                                <img src={project1Thumbnail} alt="project1" className={`${projectStyles.projectImg} ${projectStyles.project1Img}`}
                                    width="100%"
                                    height="100%" />
                                <div className={`${projectStyles.overlay}`}>
                                    <div className={`${projectStyles.text}`}>
                                        <h5>LinkedIn Job Webscrapper</h5>
                                        <p>Displaying job posts based on role</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p className={projectStyles.projectTechStack}>Webscrapping&nbsp;|&nbsp;Python</p>
                    </div>
                    <div id="project2" className={`${projectStyles.project} ${projectStyles.project2} analytics dashboards Excel`}>
                        <div className={`${projectStyles.container}`}>
                            <a href="/allprojects#project2">
                                <img src={project2Thumbnail} alt="project2" className={`${projectStyles.projectImg} ${projectStyles.project2Img}`}
                                    width="100%"
                                    height="100%" />
                                <div className={`${projectStyles.overlay}`}>
                                    <div className={`${projectStyles.text}`}>
                                        <h5>Rainfall Analysis</h5>
                                        <p>Visualising rainfall patterns</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p className={projectStyles.projectTechStack}>Analytics&nbsp;|&nbsp;Dashboards&nbsp;|&nbsp;Excel</p>
                    </div>
                    <div id="project3" className={`${projectStyles.project} ${projectStyles.project3} fullStack SQL`}>
                        <div className={`${projectStyles.container}`}>
                            <a href="/allprojects#project3">
                                <img src={project3Thumbnail} alt="project3" className={`${projectStyles.projectImg} ${projectStyles.project3Img}`}
                                    width="100%"
                                    height="100%" />
                                <div className={`${projectStyles.overlay}`}>
                                    <div className={`${projectStyles.text}`}>
                                        <h5>MediServ</h5>
                                        <p>Online consultation/medical store</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p className={projectStyles.projectTechStack}>Full stack&nbsp;|&nbsp;SQL</p>
                    </div>
                    <div id="project4" className={`${projectStyles.project} ${projectStyles.project4} fullStack MongoDB Others`}>
                        <div className={`${projectStyles.container}`}>
                            <a href="/allprojects#project4">
                                <img src={project4Thumbnail} alt="project4" className={`${projectStyles.projectImg} ${projectStyles.project4Img}`}
                                    width="100%"
                                    height="100%" />
                                <div className={`${projectStyles.overlay}`}>
                                    <div className={`${projectStyles.text}`}>
                                        <h5>BookRev</h5>
                                        <p>Online book sell/buy store</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p className={projectStyles.projectTechStack}>Full stack&nbsp;|&nbsp;MongoDB</p>
                    </div>
                </div>
            </section>
        </section >
    )
}

export default Projects
