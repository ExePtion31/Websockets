import { SocketAdapter } from './SocketAdapter';
import { injectable, inject } from 'inversify';
import { environment } from '../../environment';
import { SOCKET_EVENTS, UTILS } from '../../utils/constants';
import { Logger } from '../../utils/Logger/Logger';
import express from 'express';
const path = require('path');
const socketIO = require('socket.io');

@injectable()
export class SocketAdapterImpl implements SocketAdapter {
    private app;
    private io;
    constructor(@inject(UTILS.Logger) private logger: Logger) {
        this.app = express();
        this.app.set('port', environment.port);
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.io = socketIO(this.configServer());
    }
    startServer(): void {
        this.logger.info('Trying to start server...');
        this.io.on(SOCKET_EVENTS.connection, (socket) => {
            this.logger.info('New Connection with ID: ' + socket.id);

            // Socket event
            socket.on(SOCKET_EVENTS.messagefromclient, (data) => {
                //emite los datos a todos
                this.io.sockets.emit(SOCKET_EVENTS.messagefromserver, data);
            });

            // Socket event
            socket.on(SOCKET_EVENTS.Typing, (data) => {
                //emite los datos a todos excepto el que envió el evento
                socket.broadcast.emit(SOCKET_EVENTS.Typing, data);
            });
        });
    }

    private configServer(): any {
        return this.app.listen(this.app.get('port'), () => {
            this.logger.debug(`Server started on port ${this.app.get('port')}`);
        });
    }
}
