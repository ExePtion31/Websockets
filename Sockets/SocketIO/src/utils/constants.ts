export const CONTROLLERS = {
    SocketController: Symbol.for('SocketController'),
};

export const ADAPTERS = {
    SocketAdapter: Symbol.for('SocketAdapter'),
};

export const UTILS = {
    Logger: Symbol.for('Logger'),
};

export const CONSTANTS = {
    TIMEZONE: 'America/Bogota',
};

export const SOCKET_EVENTS = {
    connection: 'connection',
    messagefromclient: 'chat:MessageFromClient',
    Typing: 'chat:Typing',
    messagefromserver: 'chat:MessageFromServer',
};
