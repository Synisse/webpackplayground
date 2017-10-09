import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMouseOver: false
        };
    }

    onMouseOver() {
        this.setState({isMouseOver: true});
    }

    onMouseLeave() {
        this.setState({isMouseOver: false});
    }

    generateHashtags() {
        let aTechString = '';

        this.props.project.technology.map((aTech) => {
            aTechString = aTechString + '#' + aTech + ' ';
        });

        return aTechString;
    }

    selectProject() {
        this.props.selectProject(this.props.project);
    }

    getCoverClass() {
        const coverClass = 'white-cover';

        // switch(this.props.color) {
        //     case 'pink':
        //         coverClass = 'pink-cover';
        //         break;
        //     case 'yellow':
        //         coverClass = 'yellow-cover';
        //         break;
        //     case 'green':
        //         coverClass = 'green-cover';
        //         break;
        //     case 'purple':
        //         coverClass = 'purple-cover';
        //         break;
        //     case 'white':
        //         coverClass = 'white-cover';
        //         break;
        //     case 'orange':
        //         coverClass = 'white-cover';
        //         break;
        //     default:
        //         break;
        // }

        return coverClass;
    }

    render() {
        return (
            <div
                className="project-container"
                style={{backgroundImage: 'url(' + this.props.project.image + ')'}}
                onMouseEnter={this.onMouseOver.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)}
                onClick={this.selectProject.bind(this)}
            >
                <div className={this.state.isMouseOver ? this.getCoverClass.bind(this)() + ' cover-hovered' : this.getCoverClass.bind(this)()}/>
                <div className={this.state.isMouseOver ? 'project-title title-hovered' : 'project-title'}>
                    {this.props.project.name}
                </div>

                {this.state.isMouseOver ?
                    <div className="hashtag-container">
                        {this.generateHashtags()}
                    </div>
                    : null
                }

            </div>
        );
    }
}

Project.propTypes = {
    project: PropTypes.object.isRequired,
    selectProject: PropTypes.func.isRequired,
    history: PropTypes.object,
    color: PropTypes.string
};

export default Project;
