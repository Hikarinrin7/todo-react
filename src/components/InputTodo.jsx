const style={
    backgroundColor: "#c6e5d9",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px",
}

export const InputTodo = (props) => {
    const { todoText, onChange, onClick } = props;
    return(
        // Reactのjsx上でclassとしてしまうと別の意味合いになってしまう。classNameで
        <div style={style}>
            <input 
                placeholder='Todoを入力'
                value={todoText}
                onChange={onChange}
            />
            <button onClick={onClick}>追加</button>
        </div>
    )
}