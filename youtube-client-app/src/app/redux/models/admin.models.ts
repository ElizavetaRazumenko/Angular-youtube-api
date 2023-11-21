export interface AdminCard {
  title: string;
  description: string;
  img: string;
  link: string;
  date: string;
  tags: string[];
  id: string;
}

export type AdminCardAddProps = Omit<AdminCard, 'id'>;

export interface AdminState {
  admin: AdminCard[];
}
