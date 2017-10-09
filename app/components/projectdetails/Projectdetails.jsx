import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectDetails extends Component {
    constructor(props) {
        super(props);
    }

    generateHashtags() {
        return this.props.project.technology.map((aTech) => {
            return (
                <div className="hashtag" key={aTech}>
                    <span className="orange">{' #'}</span><span className="green">{aTech}</span>
                </div>
            );
        });
    }

    discardProject() {
        this.props.discardProject();
    }

    parseLongDescription() {
        if(this.props.project.longdescription.indexOf('LINK123') !== -1) {
            let splitDescription = this.props.project.longdescription.split('LINK123');
            splitDescription = splitDescription.filter(aSplit => aSplit !== '');

            // maximum links = 1
            if (splitDescription.length === 2) {
                return (
                    <div>
                        <span>{splitDescription[0]}</span>
                        <a href={this.props.project.longdescriptionlinks[0].link} target="_blank">{this.props.project.longdescriptionlinks[0].placeholder}</a>
                        <span>{splitDescription[1]}</span>
                    </div>
                );
            }

            return (
                <div>
                    <span>{splitDescription[0]}</span>
                    <a href={this.props.project.longdescriptionlinks[0].link} target="_blank">{this.props.project.longdescriptionlinks[0].placeholder}</a>
                </div>
            );
        }

        return <span>{this.props.project.longdescription}</span>;
    }

    render() {
        return (
            <div
                className="project-details-container"
            >
                <div>
                    <div className="top-bar">
                        <div className="title">
                            {this.props.project.name}
                        </div>
                        <div className="close-button"  onClick={this.discardProject.bind(this)}>
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </div>
                    </div>

                    <div className="sideways-content-container">
                        <div className="split-content">
                            <div className="title">
                                Description
                            </div>
                            <div className="content-area">
                                {this.parseLongDescription()}
                            </div>
                        </div>
                        <div className="split-content">
                            <div className="title">
                                Tags
                            </div>
                            <div className="hashtag-container">
                                {this.generateHashtags()}
                            </div>
                        </div>
                    </div>

                    {this.props.project.youtube.length > 0 ?
                        (
                            <div className="content-container">
                                <div className="title">
                                    Video
                                </div>
                                <div className="video-container">
                                    <iframe width="560" height="315" src={this.props.project.youtube} frameBorder="0" allowFullScreen/>
                                </div>
                            </div>
                        )
                        : null
                    }

                    {this.props.project.screenshots.length > 0 ?
                        (
                            <div className="content-container">
                                <div className="title">
                                    Screenshots
                                </div>
                                <div className="image-container">
                                    <img className="image" src={this.props.project.screenshots[0]}/>
                                </div>
                            </div>
                        )
                        : null
                    }

                    {this.props.project.sourcecode.length > 0 ?
                        (
                            <div className="content-container">
                                <div className="title">
                                    Source
                                </div>
                                <div className="content-area github-link">
                                    <a href={this.props.project.sourcecode} target="_blank">
                                        <i className="fa fa-github fa-3" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        )
                        : null
                    }
                </div>
            </div>
        );
    }
}


ProjectDetails.propTypes = {
    project: PropTypes.object.isRequired,
    discardProject: PropTypes.func.isRequired
};

export default ProjectDetails;
