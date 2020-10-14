import React from "react";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from "leaflet";

import "leaflet/dist/leaflet.css";
import "../../styles/pages/orphanages-map.css";
import mapMarkerImg from "../../assets/map-marker.svg";

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const OrphanagesMap: React.FC = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy " />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita {":)"}</p>
        </header>

        <footer>
          <strong>Umuarama</strong>
          <span>Paraná</span>
        </footer>
      </aside>

      <Map
        center={[-23.7659865, -53.2934951]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker position={[-23.7659865, -53.2934951]} icon={mapIcon}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Lar das meninas
            <Link to="">
              <FiArrowRight size={20} color="#ffffff" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#ffffff" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
