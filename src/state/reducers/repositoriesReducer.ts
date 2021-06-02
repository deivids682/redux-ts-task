import { Action } from "../actions";
import { ActionType } from "../ActionType";
import { searchRepositories, searchRepositoriesError, searchRepositoriesSuccess } from "./definitions";

export interface RepositoriesState {
    loading: boolean,
    error: string | null,
    data: string []
}

const initialState = {
    loading: false,
    error: null,
    data: []
}

const reducer = (
    state: RepositoriesState = initialState, 
    action: Action
    ): RepositoriesState => {
    switch(action.type) {
        case ActionType.SEARCH_REPOSITORIES: {
            return searchRepositories(state);
        }
        case ActionType.SEARCH_REPOSITORIES_SUCCESS: {
            return searchRepositoriesSuccess(state, action);
        }
        case ActionType.SEARCH_REPOSITORIES_ERROR: {
            return searchRepositoriesError(state, action);
        }
        default: 
            return state;
    }
}

export default reducer;