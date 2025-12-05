import React from "react";
import "./HomePage.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

export  const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="app">
      {data.map((data, index) => {
        const {
          title,
          location,
          area,
          built_year,
          rooms,
          total_price,
          meter_price,
          floor,
          elevator,
          parking,
          storage,
          description,
          url,
        } = data;

        return (
          <article className="card" key={index}>
            <h3>{title}</h3>
            <p className="location">{location}</p>

            <div className="info">
              <p>متراژ: {area} متر</p>
              <p>تعداد اتاق: {rooms}</p>
              <p>سال ساخت: {built_year}</p>
              <p>قیمت: {total_price}</p>
              <p>واحد: {floor}</p>
            </div>

            <div className="features">
              <span>{elevator}</span>
              <span>{parking}</span>
              <span>{storage}</span>
            </div>


            {/* ✅ Add Link to Detail page using title */}
            <Link
              to={`/detail/${encodeURIComponent(title)}`}
              className="detail-link"
            >
              مشاهده جزئیات
            </Link>
          </article>
        );
      })}
    </div>
  );
};
