export function mastersHasErrored(bool) {
    return {
        type: 'MASTERS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function mastersIsLoading(bool) {
    return {
        type: 'MASTERS_IS_LOADING',
        isLoading: bool
    };
}

export function mastersFetchDataSuccess(masters) {
    return {
        type: 'MASTERS_FETCH_DATA_SUCCESS',
        masters
    };
}

export function mastersFetchData(url) {
    return (dispatch) => {
        dispatch(mastersIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(mastersIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((masters) => dispatch(mastersFetchDataSuccess(masters)))
            .catch((error) => {
                console.log(error);
                dispatch(mastersHasErrored(true));
            });
    }
}