"use client";

import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let animationFrameId: number;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", setCanvasSize);
    setCanvasSize();

    // Palet warna estetik sesuai tema (Rajutan/Krem/Cokelat/Peach/Warm White)
    // rgba strings agar bisa kita atur opacity secara independen
    const colors = [
      "210, 180, 140", // Tan
      "222, 184, 135", // Burlywood
      "245, 245, 220", // Beige
      "255, 228, 196", // Bisque
      "250, 235, 215", // AntiqueWhite
      "255, 250, 240", // FloralWhite
      "205, 133, 63",  // Peru (aksen kecokelatan)
    ];

    class Particle {
      x: number;
      y: number;
      size: number;
      colorStr: string;
      speedY: number;
      speedX: number;
      opacity: number;
      opacitySpeed: number;
      maxOpacity: number;
      phase: number; // untuk pergerakan organik (sin wave)

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        // Ukuran partikel sangat bervariasi: ada debu sangat kecil, ada bola bokeh yang agak besar
        this.size = Math.random() * 4 + 0.5;
        if (Math.random() > 0.95) this.size = Math.random() * 8 + 4; // 5% partikel besar (bokeh)

        this.colorStr = colors[Math.floor(Math.random() * colors.length)];
        
        // Pergerakan melayang sangat lambat ke atas (seperti debu melawan gravitasi halus)
        this.speedY = Math.random() * -0.3 - 0.1; 
        this.speedX = Math.random() * 0.2 - 0.1;
        
        // Pendaran (Opacity pulsing)
        this.maxOpacity = Math.random() * 0.5 + 0.3; // max opacity 0.3 - 0.8
        this.opacity = Math.random() * this.maxOpacity;
        this.opacitySpeed = Math.random() * 0.005 + 0.002;
        
        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        if (!canvas) return;

        // Gerak organik menyamping
        this.phase += 0.01;
        this.x += this.speedX + Math.sin(this.phase) * 0.1;
        this.y += this.speedY;

        // Pulsasi cahaya (fade in / out berkelanjutan)
        this.opacity += this.opacitySpeed;
        if (this.opacity >= this.maxOpacity || this.opacity <= 0.05) {
          this.opacitySpeed = -this.opacitySpeed;
        }

        // Reset partikel jika sudah melewati layar atas
        if (this.y < -this.size) {
          this.y = canvas.height + this.size;
          this.x = Math.random() * canvas.width;
          this.opacity = 0.05; // mulai dari pudar
          this.opacitySpeed = Math.abs(this.opacitySpeed);
        }
        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.x < -this.size) this.x = canvas.width + this.size;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.opacity); // Hindari alpha negatif
        
        // Efek bercahaya / Bokeh (Radial Gradient)
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, `rgba(${this.colorStr}, 1)`);
        gradient.addColorStop(0.4, `rgba(${this.colorStr}, 0.6)`);
        gradient.addColorStop(1, `rgba(${this.colorStr}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const init = () => {
      particlesArray = [];
      // Jangan terlalu padat agar terlihat mewah dan estetik, tidak sumpek
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 12000);
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      // Gunakan clearRect sepenuhnya agar background asli website tetap terlihat utuh
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[0] opacity-80"
      style={{ background: 'transparent' }}
    />
  );
}
