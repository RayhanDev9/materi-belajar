export interface Seller {
  id: string;
  name: string;

  address: string;
  readonly npwp? : string;
  readonly nib : string;
}
