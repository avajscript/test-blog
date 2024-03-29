import React from "react";
import Render from "./Render";
import supabase from "../../../../utils/supabaseClient";

export async function generateStaticParams() {
  const { data, error } = await supabase.from("aaj_recipes").select("name");

  return data.map((recipe) => {
    return { slug: recipe.title };
  });
}

const fetchData = async (name) => {
  const { data, error } = await supabase
    .from("aaj_recipes")
    .select(
      "*, aaj_recipe_category(name), food_instances(quantity, food_id(name, description, icon) )"
    )
    .eq("name", name)
    .maybeSingle();

  const { data: recipe_joins, error: joins_error } = await supabase
    .from("recipe_joins")
    .select("sub_recipe_id(name, url)")
    .eq("main_recipe_id", data.id);
  return { recipe: data, recipe_joins };
};

const page = async ({ params }) => {
  const slug = decodeURI(params.slug);
  const { recipe, recipe_joins } = await fetchData(slug);

  return (
    <>
      <Render recipe_joins={recipe_joins} recipe={recipe} params={slug} />
    </>
  );
};

export default page;
