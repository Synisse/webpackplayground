import React, { Component } from 'react';

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-container">
                <div className="content-area">
                    {
                        (
                        <div className="info-text">

                            /* <br/>
                            &nbsp; *<br/>
                            &nbsp; * Hi, this is me!<br/>
                            &nbsp; *<br/>
                            &nbsp; */
                            <br/>

                            <span className="pink">{'const '}</span>
                            <span className="white">{'person '}</span>
                            <span className="pink">{' \= '}</span>
                            <span className="white">&#123;</span><br/>

                            <span className="indent white">{'name'}</span>
                            <span className="pink">{'\: '}</span>
                            <span className="yellow">{' \'Stefan\' '}</span>
                            <span className="orange">{'\,'}</span><br/>

                            <span className="indent white">{'profession'}</span>
                            <span className="pink">{'\: '}</span>
                            <span className="yellow">{' \'Software Engineer\' '}</span>
                            <span className="orange">{'\,'}</span><br/>

                            <span className="indent white">{'interests'}</span>
                            <span className="pink">{'\: '}</span>
                            <span className="white">{' \[ '}</span><br/>

                            <span className="array-indent yellow">{' \'coding\' '}</span><span className="orange">{'\,'}</span><br/>
                            <span className="array-indent yellow">{' \'eSports\' '}</span><span className="orange">{'\,'}</span><br/>
                            <span className="array-indent yellow">{' \'geocaching\' '}</span><span className="orange">{'\,'}</span><br/>
                            <span className="array-indent yellow">{' \'movies & series\' '}</span><span className="orange">{'\,'}</span><br/>
                            <span className="array-indent yellow">{' \'VR & AR\' '}</span><span className="orange">{'\,'}</span><br/>

                            <span className="indent white">{' \] '}</span>
                            <span className="orange">{'\,'}</span><br/>

                            <span className="indent white">{'degrees'}</span>
                            <span className="pink">{'\: '}</span>
                            <span className="white">{' \[ '}</span><br/>

                            <span className="array-indent yellow">{' \'B. ICT\' '}</span><span className="orange">{'\,'}</span><br/>
                            <span className="array-indent yellow">{' \'Dipl. Ing.\' '}</span><span className="orange">{'\,'}</span><br/>

                            <span className="indent white">{' \] '}</span>
                            <span className="orange">{'\,'}</span><br/>

                            <span className="white">&#125;</span><br/>

                        </div>
                        )
                    }
                    <div className="profile-wrapper">
                        <div className="profile-image"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContainer;
