
import PropTypes from 'prop-types';
import React from 'react';

const Dialog = function DiaLog(props){

    let {title , content,children} = props;
    children = React.Children.toArray(children);
    
    return <div class name='dialog' style= {{width : '500px'}} >
        <div className='header' style={{display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
            <h1>{title}</h1>
            <span>X</span>
        </div>

        <div className='main-box'>
            {content}
        </div>

       {children.length > 0 ?
        <div className='footer'>
            {children}
        </div>
        : null
        }
        

    </div>
}
Dialog.defaultProps = {
    title : '這是預設標題',
    content : '這是預設內容'
}
Dialog.propTypes = {
    title : PropTypes.string,
    content : PropTypes.string.isRequired,
}
export default Dialog;