/* eslint-disable @next/next/no-img-element */
import React from "react";

export default async function ItemsPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const search = searchParams?.search;
  const { results } = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=4`
  ).then(
    (res) =>
      res.json() as Promise<{
        results: {
          id: string;
          title: string;
          thumbnail: string;
          price: number;
          currency_id: string;
          address: {
            city_name: string;
          };
        }[];
      }>
  );

//   console.log(results);

  return (
    <section>
      <article className="grid gap-4">
        {results.map((item) => (
          <div key={item.id} className="flex gap-4">
            <img src={item.thumbnail} alt={item.title}></img>
            <div>
              <p className="text-xl font-bold">
                {Number(item.price).toLocaleString("es-CL", {
                  style: "currency",
                  currency: "CLP",
                })}
              </p>
              <p>{item.title}</p>
            </div>
            <span className="ml-auto text-sm lowercase opacity-50">
              {item.address?.city_name || "No ciudad"}
            </span>
          </div>
        ))}
      </article>
    </section>
  );
}
