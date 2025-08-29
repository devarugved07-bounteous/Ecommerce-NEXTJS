import React from "react";

interface RatingProps {
  rate: number;
  count: number;
}

export function Rating({ rate, count }: RatingProps) {
  return (
    <p>
      <strong>Rating:</strong> ⭐ {rate} out of 5 ({count} reviews)
    </p>
  );
}
