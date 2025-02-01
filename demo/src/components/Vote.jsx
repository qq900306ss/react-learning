

import React from 'react';
import PropTypes from 'prop-types';


class Vote extends React.Component {

    static propTypes = {
        title : PropTypes.string.isRequired,
    }
    state = {
        supNum : 20,
        oppNum : 10
    }
    render() {
        let {title } = this.props;
        console.log('render 執行了！');  // 每次 setState 都會看到這個

        console.log(this);
        let {supNum , oppNum} = this.state;
        return <div className='vote-box'>
        <div className='header'>
            <h2 className='title'>{title}</h2>
            <span>{supNum+oppNum}人</span>

        </div>
        <div className='main-box'>
            <p>支持人數: {supNum}人</p>
            <p>反對人數: {oppNum}人</p>
        </div>
        <div className='footer'>
            <button onClick={()=>{
                this.setState({
                    supNum :supNum+1
                })
            }}>支持</button>
            <button onClick= {()=>{
                this.setState({
                    oppNum :oppNum+1
                });
            }}>反對</button>
        </div>

    </div>
    }

    componentWillMount(){
        console.log('componentWillMount 執行了！');
    }
}


export default Vote;
