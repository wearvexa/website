import { URL } from "@/configs/app"

const getMainLayout = async () => {
  const res = await fetch(`${URL.BASE}/store/layouts/main`);

  if (!res.ok) throw new Error("Failed to fetch layouts");

  return res.json();
}

export { getMainLayout };