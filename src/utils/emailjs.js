import emailjs from 'emailjs-com';

export const initializeEmailJS = () => {
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;
  
  if (!userId) {
    console.warn('EmailJS User ID is not set. Email functionality will not work.');
    return;
  }
  
  emailjs.init(userId);
  console.log('EmailJS initialized successfully');
};
