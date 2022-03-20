const initialState = {
    api: [
        {id: '0' , title: 'LIST USERS', url: 'https://reqres.in/api/users?page=2'},
        {id: '1' , title: 'SINGLE USER', url: 'https://reqres.in/api/users/2'},
        {id: '2' , title: 'LIST <RESOURCE>', url: 'https://reqres.in/api/unknown'},
        {id: '3' , title: 'SINGLE RESOURCE>', url: 'https://reqres.in/api/unknown/2'}
    ]
}

// reference req res api search mo sa google


const apiListReducer = (state = initialState, action) => {
    switch (action.type) {
            default: return state;
    }
};

export default apiListReducer;