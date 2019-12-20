import React, { useState } from "react"
import AddToChristmasList from "./AddToChristmasList"
import ListItemDisplay from "./ListItemDisplay"

const Member = props => {    
    
    const mappedListItems = props.member.listItems.map((item, itemIndex) => 
        <ListItemDisplay 
            key={item + itemIndex} 
            member={props.member}
            item={item} 
            index={itemIndex}
            memberIndex={props.index} 
            updateMember={props.updateMember} 
        />
    )
    return (
        <div>
            <h3>{props.member.name}</h3>
            <h4>{props.member.age}</h4>
            <AddToChristmasList 
                member={props.member} 
                index={props.index} 
                updateMember={props.updateMember} 
            />
            {mappedListItems}
        </div>
    )
}

export default Member