import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Detail.css";

const Detail = () => {
  const { title } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedCard = data.find(
          (item) => item.title === decodeURIComponent(title)
        );
        setCard(selectedCard || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [title]);

  if (loading) return <p className="loading-text">در حال بارگذاری...</p>;
  if (!card) return <p className="not-found-text">موردی یافت نشد</p>;

  return (
    <div className="detail-container">
      <h1 className="detail-title">{card.title}</h1>
      <p className="detail-location">{card.location}</p>

      <div className="detail-info">
        <p className="info-item">متراژ: {card.area} متر</p>
        <p className="info-item">تعداد اتاق: {card.rooms}</p>
        <p className="info-item">سال ساخت: {card.built_year}</p>
        <p className="info-item">قیمت کل: {card.total_price}</p>
        <p className="info-item">قیمت هر متر: {card.meter_price}</p>
        <p className="info-item">طبقه: {card.floor}</p>
      </div>

      <div className="detail-features features">
        <span className="feature-item">{card.elevator}</span>
        <span className="feature-item">{card.parking}</span>
        <span className="feature-item">{card.storage}</span>
      </div>

      <p className="detail-description">{card.description}</p>

      <p className="detail-link-text">
        لینک آگهی:{" "}
        <a
          href={card.url}
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          مشاهده در دیوار
        </a>
      </p>

      <Link to="/" className="back-link">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
};

export default Detail;
