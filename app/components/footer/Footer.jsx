import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.handleContactClick = this.handleContactClick.bind(this);
        this.handleImprintNavigation = this.handleImprintNavigation.bind(this);
    }

    handleContactClick(aLink) {
        window.open(aLink);
    }

    handleImprintNavigation() {
        this.props.history.push('/imprint');
    }

    render() {
        return (
            <div className="footer-container">
                <div className="bottom-bar"/>

                <div className="link-bar">
                    <div className="twitter" onClick={() => this.handleContactClick('https://twitter.com/Synisse87')}>
                        <i className="fa fa-twitter" aria-hidden="true"/>
                    </div>

                    <div className="google" onClick={() => this.handleContactClick('https://plus.google.com/u/0/114999813694368492577')}>
                        <i className="fa fa-google-plus" aria-hidden="true"/>
                    </div>

                    <div className="github" onClick={() => this.handleContactClick('https://github.com/Synisse/')}>
                        <i className="fa fa-github" aria-hidden="true"/>
                    </div>

                    <div className="xing" onClick={() => this.handleContactClick('https://www.xing.com/profile/Stefan_Krueger67')}>
                        <i className="fa fa-xing" aria-hidden="true"/>
                    </div>

                    <div className="linkedin" onClick={() => this.handleContactClick('https://www.linkedin.com/in/stfnkrgr/')}>
                        <i className="fa fa-linkedin" aria-hidden="true"/>
                    </div>

                    <div className="mail" onClick={() => this.handleContactClick('mailto:stefan-krueger@hotmail.de')}>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                    </div>

                </div>

                <div className="imprint" onClick={() => this.handleImprintNavigation()}>Imprint</div>
            </div>
        );
    }
}

Footer.propTypes = {
    history: PropTypes.object
};

export default Footer;
