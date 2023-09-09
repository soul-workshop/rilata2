import { DtoFieldValidator } from '../../../../../src/domain/validator/field-validator/dto-field-validator';
import { CommandValidatorMap, ValidatorMap } from '../../../../../src/domain/validator/field-validator/types';
import { AddingPersonDomainCommand } from '../../domain-data/person/add-person.a-params';
import { personAttrsVMap } from '../../domain-data/person/v-map';
import { AddingPersonUCCommand } from './params';

const addPersonAttrsVMap: ValidatorMap<AddingPersonDomainCommand> = {
  govPersonId: personAttrsVMap.govPersonId,
  name: personAttrsVMap.name,
  lastName: personAttrsVMap.lastName,
  patronomic: personAttrsVMap.patronomic,
};

export const addPersonVMap: CommandValidatorMap<AddingPersonUCCommand> = {
  AddPersonCommand: new DtoFieldValidator('dto', true, { isArray: false }, addPersonAttrsVMap),
};