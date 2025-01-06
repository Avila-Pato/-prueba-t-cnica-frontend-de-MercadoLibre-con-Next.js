import ItemPage from "./app/items/[id]/page";

// api.ts
export const fetchItems = async (search: string) => {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=4`
    );
    const data = await response.json();
    return data.results;
  };
  
  export const fetchItemDescription = async (id: string) => {
    const response = await fetch(
      `https://api.mercadolibre.com/items/${id}/description`
    );
    const data = await response.json();

    const { plain_text } = data;
    return {
      ...ItemPage,
      description: plain_text
    };
  };
  
  export const fetchItemDetails = async (id: string) => {
    const response = await fetch(
      `https://api.mercadolibre.com/items/${id}`
    );
    return response.json();
  };
  