import { SearchRepositoriesSuccessAction, SearchRepositoriesErrorAction } from "../actions";
import { RepositoriesState } from "./repositoriesReducer";

export function searchRepositories(state: RepositoriesState): RepositoriesState {
    return {
        ...state,
        loading: true,
        error: null,
        data: []
    } 
}

export function searchRepositoriesSuccess(state: RepositoriesState, action: SearchRepositoriesSuccessAction): RepositoriesState {
    return {
        ...state,
        loading: false,
        error: null,
        data: action.payload
    }
}


export function searchRepositoriesError(state: RepositoriesState, action: SearchRepositoriesErrorAction): RepositoriesState {
    return {
        ...state,
        loading: false,
        error: action.payload,
        data: []
    }
}