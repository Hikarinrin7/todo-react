// ここで読み込むと、全部にかかってしまう
import { useState } from 'react';
import './style.css'
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';

export const Todo = ()=> {
  // stateの定義（todoの内容）
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
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
    setCompleteTodos(newCompleteTodos);
  }
  // 戻すボタンが押されたら
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index,1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={isMaxLimitIncompleteTodos}
      />
      {isMaxLimitIncompleteTodos && (
      <p style={{ color: "red" }}>
        登録できるTodoは5個までだよ〜。消化しろ〜
      </p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos
        todos={completeTodos}
        onClickBack={onClickBack}
      />
    </>
  );
}

