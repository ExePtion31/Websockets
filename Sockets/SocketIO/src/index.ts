import { AppContainer } from './inversify.config';
import { CONTROLLERS } from './utils/constants';
import { SocketController } from './controllers/SocketController';

let controller;

function handler() {
    controller = controller ?? AppContainer.get<SocketController>(CONTROLLERS.SocketController);
    return controller.handler();
}

handler();
