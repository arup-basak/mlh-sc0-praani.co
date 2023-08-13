export default interface Product {
  productName: string;
  productId: number;
  productType: "toys" | "foods" | "medicine";
  price: number;
  description?: string;
  title: string;
  imageFileName: string;
  paymentLink: string;
}
