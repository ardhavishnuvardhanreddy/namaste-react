import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";
const Body = () =>{
    return (
        <div className="body">
             <div className="search"></div>
             <div className="res-container">
               {
                resList.map(restaurant=> <RestaurantCard key={restaurant.data.id}resData={restaurant}/>)
               }
              
             </div>
        </div>
    );
};
export default Body;