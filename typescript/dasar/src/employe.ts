export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  salary: number;
}

export interface Maneger extends Employee {
  numberOfTeams: number;
}