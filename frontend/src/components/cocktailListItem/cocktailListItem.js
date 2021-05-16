import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import "./cocktailListItem.css";
// Individual item
export const CocktailListItem = ({ data }) => {
  return (
    <Card className="list-item card">
      <div className="img-container">
        <img
          className="card-img list-item img"
          src={data.thumbnailUrl}
          alt={`s${data.name}`}
        />
      </div>
      <CardContent>
        <Typography variant="h5" component="p">
          {data.name}
        </Typography>
        <Typography
          className="ingridents"
          variant="body1"
          color="textSecondary"
          component="p"
        >
          {`Ingridients: ${data.ingridients}`}
        </Typography>
        <Typography className="instruction" variant="body2" component="p">
          {data.instructions}
        </Typography>
      </CardContent>
    </Card>
  );
};
