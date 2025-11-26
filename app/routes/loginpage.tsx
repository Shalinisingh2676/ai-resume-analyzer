import { useState } from 'react';
import { useNavigate } from 'react-router';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      // Using Puter.js authentication
      // @ts-ignore - Puter is loaded globally
      await window.puter.auth.signIn();
      
      // Navigate to main app after successful login
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: '🚀',
      text: 'Upload & Store Resumes Securely',
    },
    {
      icon: '🤖',
      text: 'AI-Powered Resume Analysis',
    },
    {
      icon: '📊',
      text: 'Get ATS Scores & Custom Feedback',
    },
    {
      icon: '🎯',
      text: 'Match Candidates to Job Listings',
    },
  ];

  return (
    <div className="login-container">
      {/* Logo */}
      <div className="logo-container">
        <h1 className="logo-text">Resumind</h1>
      </div>

      {/* Login Card */}
      <div className="login-card">
        <div className="flex flex-col items-center gap-6 w-full relative z-10">
          {/* Title */}
          <h2 className="login-title">
            Welcome to Resumind
          </h2>

          {/* Subtitle */}
          <p className="login-subtitle">
            Your AI-powered resume analyzer for smarter hiring decisions
          </p>

          {/* Features List */}
          <div className="login-features">
            {features.map((feature, index) => (
              <div key={index} className="login-feature-item">
                <span className="login-feature-icon">{feature.icon}</span>
                <span className="login-feature-text">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="auth-button"
          >
            {isLoading ? 'Signing In...' : 'Sign In with Puter'}
          </button>

          {/* Additional Info */}
          <p className="text-sm text-center" style={{ color: 'rgba(45, 139, 155, 0.7)' }}>
            Secure authentication powered by{' '}
            <a
              href="https://puter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#2d8b9b] transition-colors"
            >
              Puter.js
            </a>
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-sm" style={{ color: 'rgba(45, 139, 155, 0.6)' }}>
          Built with React, TypeScript & AI
        </p>
      </div>
    </div>
  );
};

export default LoginPage;