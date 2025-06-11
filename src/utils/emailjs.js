import emailjs from 'emailjs-com';

// IMPORTANT: Replace these empty values with your actual EmailJS credentials
// This approach allows the site to work even if environment variables aren't set
const PRODUCTION_CONFIG = {
  USER_ID: '',    // sSDnT1cA_qkR3BmGF
  SERVICE_ID: '', // service_m0qgr6d
  TEMPLATE_ID: '' // template_rwsra3u
};

export const getEmailJSConfig = () => {
  // First try to get values from environment variables
  const envUserId = import.meta.env.VITE_EMAILJS_USER_ID;
  const envServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const envTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  
  // Check if we're in production (Vercel deployment)
  const isProduction = import.meta.env.PROD;
  
  // For production, use hardcoded values if environment variables aren't available
  return {
    userId: envUserId || (isProduction ? PRODUCTION_CONFIG.USER_ID : ''),
    serviceId: envServiceId || (isProduction ? PRODUCTION_CONFIG.SERVICE_ID : ''),
    templateId: envTemplateId || (isProduction ? PRODUCTION_CONFIG.TEMPLATE_ID : '')
  };
};

export const initializeEmailJS = () => {
  const { userId } = getEmailJSConfig();
  
  if (!userId) {
    console.warn('EmailJS User ID is not set. Email functionality will not work.');
    return false;
  }
  
  try {
    emailjs.init(userId);
    console.log('EmailJS initialized successfully');
    return true;
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
    return false;
  }
};
