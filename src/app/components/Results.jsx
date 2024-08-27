"use client";
import React from "react";
import { useState, useEffect } from "react";
import FoodCard from "./MyCard";
import MyCard from "./MyCard";

export default function Results({ results }) {
  return (
    <div>
      {results?.map((x) => {
        <MyCard title={x.name} imageUrl={x.img} />;
      })}
    </div>
  );
}
