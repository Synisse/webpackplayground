import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Project from '../project/Project.jsx';
import ProjectDetails from '../projectdetails/Projectdetails.jsx';

const projects = [
    {
        'pid': '1',
        'name': 'OpenGL-Game',
        'technology': [
            'C++',
            'VS2012',
            'OpenGL',
            'Glut',
            'LandscapeGeneration',
            'FractalObjects',
            'Lighting'
        ],
        'description': 'A basic OpenGL Game.',
        'image': 'http://i.imgur.com/JSwz5Az.png',
        'percent': '100',
        'youtube': 'http://www.youtube.com/embed/p3XU0tvEy70',
        'screenshots': [],
        'longdescription': 'This game was programmed from scratch with C++ and the OpenGL Utility Toolkit. During this project I dealt with topics like multiple viewports, ambient lighting, generated landscapes, object selections, fractal objects and the performance of the game.',
        'sourcecode': 'https://github.com/Synisse/OpenGLGame'
    },
    {
        'pid': '2',
        'name': 'Ambient Intelligence',
        'technology': [
            'C#',
            'JavaEE',
            'Hibernate',
            'Wicket',
            'Android',
            'MachineLearning',
            'FaceRecognition',
            'HaarClassifier',
            'OpenCV'
        ],
        'description': 'An ambient intelligence system to improve the life of a student.',
        'image': 'http://i.imgur.com/dockT8c.jpg',
        'percent': '100',
        'youtube': 'http://www.youtube.com/embed/ubRLwzv8CtI',
        'screenshots': [],
        'longdescription': 'During my minor in Ambient Intelligence I was working in a team of five people on a project that should simplify the life of a student at our university. This was a challenging project since it involved multiple topics such as face recognition, machine learning, mobile devices.',
        'sourcecode': ''
    },
    {
        'pid': '3',
        'name': 'Neural Network',
        'technology': [
            'C#',
            'WPF',
            'XAML',
            'HebbianLearningRule'
        ],
        'description': 'A Neural Network to classify the color of pixels in a 100x100 Grid.',
        'image': 'http://i.imgur.com/yhPE3h6.png',
        'percent': '100',
        'youtube': 'http://www.youtube.com/embed/qIzYVXqIdZk',
        'screenshots': [],
        'longdescription': 'Implementation of a neural network with an adjustable amount of hidden layers and neurons.',
        'sourcecode': 'https://github.com/Synisse/neuralnetwork'
    },
    {
        'pid': '4',
        'name': 'Q-Learning',
        'technology': [
            'C#',
            'WPF',
            'XAML'
        ],
        'description': 'Implementation of the Q-Learning algorithm to find the quickest path through randomizable maze.',
        'image': 'http://i.imgur.com/V2Vsftv.png',
        'percent': '100',
        'youtube': 'http://www.youtube.com/embed/LTwuc5KM70g',
        'screenshots': [],
        'longdescription': '',
        'sourcecode': 'https://github.com/Synisse/qlearning'
    },
    {
        'pid': '5',
        'name': 'Face Recognition',
        'technology': [
            'C#',
            'Java',
            'Android',
            'Eigenfaces',
            'ILNumerics'
        ],
        'description': 'A Face Recognition implementation with C#.',
        'image': 'http://i.imgur.com/eqswyux.png',
        'percent': '100',
        'youtube': '',
        'screenshots': [
            'http://i.imgur.com/H8JmdfX.png'
        ],
        'longdescription': 'A Face Recognition implementation with C#.',
        'sourcecode': 'https://github.com/Synisse/eigenfaces'
    },
    {
        'pid': '6',
        'name': 'Action Paintball',
        'technology': [
            'Unity3D',
            'C#',
            'JavaScript',
            'Blender',
            'Cinema4D'
        ],
        'description': 'A dynamic QuakeIII-styled paintball game. ',
        'image': 'http://i.imgur.com/2Xef5by.png',
        'percent': '30',
        'youtube': '',
        'screenshots': [
            'http://i.imgur.com/Fli6QpR.png'
        ],
        'longdescription': 'A dynamic QuakeIII-styled paintball game built with Unity 3D. You can test the current state of the game right LINK123',
        'longdescriptionlinks': [{'link': 'http://devsyn.de/UnityTest/NetworkBuilds/webbuild0123.html', 'placeholder': 'here'}],
        'sourcecode': ''
    },
    {
        'pid': '8',
        'name': 'Hybrid App',
        'technology': [
            'SenchaTouch',
            'JavaScript',
            'HTML5',
            'CSS3',
            'ExtJS',
            'iOS',
            'Android'
        ],
        'description': 'Hybrid app for the mobile usage of the culimatch platform.',
        'image': 'http://i.imgur.com/bkid9ze.png',
        'percent': '80',
        'youtube': '',
        'screenshots': [],
        'longdescription': 'This app was built for the dutch webplatform LINK123 of the company culimedia. The app will be an easy to use and intuitive mobile alternative to the official website. The app is not yet published, but should be available soon.',
        'longdescriptionlinks': [{'link': 'http://culimatch.nl/', 'placeholder': 'Culimatch'}],
        'sourcecode': ''
    },
    {
        'pid': '9',
        'name': 'Forex Clock',
        'technology': [
            'AngularJS',
            'JavaScript',
            'PHP',
            'Ionic',
            'HTML5',
            'CSS3',
            'Cordova',
            'iOS',
            'Android',
            'ChromeExtensions'
        ],
        'description': 'Webapp to track the opening times of the global forex markets.',
        'image': 'http://i.imgur.com/gawtIAC.png',
        'percent': '100',
        'youtube': '',
        'screenshots': [],
        'longdescription': 'This webapp was built for multiple platforms such as Chrome Extensions, Browser, Android and iOS App. You can find the web version of this tool on the LINK123.',
        'longdescriptionlinks': [{'link': 'https://www.forex4noobs.com/forex-tools/forex-clock/', 'placeholder': 'forex4noobs website'}],
        'sourcecode': ''
    },
    {
        'pid': '10',
        'name': 'WCF Game',
        'technology': [
            'C#',
            'WCF',
            'WPF',
            'XAML'
        ],
        'description': 'Implementation of the Rock-Paper-Scissors-Lizard-Spock Game.',
        'image': 'http://i.imgur.com/sLcyzlx.png',
        'percent': '100',
        'youtube': '',
        'screenshots': [],
        'longdescription': 'This game was programmed with C# and the WCF Service. You can play this game with two players via LAN.',
        'sourcecode': ''
    },
    {
        'pid': '11',
        'name': 'ExamDroid',
        'technology': [
            'XML',
            'MathML',
            'Java',
            'Android'
        ],
        'description': 'Android App to learn some basic Math.',
        'image': 'http://i.imgur.com/pisE9OW.png',
        'percent': '70',
        'youtube': '',
        'screenshots': [],
        'longdescription': 'An Android app to learn some advanced math.',
        'sourcecode': ''
    },
    {
        'pid': '12',
        'name': 'Devsyn Website',
        'technology': [
            'JavaScript',
            'Node',
            'React',
            'Redux',
            'Webpack',
            'HTML5',
            'CSS3',
            'Less'
        ],
        'description': 'this.website',
        'image': 'http://i.imgur.com/Xpq8Scm.png',
        'percent': '90',
        'youtube': '',
        'screenshots': [],
        'longdescription': 'This site had lots of rewrites mostly because I learned about new technologies or frameworks.',
        'sourcecode': 'https://github.com/Synisse/meteorplayground'
    }
];

class ProjectsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isProjectSelected: false,
            selectedProject: null
        };
    }

    selectProject(aProject) {
        this.props.history.push('/projects/' + aProject.pid);
    }

    discardProject() {
        this.props.history.push('/projects/-');
    }

    renderProjects() {
        const colorArray = [
            {pid: '1', color: 'pink'},
            {pid: '2', color: 'yellow'},
            {pid: '3', color: 'green'},
            {pid: '4', color: 'purple'},
            {pid: '5', color: 'orange'},
            {pid: '6', color: 'pink'},
            {pid: '7', color: 'yellow'},
            {pid: '8', color: 'green'},
            {pid: '9', color: 'purple'},
            {pid: '10', color: 'orange'},
            {pid: '11', color: 'pink'},
            {pid: '12', color: 'yellow'},
        ];
        return projects.map((aProject) => {
            const colorValue = colorArray.find(aColor => aProject.pid === aColor.pid);

            return <Project key={aProject.pid} project={aProject} selectProject={this.selectProject.bind(this)} color={colorValue.color}/>;
        });
    }

    renderProjectDetails(aId) {
        let selectedProject = projects.find(aProject => aProject.pid === aId);
        return <ProjectDetails project={selectedProject} discardProject={this.discardProject.bind(this)}>DETAILS</ProjectDetails>;
    }

    render() {
        return (
            <div className="projects-container">
                {this.props.match.params.id === '-' ? this.renderProjects() : this.renderProjectDetails(this.props.match.params.id)}
            </div>
        );
    }
}

ProjectsContainer.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object
};

export default ProjectsContainer;
