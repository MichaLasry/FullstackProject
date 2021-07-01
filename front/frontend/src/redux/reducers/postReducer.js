import produce from 'immer'

const initialState = {
  title: "Posts",
  posts: [{title: '',
              date: '' ,
              magazine: 1}]
}

const reducer = produce((state,action) => {
  switch(action.type)
  {
    // case 'CREATE_POST':
    //   {state.pupils.push(action.payload)}
    //   break;
  }
}, initialState)

export default reducer