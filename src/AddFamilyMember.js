import React, { useState } from "react"

const AddFamilyMember = props => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    
    const handleSubmit = e => {
        e.preventDefault()
        const familyMember = {
            name: name,
            age: age,
            listItems: []
        }
        props.addMember(familyMember)
        
        setName("")
        setAge("")
    }
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input 
                type="text"
                value={name}
                placeholder="Enter Name..."
                onChange={e => setName(e.target.value)}
            />
            <input 
                type="number"
                value={age}
                placeholder="Enter Age..."
                onChange={e => setAge(e.target.value)}
            />
            <button>Add As Family Member</button>
        </form>
    )
}

export default AddFamilyMember