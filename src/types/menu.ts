export interface MenuItem {
  id: number;
  menu_id: number;
  parent_id: number | null;
  title: string;
  url: string | null;
  icon: string | null;
  sort: number;
  children?: MenuItem[];
}

export interface Menu {
  id: number;
  name: string;
  items?: MenuItem[];
}
