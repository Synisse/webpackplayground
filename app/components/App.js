import React from 'react';
require('../main.less');
import {renderRoutes} from '../routes';

const App = () =>
    <div>
        { renderRoutes() }
    </div>;

export default App;
