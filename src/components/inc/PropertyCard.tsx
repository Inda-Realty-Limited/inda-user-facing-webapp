import { Button, Text } from "../base";
import { Card } from "./Card";

interface PropertyCardProps {
  image?: string;
  address: string;
  type: string;
  price: string;
  rentalIncome: string;
  oneYearReturn: string;
  fiveYearReturn: string;
  investmentScore: string;
  onOfferClick: () => void;
}

export const PropertyCard = ({
  image,
  address,
  type,
  price,
  rentalIncome,
  oneYearReturn,
  fiveYearReturn,
  investmentScore,
  onOfferClick,
}: PropertyCardProps) => {
  return (
    <Card className="flex flex-col">
      {image && (
        <img
          src={image}
          alt={address}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}
      <div className="p-4">
        <Text fof="m">{address}</Text>
        <Text>{type}</Text>
        <Text>Price: {price}</Text>
        <Text>Rental Income: {rentalIncome}</Text>
        <Text>1-Year Return: {oneYearReturn}</Text>
        <Text>5-Year Return: {fiveYearReturn}</Text>
        <Text>Investment Score: {investmentScore}</Text>
        <Button onClick={onOfferClick} className="mt-2">
          Make an Offer
        </Button>
      </div>
    </Card>
  );
};
