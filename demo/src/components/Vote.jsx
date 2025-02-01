

import React from 'react';


class Vote extends React.Component {
    render() {
        return <div className='vote-box'>
        <div className='header'>
            <h2 className='title'>標題</h2>
            <span>15人</span>

        </div>
        <div className='main-box'>
            <p>支持人數: 10人</p>
            <p>反對人數: 5人</p>
        </div>
        <div className='footer'>
            <button onClick={()=>{
                
            }}>支持</button>
            <button onClick= {()=>{

            }}>反對</button>
        </div>

    </div>
    }
}

export default Vote;

class Parent {
    constructor(a,b){
        this.a = a;
        this.b = b;
        console.log(this.a,this.b);
        this.total = a + b;
        this.num = 200
    }
    getNum = () =>{

    };
}
let p = new Parent(10,20);
console.log(p);