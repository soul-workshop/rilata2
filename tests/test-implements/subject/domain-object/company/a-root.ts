import { Logger } from '../../../../../src/common/logger/logger';
import { UserId } from '../../../../../src/common/types';
import { AggregateRootHelper } from '../../../../../src/domain/domain-object/aggregate-helper';
import { AggregateRoot } from '../../../../../src/domain/domain-object/aggregate-root';
import { CompanyAttrs, CompanyParams } from '../../domain-data/company/params';

export class ComapanyAR extends AggregateRoot<CompanyParams> {
  helper: AggregateRootHelper<CompanyParams>;

  constructor(protected attrs: CompanyAttrs, protected version: number, logger: Logger) {
    super();
    this.helper = new AggregateRootHelper(attrs, 'CompanyAR', version, ['admins'], logger);
  }

  isEmployeer(userId: UserId): boolean {
    return this.attrs.employeers.includes(userId);
  }

  isStaffmanager(userId: UserId): boolean {
    return this.attrs.staffManagers.includes(userId);
  }

  isAdmin(userId: UserId): boolean {
    return this.attrs.admins.includes(userId);
  }

  getShortName(): string {
    return `Company: ${this.attrs.name}`;
  }
}
