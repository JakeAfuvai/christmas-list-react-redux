import React from "react"

const ListItemDisplay = props => {
    console.log(props)
    const handleClick = () => {
        const listItemsCopy = [...props.member.listItems]
        const updatedListItemArr = listItemsCopy.filter(item => item !== props.item)
        const updatedMember = {...props.member, listItems: updatedListItemArr} 
        props.updateMember(updatedMember, props.memberIndex)   
    }
    return (
        <>
            <p>{props.item}</p>
            <button onClick={handleClick}>-</button>   
        </>
    )
}

export default ListItemDisplay