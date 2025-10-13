"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-violet-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300 dark:bg-pink-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 dark:bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-300 dark:bg-indigo-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-400 dark:text-pink-300 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${1 + Math.random() * 2}rem`,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <div
          className={`transform transition-all duration-1000 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          {/* Main heading with gradient text */}
          <h1 className="text-7xl md:text-9xl font-bold mb-6 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-400 dark:via-purple-400 dark:to-indigo-400 animate-gradient">
              I LOVE YOU
            </span>
          </h1>

          {/* Decorative hearts around the text */}
          <div className="flex justify-center gap-4 mb-8">
            <span className="text-pink-500 text-4xl animate-pulse">♥</span>
            <span className="text-purple-500 text-4xl animate-pulse animation-delay-500">
              ♥
            </span>
            <span className="text-indigo-500 text-4xl animate-pulse animation-delay-1000">
              ♥
            </span>
          </div>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light transition-all duration-1000 delay-300 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            Forever and always ✨
          </p>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
