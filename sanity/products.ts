import { defineType, defineField } from "sanity";

export default defineType ({
    name: "products",
    title: "Products",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Product Title",
            type: "string",
        }),
        defineField({
            name: "subtitle",
            title: "Product Sub Title",
            type: "string",
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        }),
        defineField({
            name: "currency",
            title: "Currency",
            type: "string",
            options: {
                list: [
                    {title: "USD" , value: "$"},
                    {title: "GBP" , value: "£"},
                    {title: "PKR" , value: "Rs"},
                ]
            }
        }),
        defineField({
            name: "price",
            title: "Product Price",
            type: "number",
        }),
        defineField({
            name: "description",
            title: "Product Description",
            type: "text",
        }),
        defineField({
            name: "productcare",
            title: "Product Care",
            type: "array",
            of: [
              { 
                 name: "care",
                 title: "Care",
                 type: "string",
              },
            ],
        }),
        defineField({
            name: "images",
            title: "Product Images",
            type: "array",
            of: [
              { 
                 name: "img",
                 title: "Images",
                 type: "image",
                 options: {
                   hotspot: true,
                 },
              },
            ],
        }),
        defineField({
            name: "category",
            title: "Product Category",
            type: "reference",
            to: [{
                type: "category",
            }],
        }),
    ]
});