import { client } from "../../../sanity/lib/client";

export default async function GetProducts() {
    const res = await client.fetch(`*[_type == "products"]{
        title,
        subtitle,
        price,
        _id,
        description,
        productcare,
        images,
        currency,
        slug {
          current
        },
        category -> {
          title,
          _id
       } 
         }`)
    return res;
}