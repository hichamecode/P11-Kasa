import CollapseElement from "../components/CollapseElement";
import Layout from "../components/Layout";
import SlideShow from "../components/SlideShow";
import Tag from "../components/Tag";
import RatingStar from "../components/RatingStar";

import "../components/SlideShow.scss";
import "../pages/Rent.scss"

import data from "../datas/data.json";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";

const Rent = () => {
  const { id } = useParams();
  const [rent, setRent] = useState(data.find((item) => item.id === id))

  // setRent est censé être mis à jour depuis une API (données dynamiques)

  const navigate = useNavigate();

  useEffect(() => {

    if (rent === undefined) {
      navigate("/404");
    }
  }, [rent, navigate]);

  if (!rent) {
    return null;
  }

  return (
    <Layout className="layout">
      <SlideShow cover={rent.cover} pictures={rent.pictures} />

      <header className="rent-header">
        <div className="title-location-container">
          <h1 className="title">{rent.title}</h1>
          <p className="location">{rent.location}</p>
        </div>

        <div className="host-rating-container">
          <div className="host-container">
            <p className="host-name">{rent.host.name}</p>
            <img
              className="host-image"
              src={rent.host.picture}
              alt={rent.host.name}
            />
          </div>
          <RatingStar ratingOfRent={parseInt(rent.rating, 10)} />
        </div>
      </header>

      <div className="tag-container">
        {rent.tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
      <div className="collapse-container collapse-container-rent">
        <CollapseElement
          title="Description"
          text={rent.description}
          className="collapse-element-rent"
        />
        <CollapseElement
          title="Equipements"
          text={
            <ul>
              {rent.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
          className="collapse-element-rent"
        />
      </div>
    </Layout>
  );
};

export default Rent;
