import 'reflect-metadata';
import { Container } from 'inversify';
import { CONTROLLERS, ADAPTERS, UTILS } from './utils/constants';
import { SocketController } from './controllers/SocketController';
import { SocketControllerImpl } from './controllers/SocketControllerImpl';

import { SocketAdapter } from './adapters/SocketIO/SocketAdapter';
import { SocketAdapterImpl } from './adapters/SocketIO/SocketAdapterImpl';

import { Logger } from './utils/Logger/Logger';
import { WinstonLogger } from './utils/Logger/Winston/WinstonLogger';

const AppContainer = new Container();
AppContainer.bind<SocketController>(CONTROLLERS.SocketController).to(SocketControllerImpl);
AppContainer.bind<SocketAdapter>(ADAPTERS.SocketAdapter).to(SocketAdapterImpl);
AppContainer.bind<Logger>(UTILS.Logger).to(WinstonLogger);

export { AppContainer };
