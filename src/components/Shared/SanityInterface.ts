import { Image as IImage } from "sanity";

export interface IProducts {
        _id: string;
        price: number;
        totalPrice: number;
        title: string;
        subtitle: string;
        description: string;
        productcare: string[];
        images: IImage[];
        currency: string;
        quantity: number;
        slug: {
          current: string;
        },
        category: {
          title: string;
          _id: string;
        },
      }