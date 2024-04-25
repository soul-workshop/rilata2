import { ModuleResolves } from '../../../src/app/module/module-resolves';
import { PersonRepository } from './domain-object/person/repo';
import { SubjectModule } from './module';

export type SubjectResolves = ModuleResolves<SubjectModule> & {
  moduleUrls: ['/api/subject-module/'],
  personRepo: PersonRepository,
}
