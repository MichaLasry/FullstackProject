import React from 'react'
import { connect } from 'react-redux'
import './postTitle.css'

function PostTitle(props){
  return(
    <>
    <h1 className="align-middle" style={ {'font':'normal normal normal 66px/97px Anton'}}>{props.title}</h1>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    title: state.post.title
  }
}

export default connect(mapStateToProps)(PostTitle)