import { Company } from './Company';

export class Client {
  constructor(
    public id: string,
    public firstname: string,
    public lastname: string,
    public company: Company,
  ) {}
}
