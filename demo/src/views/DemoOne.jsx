import PropTypes from 'prop-types';
import React from 'react';
console.log(React);

const DemoOne = function DemoOne(props) {
    let {title   ,children} = props;

    // if (!children){
    //     children = [];
    // }else if (!Array.isArray(children)){
    //     children = [children];
    // }
    

    children = React.Children.toArray(children);
    let headerSlot = [],
        footerSlot = [],
        defaultSlot = [];
    
    children.forEach(children => {
        let slot = children.props.slot;
        if (slot === 'header'){
            headerSlot.push(children);
        }else if (slot === 'footer'){
            footerSlot.push(children);
        }else {
            defaultSlot.push(children);
        }
})
    
    return <div className='demo-box'>
        {headerSlot}
        <br/>
        <h1 className='title'>{title}</h1>
        {footerSlot}

    </div>
};

DemoOne.defaultProps = {
    x : '0'
}
DemoOne.propTypes = {
 title : PropTypes.string.isRequired,
 x :PropTypes.number,
 y : PropTypes.oneOfType([
     PropTypes.string,
     PropTypes.number
 ])

};

export default DemoOne;