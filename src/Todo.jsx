// ここで読み込むと、全部にかかってしまう
import { useState } from 'react';
import './style.css'

export const Todo = ()=> {
  // stateの定義（todoの内容）
  const [incompleteTodos, setIncompleteTodos] = useState([
    "Todoです1",
    "Todoです2"
  ])
  const [completeTodos, setcompleteTodos] = useState([
    "Todoでした1",
    "Todoでした2"
  ])
  // 入力内容受け取りのstateを定義
  const [todoText, setTodoText] = useState("");
  // 入力されたら、内容をtodoTextにセット。イベントが発火すると、いろんな情報を持ったeventが渡ってくる
  const onChangeTodoText = (e) => setTodoText(e.target.value);
  // 追加ボタンが押されたら、incompleteTodosの配列の最後に追加
  // 新しい配列をセットし直す感じ
  const onClickAdd = () => {
    if(todoText==="") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }
  // 削除ボタンが押されたら、map関数で一覧表示してるからそのtodoのindexを取得できて、削除
  // 新しい配列をセットし直す感じ。incompleteTodos自体はいじらない
  // set関数は、配列が全く新しいものになったかどうかで判定するから。
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1); // index番目の要素から一つ削除
    setIncompleteTodos(newTodos);
  }
  // 完了ボタンが押されたら、削除&追加。削除は削除ボタンと一緒、追加は一工夫
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    // 既存のcompleteTodosのstateに、完了が押された行の要素を追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    // todoの配列のstateをそれぞれ更新
    setIncompleteTodos(newIncompleteTodos);
    setcompleteTodos(newCompleteTodos);
  }

  return (
    <>
      {/* Reactのjsx上でclassとしてしまうと別の意味合いになってしまう。classNameで */}
      <div className='input-area'>
        <input placeholder='Todoを入力' value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className='incomplete-area'>
        <p className='title'>未完了のtodo</p>
        <ul>
        {/* 初期値に入れたstateの配列の要素をもとに、li要素をループしながら一覧表示（レンダリング）する */}
        {/* 配列の要素を使った繰り返しなのでmap使う */}
        {/* return忘れない/変数使うときは、jsですの{}忘れない */}
          {incompleteTodos.map((todo, index)=>{
            return(
            // 注意点：returnの一番頭の要素にkeyを設定する
            // 仮想DOMが差分を判断するときに、ループの何個目の要素なのかの判断が必要
            // よって、「一意になる項目」をkeyに設定することが大事
            // mapの第２引数indexでいいじゃん？→並べ替えで変わっちゃったりするのでよくない
            // 今回も、同じtodoを入力しちゃうとエラーなので厳密にはよくないがとりまkeyはtodoにしておく
            <li key={todo}>
              <div className='list-row'>
                <p className='todo-item'>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
            );
          })}
        </ul>
      </div>
      <div className='complete-area'>
      <p className='title'>完了のtodo</p>
        <ul>
          {/* returnは省略 */}
          {completeTodos.map((todo)=>(
            <li key={todo}>
              <div className='list-row'>
                <p className='todo-item'>{todo}</p>
                <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
    
  );
}

