import { URL } from "@/configs/app"

const getMenus = async () => {
  const res = await fetch(`${URL.BASE}/store/menus`);

  if (!res.ok) throw new Error("Failed to fetch menus");

  return res.json();
}

export { getMenus }