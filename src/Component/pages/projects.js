import React from "react";
import { useTranslation } from "react-i18next";
import Pages_Header from './pages-header'
import './style/projects.css'

function Projects() {

    const { t } = useTranslation(['projects', 'navbar', 'data']);

    const projects = [
        { project_id: '1', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '2', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '3', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '4', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '5', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '6', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '7', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '8', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '9', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '10', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '11', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '12', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '13', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '14', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '15', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '16', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '17', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '18', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '19', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '20', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '21', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '22', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '23', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '24', project_name: 'project1_name', project_date: 'project1_date' },
        { project_id: '25', project_name: 'project1_name', project_date: 'project1_date' }
    ]

    return (
        <div id='projects'>
            <Pages_Header title={t('nav_projects', { ns: 'navbar' })} />

            <div class='container'>


                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-page1" role="tabpanel" aria-labelledby="pills-page1-tab">

                        <div className='projects-data row'>
                            {
                                projects.slice(0, 9).map(project => (

                                    <div className={`project col-md-4 project-${project.project_id}`}>
                                        <div className='project-data-cont' >
                                            <div className='project-data' >
                                                <p className='project-date'> {t('project1_date')} </p>
                                                <p className='project-name'> {t('project1_name')} {project.project_id} </p>
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>


                    </div>

                    <div class="tab-pane fade" id="pills-page2" role="tabpanel" aria-labelledby="pills-page2-tab">

                        <div className='projects-data row'>
                            {
                                projects.slice(9, 18).map(project => (

                                    <div className={`project col-md-4 project-${project.project_id}`}>
                                        <div className='project-data-cont' >
                                            <div className='project-data' >
                                                <p className='project-date'> {t('project1_date')} </p>
                                                <p className='project-name'> {t('project1_name')} {project.project_id} </p>
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>

                    </div>

                    <div class="tab-pane fade" id="pills-page3" role="tabpanel" aria-labelledby="pills-page3-tab">


                        <div className='projects-data row'>
                            {
                                projects.slice(18, 25).map(project => (

                                    <div className={`project col-md-4 project-${project.project_id}`}>
                                        <div className='project-data-cont' >
                                            <div className='project-data' >
                                                <p className='project-date'> {t('project1_date')} </p>
                                                <p className='project-name'> {t('project1_name')} {project.project_id} </p>
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>


                    </div>
                </div>


                <ul class="pagination justify-content-center nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="pills-page1-tab" data-toggle="pill" href="#pills-page1" role="tab" aria-controls="pills-page1" aria-selected="true">1</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-page2-tab" data-toggle="pill" href="#pills-page2" role="tab" aria-controls="pills-page2" aria-selected="false">2</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-page3-tab" data-toggle="pill" href="#pills-page3" role="tab" aria-controls="pills-page3" aria-selected="false">3</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-page3-tab" data-toggle="pill" href="#pills-page3" role="tab" aria-controls="pills-page3" aria-selected="false">END</a>
                    </li>
                </ul>


            </div>


        </div >
    )
}

export default Projects;