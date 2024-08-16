import React, { useEffect, useRef } from 'react';

const HalfFilledCircle = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const drawHalfFilledCircle = (ctx, x, y, radius) => {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI, false); // Draw the top half of the circle
      ctx.closePath();
      ctx.fillStyle = 'gold';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x, y, radius, Math.PI, 2 * Math.PI, false); // Draw the bottom half of the circle
      ctx.closePath();
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    drawHalfFilledCircle(ctx, 50, 50, 40); // Adjust the parameters as needed
  }, []);

  return (
    <canvas ref={canvasRef} width="100" height="100" style={{ border: '1px solid #000000' }}></canvas>
  );
};

export default HalfFilledCircle;
