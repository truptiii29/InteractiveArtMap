import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import artLocations from "../data/artData";


// Fix Leaflet marker icons

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});


// CATEGORY COLORS

const categoryColors = {
  "Ancient Art": "#b63b3b",
  "Medieval Art": "#d97706",
  "Folk Art": "#2f855a",
  "Miniature Art": "#2563eb",
  "Modern Art": "#6b46c1",
};


// CREATE COLORED MARKER

function createMarkerIcon(category) {

  const color =
    categoryColors[category] || "#8b5e3c";

  return L.divIcon({
    className: "custom-marker",

    html: `
      <div
        style="
          width: 32px;
          height: 32px;
          background: ${color};
          border: 3px solid white;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 3px 10px rgba(0,0,0,0.3);
        "
      >
        <div
          style="
            width: 8px;
            height: 8px;
            background: white;
            border-radius: 50%;
            position: absolute;
            top: 9px;
            left: 9px;
          "
        ></div>
      </div>
    `,

    iconSize: [32, 32],

    iconAnchor: [16, 32],

    popupAnchor: [0, -30],
  });
}


function ArtMap({
  selectedLocation,
  setSelectedLocation,
}) {

  return (

    <MapContainer
      center={[22.9734, 78.6569]}
      zoom={5}
      scrollWheelZoom={true}

      style={{
        height: "100%",
        width: "100%",
      }}

      className="leaflet-map"
    >

      {/* MAP TILES */}

      <TileLayer
        attribution='&copy; OpenStreetMap contributors'

        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />


      {/* MARKERS */}

      {artLocations.map((location, index) => {

        const lat =
          location.latitude ??
          location.lat;

        const lng =
          location.longitude ??
          location.lng;

        // Skip invalid locations

        if (!lat || !lng) return null;

        return (

          <Marker

            key={location.id || index}

            position={[lat, lng]}

            icon={
              createMarkerIcon(
                location.category
              )
            }

            eventHandlers={{
              click: () => {
                setSelectedLocation(location);
              },
            }}

          >

            <Popup>

              <div className="popup-content">

                <h3>
                  {location.name}
                </h3>

                <p>
                  {location.artForm}
                </p>

                <small>
                  {location.state}, India
                </small>

              </div>

            </Popup>

          </Marker>

        );

      })}

    </MapContainer>

  );

}


export default ArtMap;