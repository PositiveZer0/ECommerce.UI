import React from "react";
import Grid from "@mui/material/Grid";
import type { Product } from "../../../types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <Grid container spacing={3} sx={{ py: 2 }}>
      {products.map((p: Product) => (
        <Grid key={p.id}>
          <ProductCard product={p} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
