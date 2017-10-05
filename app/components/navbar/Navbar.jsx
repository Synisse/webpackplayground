import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavbarContainer extends Component {
    constructor(props) {
        super(props);

        console.log('navbar props: ', props);

        this.state = {
            selectedEntry: '/aboutme'
        };
    }

    // workaround to trigger component rerender
    selectEntry (aEntry) {
        this.props.history.push(aEntry);

        this.setState({selectedEntry: aEntry});
    }

    getActiveClass (aEntry) {
        if(this.state.selectedEntry.indexOf(aEntry) !== -1) {
            return 'link-font active-navbar-item';
        }

        return 'link-font';
    }

    render() {
        return (
            <div className="navbar-container">
                <div className="navbar-wrapper">
                    <div className="nav-bar-link-container left-button">
                        <div className="button-wrapper" onClick={this.selectEntry.bind(this, '/aboutme')}>
                            <div className={this.getActiveClass.bind(this, 'aboutme')()}>About</div>
                        </div>
                    </div>
                    <div className="nav-bar-link-container">
                        <div className="button-wrapper" onClick={this.selectEntry.bind(this, '/projects/-')}>
                            <div className={this.getActiveClass.bind(this, 'projects')()}>Projects</div>
                        </div>
                    </div>
                    <div className="nav-bar-link-container right-button">
                        <div className="button-wrapper" onClick={this.selectEntry.bind(this, '/contact')}>
                            <div className={this.getActiveClass.bind(this, 'contact')()}>Contact</div>
                        </div>
                    </div>
                </div>
                <div className="bottom-bar"></div>
            </div>
        );
    }
}

NavbarContainer.propTypes = {
    history: PropTypes.object
};

export default NavbarContainer;
