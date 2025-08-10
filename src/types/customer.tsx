export interface ICustomer {
  id?: string;
  name: string;
  phone: string;
  notes?: string;
  address?: string;
  createdAt?: Date | string;
}
