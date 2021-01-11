const initialState = {
    projects: [
        {id:1, title: 'first project', content:'this is the content for the first project'},
        {id:2, title: 'second project', content:'this is the content for the second project'},
        {id:3, title: 'third project', content:'this is the content for the third project'},
    ]
};

const projectReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created project ',action.project, state)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('created project ',action.err)
            return state;
        default: 
            return state
    }
    
}

export default projectReducer