import React, { useState } from "react"

const AddToChristmasList = props => {
    const [item, setItem] = useState("")
    
    const handleSubmit = e => {
        e.preventDefault()
        const memberCopy = {...props.member}
        memberCopy.listItems.push(item)
        props.updateMember(memberCopy, props.index)
        
        setItem("")
    }
        
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input 
                type="text"
                value={item}
                placeholder="Add Item to Wish List..."
                onChange={e => setItem(e.target.value)}
            />
        </form>
    )
}

export default AddToChristmasList