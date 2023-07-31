const socket = io();
const SOCKET_EVENTS = {
    connection: 'connection',
    messagefromclient: 'chat:MessageFromClient',
    Typing: 'chat:Typing',
    messagefromserver: 'chat:MessageFromServer',
}

let messages = document.getElementById('message');
let username = document.getElementById('username');
let buttonSend = document.getElementById('sendButton');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

buttonSend.addEventListener('click', () => {
    socket.emit(SOCKET_EVENTS.messagefromclient, {
        username: username.value,
        message: messages.value
    })
})

messages.addEventListener('keypress', (e) => {
    socket.emit(SOCKET_EVENTS.Typing, {
        username: username.value
    });
})

socket.on(SOCKET_EVENTS.messagefromserver, (data) => {
    actions.innerHTML = '';
    output.innerHTML += `<p><strong>${data.username}</strong>: ${data.message}</p>`;
})

socket.on(SOCKET_EVENTS.Typing, (data) => {
    actions.innerHTML = `<p><em>${data.username}</em> is typing a message...</p>`;
})