import React from 'react'

import {connect} from 'react-redux'

function ViewPost(props){
  return(
    <>
    <div className="card" style="width: 18rem;">
    <img className="card-img-top" src="..." alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return(
    posts = state.post.posts
  )
}
// const mapDispatchToProps = (dispatch) => {
//   return(

//   )
// }
export default connect(mapStateToProps)(ViewPost)