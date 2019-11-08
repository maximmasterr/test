import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Button} from './Button';
import { Loader } from './Loader'
ReactDOM.render(<div className="App">
    <Button />
    <Loader />
</div>, document.getElementById('root'));