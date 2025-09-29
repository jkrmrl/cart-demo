export interface Product {
  id: string;
  productName: string;
  description: string;
  price: number;
}

export interface ProductContextType {
  products: Product[];
}
