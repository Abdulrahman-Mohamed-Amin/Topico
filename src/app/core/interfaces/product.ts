export interface ProductsResponse {
  products: Product[];
}


export interface Product {
  id: string;
  img: string;
  img_hover: string;
  name: string;
  price: number;
  old_price: number;
}
