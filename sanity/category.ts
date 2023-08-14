import { defineType, defineField } from "sanity";

export default defineType ({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
        name: "title",
        title: "Product Title",
        type: "string"
    }),
  ]  
})