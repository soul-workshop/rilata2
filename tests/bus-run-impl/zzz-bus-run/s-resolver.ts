import { Bus } from '../../../src/api/bus/bus';
import { BusServerResolver } from '../../../src/api/server/bus.s-resolver';
import { ServerResolver } from '../../../src/api/server/s-resolver';
import { BusServerResolves } from '../../../src/api/server/s-resolves';
import { RilataServer } from '../../../src/api/server/server';
import { UserJwtPayload } from '../types';

export class BusRunServerResolver extends ServerResolver<BusServerResolves<UserJwtPayload>>
  implements BusServerResolver {
  init(server: RilataServer): void {
    super.init(server);
    this.resolves.bus.init(this);
  }

  getBus(): Bus {
    return this.resolves.bus;
  }
}
