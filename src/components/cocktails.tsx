// @ts-nocheck

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import data from "../data/data.json";
import defaultImage from "../assets/default.jpg";

export function Cocktails() {
  const cocktails = data.cocktails;

  return (
    <>
      <div className="mt-8 mb-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Available Cocktails
        </h1>
      </div>
      <div className="flex flex-row justify-center flex-wrap">
        {cocktails.map((cocktail) => {
          let imagePath = new URL(
            `../assets/${cocktail.image}`,
            import.meta.url
          ).href;

          if (imagePath.endsWith("undefined")) {
            imagePath = defaultImage;
          }

          return (
            <Card className="w-full max-w-[26rem] shadow-lg mb-4 mx-1 " >
              <CardHeader floated={false} color="blue-gray mx-2">
                <img
                  src={imagePath}
                  alt=""
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="bg-black -z-10" />
              </CardHeader>
              <CardBody>
                <div className="mb-6 flex items-center justify-between">
                  <Typography
                    variant="h4"
                    color="brown"
                    className="font-medium"
                  >
                    {cocktail.name}
                  </Typography>
                </div>
                <div className="mb-4">
                  <Typography color="dark-brown" className="text-left">
                    {cocktail.ingredients.join(", ")}
                  </Typography>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </>
  );
}
