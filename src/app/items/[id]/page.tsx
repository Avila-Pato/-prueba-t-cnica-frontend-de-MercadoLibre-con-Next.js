/* eslint-disable @next/next/no-img-element */
"use  client"
// ItemPage.tsx
import { fetchItemDetails, fetchItemDescription } from "@/api"; 

export default async function ItemPage({ params: { id } }: { params: { id: string } }) {
  const item = await fetchItemDetails(id);
  const {description} = await fetchItemDescription(id);

  


  return (
    <section>
      <img src={item.thumbnail} alt={item.thumbnail} />
      <p>{item.title}</p>
      <hr />
      <p>{description}</p>
    </section>
  );
}
