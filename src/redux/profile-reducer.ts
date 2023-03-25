import {ActionsType, PostType, ProfilePageType, UPDATE_NEW_POST_TEXT} from "./store";



 const profileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            const newState: ProfilePageType = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
            return newState;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            const newState: ProfilePageType = {
                ...state,
                newPostText: action.newText
            };
            return newState;
        }
        default:
            return state;
    }
}

export default profileReducer;