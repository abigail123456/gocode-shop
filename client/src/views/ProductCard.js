import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function ProductCard() {
  const { id: _id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`/api/products/${_id}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, [_id]);

  return (
    <Card sx={{ maxWidth: 250, display: "flex" }}>
      <CardActionArea sx={{ display: "flex", flexDirection: "column" }}>
        {/* <Box sx={{ display: "flex", flexDirection: "column" }}> */}
        <CardMedia
          component="img"
          height="auto"
          max-width="100% "
          image={product?.image}
          alt={product?.title}
        />

        <CardContent sx={{ display: "1 0 auto" }}>
          <Typography gutterBottom variant="h5" component="div">
            {product?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product?.description}
          </Typography>
        </CardContent>
        {/* </Box> */}
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
