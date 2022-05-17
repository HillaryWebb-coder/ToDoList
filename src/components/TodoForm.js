import React, {useState} from 'react'

export default function TodoForm(props) {
    const [input, setInput] = useState("")

    const updateInput = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTask({
            id: Math.floor(Math.random() * 10000000),
            text: input,
            isCompleted: false,
        })
        setInput('')
    }

  return (
    <section className="add-item">
        <form>
            <div className="form-control">
                <input type="text" placeholder="✍️  add item..." onChange={updateInput} value={input}/>
                <button onClick={handleSubmit}><i className="fa fa-plus add-btn" title="Add item"></i></button>
            </div>
        </form>
    </section>
  )
}
