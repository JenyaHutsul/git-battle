import { Alert, Spin } from 'antd';
import React from 'react';
import "./loadCss.css"
import 'antd/dist/antd.css';

const Load = (props) => {

    return (props.active ? <div className='modul'>
        <Spin tip="Loading...">
        </Spin>
    </div> : "")

};

export default Load;