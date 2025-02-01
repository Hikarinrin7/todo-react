// ここで読み込むと、全部にかかってしまう
import { useState } from 'react';
import './style.css'

export const Todo = ()=> {
  return (
    <>
      {/* Reactのjsx上でclassとしてしまうと別の意味合いになってしまう。classNameで */}
      <div className='input-area'>
        <input placeholder='Todoを入力' />
        <button>追加</button>
      </div>
      <div className='incomplete-area'>
        <p className='title'>未完了のtodo</p>
        <ul>
          <li>
            <div className='list-row'>
              <p className='todo-item'>todoです</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div className='complete-area'>
      <p className='title'>完了のtodo</p>
        <ul>
          <li>
            <div className='list-row'>
              <p className='todo-item'>todoでした</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
    
  );
}

