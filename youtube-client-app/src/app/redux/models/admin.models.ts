export interface AdminCard {
  title: string;
  description: string;
  img: string;
  link: string;
  date: string;
  tags: string[];
  id: string;
}

export type AdminCardAddProps = AdminCard;

export interface AdminState {
  admin: AdminCard[];
}
