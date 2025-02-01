
const Vote = function Vote(props) {

    let {title  } = props;
    let supNum = 10,
        oppNum = 5;
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
                    supNum++; 
                }}>支持</button>
                <button onClick= {()=>{oppNum++;

                }}>反對</button>
            </div>

    </div>
}

export default Vote;