import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import ProcessPreview from '../components/home/ProcessPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';
import BlogPreview from '../components/home/BlogPreview';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Norivane | Expert Exit Strategy Coaching for CEOs';
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <ProcessPreview />
      <TestimonialsSection />
      <BlogPreview />
      <CtaSection />
    </>
  );
};

export default HomePage;
