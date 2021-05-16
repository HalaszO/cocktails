import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import "./cocktailListItem.css";
// Individual item
export const CocktailListItem = ({ data }) => {
  return (
    <Card className="list-item card">
      <img
        className="card-img list-item img"
        src={data.thumbnailUrl}
        alt={`s${data.name}`}
        height="450"
      />
      <CardContent>
        <Typography variant="h5" component="p">
          {data.name}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {`Ingridients: ${data.ingridients}`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.instructions}
        </Typography>
      </CardContent>
    </Card>
  );
};
