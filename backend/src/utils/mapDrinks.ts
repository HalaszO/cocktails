// Input data based on the external API data
interface IdrinkDataInput {
  idDrink: string;
  strDrink: string;
  strAlcoholic: string;
  strInstructions: string;
  strDrinkThumb: string;
  // index signature property type for ingridients and measures to enable key filtering
  [key: string]: string;
}

// Output format
interface IdrinkDataOutput {
  id: string;
  name: string;
  isAlcoholic: string;
  instructions: string;
  thumbnailUrl: string;
  ingridients: string;
}

// Complete input (object with an array inside)
interface IdrinkData {
  drinks: IdrinkDataInput[];
}

const mapDrinks = ({ drinks }: IdrinkData): IdrinkDataOutput[] => {
  return drinks.map((drink) => {
    const keys = Object.keys(drink);

    // Get non-null ingridient keys
    const ingridientKeys = keys.filter((key) => {
      return key.startsWith("strIngredient") && drink[key];
    });
    // Get measurement keys
    const measurementKeys = keys.filter((key) => key.startsWith("strMeasure"));

    // Match the measurements to the ingridients, by iterating through the valid ingridient keys (through indices)
    const ingridientList = ingridientKeys
      .map((ingridientKey, index) => {
        const ingridientValue = drink[ingridientKey];
        const measurementValue = drink[measurementKeys[index]];
        // Format: "1 1/2 oz of Tequila"
        if (measurementValue) {
          return `${measurementValue.trim()} ${ingridientValue.trim()}`;
        } // do not give measurement where it's null (e.g. Salt)
        return ingridientValue.trim();
      })
      // Join it into a simple string
      .join(", ");

    // returned data object, with the required keys and format
    return {
      id: drink.idDrink,
      name: drink.strDrink,
      isAlcoholic: drink.strAlcoholic,
      instructions: drink.strInstructions,
      thumbnailUrl: drink.strDrinkThumb,
      ingridients: ingridientList,
    };
  });
};

export default mapDrinks;
