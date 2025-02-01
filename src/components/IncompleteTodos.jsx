export const IncompleteTodos = (props) => {
    const{ todos, onClickComplete, onClickDelete } = props;
    return(
        <div className='incomplete-area'>
        <p className='title'>未完了のtodo</p>
        <ul>
        {/* 初期値に入れたstateの配列の要素をもとに、li要素をループしながら一覧表示（レンダリング）する */}
        {/* 配列の要素を使った繰り返しなのでmap使う */}
        {/* return忘れない/変数使うときは、jsですの{}忘れない */}
          {todos.map((todo, index)=>{
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
    )
};