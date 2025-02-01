export const InputTodo = (props) => {
    const { todoText, onChange, onClick } = props;
    return(
        // Reactのjsx上でclassとしてしまうと別の意味合いになってしまう。classNameで
        <div className='input-area'>
            <input 
                placeholder='Todoを入力'
                value={todoText}
                onChange={onChange}
            />
            <button onClick={onClick}>追加</button>
        </div>
    )
}