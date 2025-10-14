'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-blue-600 dark:text-blue-400 mb-4 animate-pulse">
            404
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Oops! Page Not Found
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          The page you&apos;re looking for seems to have wandered off into the digital void.
          Don&apos;t worry, even the best developers encounter 404s sometimes!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Go Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Fun Message */}
        <div className="mt-12 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            💡 <strong>Pro tip:</strong> This 404 page was built with Next.js 14, Tailwind CSS, and a sprinkle of developer humor!
          </p>
        </div>
      </div>
    </div>
  );
}
