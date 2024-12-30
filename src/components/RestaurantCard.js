import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData.info;
  return (
    <div data-testid="resCard" className="m-4 p-4 w-[185px] rounded-lg bg-gray-100 hover:bg-gray-200 shadow-md" >
      <img alt="Food" className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg underline">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4><span className="bg-green-500 rounded-md px-3">{avgRating}</span> stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};


// Higher Order Component

// input - RestaurantCard => RestaurantCardIsOpen

export const withIsOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-950 text-white m-2 p-1 rounded-lg">Open</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
