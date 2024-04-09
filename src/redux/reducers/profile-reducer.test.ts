import profileReducer from "./profile-reducer";
import {addPostActionCreator, deletePostAC} from "../actions/profileAction";


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 11}],
    newPostText: 'it-kamasutra',
    profile: null,
    status: ""
}
it("length of posts should be incremented", ()=>{
    let action = addPostActionCreator("hello")
    let newState = profileReducer(initialState,action)

    expect(newState.posts.length).toBe(3);
})

it("length of posts should be decremented", ()=>{
    let action = deletePostAC(1)
    let newState = profileReducer(initialState,action)

    expect(newState.posts.length).toBe(1);
})
