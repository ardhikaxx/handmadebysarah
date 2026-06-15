"use client";

import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let animationFrameId: number;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", setCanvasSize);
    setCanvasSize();

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 150,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    // Palet warna ajaib: Emas lembut, krem, cokelat muda
    const colors = ["#d4af37", "#f5deb3", "#deb887", "#fff8dc", "#faebd7"];

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;
      speedX: number;
      speedY: number;
      angle: number;
      angleSpeed: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 2 + 1;
        this.density = Math.random() * 30 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.angle = Math.random() * 360;
        this.angleSpeed = Math.random() * 0.02 - 0.01;
      }

      draw() {
        if (!ctx) return;
        // Efek bercahaya
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        // Reset shadow untuk performa
        ctx.shadowBlur = 0;
      }

      update() {
        if (!canvas) return;

        // Ayunan melayang menggunakan sinus & kosinus agar organik
        this.angle += this.angleSpeed;
        this.x += this.speedX + Math.sin(this.angle) * 0.3;
        this.y += this.speedY + Math.cos(this.angle) * 0.3;

        // Muncul dari sisi berlawanan bila keluar layar
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;

        // Menyingkir halus saat didekati mouse
        if (mouse.x != null && mouse.y != null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = forceDirectionX * force * this.density * 0.1;
            const directionY = forceDirectionY * force * this.density * 0.1;

            this.x -= directionX;
            this.y -= directionY;
          }
        }
      }
    }

    const init = () => {
      particlesArray = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 10000);
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));
      }
    };

    // Menggambar "Benang Ajaib" (garis) di antara partikel yang berdekatan
    const connect = () => {
      if (!ctx) return;
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            opacityValue = 1 - distance / 120;
            ctx.strokeStyle = `rgba(212, 175, 55, ${opacityValue * 0.2})`; // Emas pudar
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      // Gunakan fillRect semi-transparan untuk efek jejak (trails)
      ctx.fillStyle = "rgba(255, 251, 245, 0.2)"; // Warna surface web, sesuaikan jika perlu
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] opacity-70 mix-blend-multiply"
    />
  );
}
