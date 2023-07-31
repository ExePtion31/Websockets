import { SocketController } from './SocketController';
import { injectable, inject } from 'inversify';
import { ADAPTERS } from '../utils/constants';
import { SocketAdapter } from '../adapters/SocketIO/SocketAdapter';

@injectable()
export class SocketControllerImpl implements SocketController {
    constructor(@inject(ADAPTERS.SocketAdapter) private socketAdapter: SocketAdapter) {}
    handler(): void {
        this.socketAdapter.startServer();
    }
}
