import { FC } from "react";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";

export const ContactPage: FC = () => {
  return (
    <div style={{
      display: "grid", 
      placeItems: "center",
      animation: "fadeIn 0.5s ease",
      position: "relative"
    }}>
      <div className="back" style={{ position: "absolute", top: "2rem", left: "1rem", fontWeight: 700, fontSize: "18px", color: "#9DA5B9" }}>
        <Link to={"/"}>Назад</Link>
      </div>
      <m.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >Контакты</m.h2>
    </div>
  )
};