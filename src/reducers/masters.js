export function mastersHasErrored(state = false, action) {
    switch (action.type) {
        case 'MASTERS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function mastersIsLoading(state = false, action) {
    switch (action.type) {
        case 'MASTERS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function masters(state = [], action) {
    switch (action.type) {
        case 'MASTERS_FETCH_DATA_SUCCESS':
            return action.masters;

        default:
            return state;
    }
}