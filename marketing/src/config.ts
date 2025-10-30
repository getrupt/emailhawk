// Application configuration
// Environment variables are accessed via process.env in Bun

const getAppUrl = () => {
  // Use environment variable if available, otherwise fallback to production URL
  return process.env.VITE_APP_URL || 'https://app.emailhawk.dev';
};

export const config = {
  // App URL from environment variable, fallback to production URL
  appUrl: getAppUrl(),
  
  // Helper function to get registration URL
  getRegisterUrl: () => {
    const baseUrl = getAppUrl();
    return `${baseUrl}/register`;
  },
  
  // Helper function to get login URL
  getLoginUrl: () => {
    const baseUrl = getAppUrl();
    return `${baseUrl}/login`;
  },
  
  // Helper function to get dashboard URL
  getDashboardUrl: () => {
    const baseUrl = getAppUrl();
    return `${baseUrl}/dashboard`;
  },
};

