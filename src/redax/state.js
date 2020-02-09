let state = {
    profilePage: {
        postData: [
            { id: 1, message: 'Hi', likesCount: 0 },
            { id: 2, message: 'How are you?', likesCount: 23 },
            { id: 3, message: 'How you?', likesCount: 23 }
        ]
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Толік' },
            { id: 2, name: 'Дімич' },
            { id: 3, name: 'Паша' },
            { id: 4, name: 'Коля' },
            { id: 5, name: 'Саня' },
            { id: 6, name: 'Міша' }
        ],
        messages: [
            { id: 1, message: 'Hi', type: true },
            { id: 2, message: 'How are you?', type: false },
            { id: 3, message: 'What are you doing?', type: false },
            { id: 4, message: 'WAYD', type: true },
            { id: 5, message: 'Are you sleep?', type: false },
            { id: 6, message: 'What up', type: true }
        ]
    },
    sitebar: [
        { id: 1, name: 'Толік' },
        { id: 2, name: 'Дімич' },
        { id: 3, name: 'Паша' },
        { id: 4, name: 'Коля' },
        { id: 5, name: 'Саня' },
        { id: 6, name: 'Міша' }]
}
export let addPost = (newMessagePost) =>{
    let newPost= {
        id: 5,
            message: {newMessagePost},
            likesCount: 0 };
            state.profilePage.postData.push(newPost);
}
export let addMessage = (newMessage) =>{
    let newPost= {
        id: 5,
        message: {newMessage},
        type: true };
    state.dialogsPage.messages.push(newPost);
}

export default state