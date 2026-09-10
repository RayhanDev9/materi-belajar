import { Category } from "../src/type-alias";
import { Product } from "../src/type-alias";
describe("", () => {
  it("should be able to use type alias", () => {
    let category: Category = {
      id: 1,
      name: "Elektronik",
      description: "Elektronik adalah barang yang menggunakan listrik",
    };

    let product: Product = {
      id: "1",
      name: "leptop",
      price: 10000000,
      category: category,
      description:
        "Leptop adalah barang elektronik yang digunakan untuk bekerja",
    };
    console.info(product);
  });
});
