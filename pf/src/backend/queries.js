import supabase from "./client";

export async function getProducts() {
  const { data } = await supabase.from("products").select("*");
  return data;
}
