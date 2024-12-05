import "./LocationRestaurantMap.css";

function LocationRestaurantMap() {
  return (
    <div className="location-container-map" onClick={()=> window.open("https://maps.app.goo.gl/Ro3Rour6P7i9nbAX9")}>
      <img src="public/location.png" alt="Map"/>
      <p className="location-text-map">
        We are located on Veerstraat 41
      </p>
    </div>
  );
};

export default LocationRestaurantMap;