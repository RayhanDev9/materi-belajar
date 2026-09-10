export enum CustomerType {
  Reguler = "Reguler",
  Gold = "Gold",
  Platinum = "Platinum",
}

export type Customer = {
  id: string;
  name: string;
  type: CustomerType;
};
