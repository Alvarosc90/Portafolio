import React, { useRef, useEffect } from 'react';
import '../styles/BackgroundAnimation.css'; // Importa el archivo CSS para los estilos

const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const points: { x: number; y: number; radius: number; vx: number; vy: number; color: string }[] = [];
    const lines: { start: { x: number; y: number }; end: { x: number; y: number } }[] = [];

    const random = (min: number, max: number) => Math.random() * (max - min) + min;

    const createPoints = () => {
      for (let i = 0; i < 15; i++) { // Reducido a 10 puntos para menos densidad
        points.push({
          x: random(0, canvas.width),
          y: random(0, canvas.height),
          radius: random(2, 4),
          vx: random(-1, 1),
          vy: random(-1, 1),
          color: `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, ${random(0.5, 1)})`
        });
      }
    };

    const createLines = () => {
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          lines.push({
            start: points[i],
            end: points[j]
          });
        }
      }
    };

    const drawPoints = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const point of points) {
        ctx.fillStyle = point.color;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawLines = () => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      for (const line of lines) {
        ctx.beginPath();
        ctx.moveTo(line.start.x, line.start.y);
        ctx.lineTo(line.end.x, line.end.y);
        ctx.stroke();
      }
    };

    const updatePoints = () => {
      for (const point of points) {
        point.x += point.vx;
        point.y += point.vy;
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
      }
    };

    const animate = () => {
      updatePoints();
      drawPoints();
      drawLines();
      requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawPoints();
      drawLines();
    };

    // Inicialización
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createPoints();
    createLines();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-animation" />;
};

export default BackgroundAnimation;
