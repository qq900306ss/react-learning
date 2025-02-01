import React from 'react';
import ReactDOM from 'react-dom/client';
import Vote from './components/Vote';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
    <Vote title='React 投票' >

    </Vote>
  </>
);

// root.render(
//   <>
//     <Dialog title='公告提示' content='這是一個公告提示內容' />

//     <Dialog content='這是不需要標題的公告內容提是' >

//       <button>確定</button>
//       <button>取消</button>
//     </Dialog>
//   </>
// );

