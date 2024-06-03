import { uuidUtility } from '../../../../../src/core/utils/uuid/uuid-utility';
import { AggregateFactory } from '../../../../../src/domain/domain-object/aggregate-factory';
import { CompanyAttrs, CompanyParams } from '../../domain-data/company/params';
import { CompanyAddedEvent, AddCompanyDomainCommand } from '../../domain-data/company/add-company/a-params';
import { CompanyAR } from './a-root';

export class CompanyCmdARFactory extends AggregateFactory<CompanyParams> {
  create(command: AddCompanyDomainCommand): CompanyAR {
    const attrs = { id: uuidUtility.getNewUUID(), ...command };
    const company = new CompanyAR(attrs, 0, this.logger);
    company.getHelper().registerEvent<CompanyAddedEvent>('CompanyAddedEvent', command);
    return company;
  }

  restore(attrs: CompanyAttrs, version: number): CompanyAR {
    return new CompanyAR(attrs, version, this.logger);
  }
}
