import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 font-semibold">
              <span>
                {item.card.info.name} - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div>
            <div className="absolute">
              <button className="px-2 py-1 bg-white shadow-lg text-green-800 rounded-lg border border-green-800 font-bold">
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-28 m-2" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
