// ItemsPage.tsx
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { Suspense } from "react";
import { fetchItems } from "@/api"; // Importa la función

const ItemsList = async ({ search }: { search: string }) => {
  if (!search) {
    return <div>No se proporcionó búsqueda</div>;
  }

  const results = await fetchItems(search);

  return (
    <section>
      <article className="grid gap-4">
        {results.map((item: { id: string; thumbnail: string; title: string; price: number; address?: { city_name?: string } }) => (
          <Link key={item.id} className="flex gap-4" href={`/items/${item.id}`}>
            <img src={item.thumbnail} alt={item.title}></img>
            
            <div>
              <p className="text-xl font-bold">
                {Number(item.price).toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
              </p>
              <p>{item.title}</p>
            </div>
            <span className="ml-auto text-sm lowercase opacity-50">
              {item.address?.city_name || "No ciudad"}
            </span>
          </Link>
        ))}
      </article>
    </section>
  );
};

export default function ItemsPage({ searchParams }: { searchParams: { search: string } }) {
  const search = searchParams?.search;

  return (
    <Suspense fallback={<div>Cargando productos...</div>}>
      <ItemsList search={search} />
    </Suspense>
  );
}
