import { useEffect, useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import "./InteractiveMap.css";

import artLocations from "../data/artLocations";

function MapController({ location }) {
  const map = useMap();

  useEffect(() => {
    if (!location) return;

    map.flyTo(location.position, 6, {
      duration: 1.2
    });
  }, [location, map]);

  return null;
}

function createPin(color) {
  return L.divIcon({
    className: "custom-pin-container",
    html: `
      <div
        class="custom-map-pin"
        style="--pin-color: ${color};"
      >
        <div class="pin-circle"></div>
      </div>
    `,
    iconSize: [42, 42],
    iconAnchor: [21, 42],
    popupAnchor: [0, -42]
  });
}

function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState(artLocations[0]);

  return (
    <main className="interactive-page">
      <header className="map-page-header">
        <div>
          <p className="map-eyebrow">INDIAN ART HERITAGE</p>
          <h1>Explore India's Art Map</h1>
          <p>Discover artistic traditions across India.</p>
        </div>

        <div className="location-count">
          <strong>{artLocations.length}</strong>
          <span> Art Locations</span>
        </div>
      </header>

      <section className="interactive-layout">
        <div className="map-section">
          <MapContainer
            center={[22.5, 79.5]}
            zoom={5}
            minZoom={4}
            maxZoom={10}
            scrollWheelZoom={true}
            className="heritage-map"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MapController location={selectedLocation} />

            {artLocations.map((location) => (
              <Marker
                key={location.id}
                position={location.position}
                icon={createPin(location.color)}
                eventHandlers={{
                  click: () => {
                    setSelectedLocation(location);
                  }
                }}
              >
                <Popup>
                  <div className="map-popup">
                    <strong>{location.name}</strong>
                    <span>{location.artForm}</span>
                    <button onClick={() => setSelectedLocation(location)}>
                      View Details
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          <div className="map-legend">
            <div>
              <span className="legend-dot" style={{ background: "#b52b35" }} />
              Ancient Art
            </div>
            <div>
              <span className="legend-dot" style={{ background: "#d97706" }} />
              Medieval Art
            </div>
            <div>
              <span className="legend-dot" style={{ background: "#16803d" }} />
              Folk Art
            </div>
            <div>
              <span className="legend-dot" style={{ background: "#2563eb" }} />
              Miniature Art
            </div>
            <div>
              <span className="legend-dot" style={{ background: "#7c3aed" }} />
              Modern Art
            </div>
          </div>
        </div>

        <aside className="info-panel">
          <div className="featured-label">SELECTED HERITAGE LOCATION</div>
          <h2>{selectedLocation.name}</h2>
          <p className="state-name">{selectedLocation.state}</p>

          <div className="art-form-card">
            <span className="small-label">ART TRADITION</span>
            <h3>{selectedLocation.artForm}</h3>
          </div>

          {selectedLocation.images && selectedLocation.images.length > 0 && (
            <div className="image-gallery">
              <div className="gallery-heading">
                <span>VISUAL HERITAGE</span>
                <small>{selectedLocation.images.length} Image</small>
              </div>

              <div className="gallery-grid">
                {selectedLocation.images.map((image, index) => {
                  const imageUrl = typeof image === "string" ? image : image.url;
                  const altText =
                    typeof image === "string"
                      ? `${selectedLocation.name} art ${index + 1}`
                      : `${selectedLocation.name} - ${image.name}`;

                  return (
                    <div className="gallery-item" key={index}>
                      <img
                        src={imageUrl}
                        alt={altText}
                        loading="lazy"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="info-section">
            <h3>History</h3>
            <p>{selectedLocation.history}</p>
          </div>

          <div className="significance-card">
            <h3>Cultural Significance</h3>
            <p>{selectedLocation.significance}</p>
          </div>

          <div className="info-section">
            <h3>Artists & Traditions</h3>
            <div className="artist-tags">
              {selectedLocation.artists.map((artist, index) => (
                <span className="artist-tag" key={index}>{artist}</span>
              ))}
            </div>
          </div>

          <div className="info-section">
            <h3>Notable Art & Works</h3>
            <ul className="artwork-list">
              {selectedLocation.artworks.map((artwork, index) => (
                <li key={index}>{artwork}</li>
              ))}
            </ul>
          </div>

          <div className="category-card">
            <span>CATEGORY</span>
            <h3>{selectedLocation.category}</h3>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default InteractiveMap;