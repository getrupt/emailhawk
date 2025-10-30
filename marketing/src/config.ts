// Application configuration
// Environment variables are accessed via import.meta.env in Vite/Bun

export const config = {
  // App URL from environment variable, fallback to production URL
  appUrl: 'https://app.emailhawk.dev',
  
  // Helper function to get registration URL
  getRegisterUrl: () => {
    const baseUrl = 'https://app.emailhawk.dev';
    return `${baseUrl}/register`;
  },
  
  // Helper function to get login URL
  getLoginUrl: () => {
    const baseUrl = 'https://app.emailhawk.dev';
    return `${baseUrl}/login`;
  },
  
  // Helper function to get dashboard URL
  getDashboardUrl: () => {
    const baseUrl = 'https://app.emailhawk.dev';
    return `${baseUrl}/dashboard`;
  },
};

