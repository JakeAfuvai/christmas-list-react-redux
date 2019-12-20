import React from "react"
import { connect } from "react-redux"
import AddFamilyMember from "./AddFamilyMember"
import Member from "./Member"

const App = props => {
    const mappedMembers = props.state.family.map((member, i) => 
        <Member key={member.name} index={i} member={member} updateMember={props.updateFamilyMember} />
    )
    
    return (
        <>
            <h1>Family Christmas List</h1>
            <AddFamilyMember addMember={props.addFamilyMember} />
            {mappedMembers}
        </>
    )
}

const mapStateToProps = state => ({
    state
})

const mapDispatchToProps = dispatch => ({
    addFamilyMember: member => dispatch({type: "ADD_MEMBER", payload: member}),
    updateFamilyMember: (member, i) => dispatch({type: "UPDATE_MEMBER", payload: member, index: i})
})

export default connect(mapStateToProps, mapDispatchToProps)(App)