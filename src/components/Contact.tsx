'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiLinkedin, FiGithub, FiMail, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      // For demo purposes - in a real application, this would be an actual API call
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FiLinkedin size={20} />,
      url: 'https://linkedin.com/in/raunak-shukla'
    },
    {
      name: 'GitHub',
      icon: <FiGithub size={20} />,
      url: 'https://github.com/astatineRS'
    },
    {
      name: 'Email',
      icon: <FiMail size={20} />,
      url: 'mailto:rsworks.in@gmail.com'
    },
    {
      name: 'Twitter',
      icon: <FiTwitter size={20} />,
      url: 'https://twitter.com/RaunakS10097663'
    }
  ];
  
  return (
    <div className="section-container">
      <motion.h2 
        className="heading-xl text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>
      
      <motion.p 
        className="paragraph text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Have a project in mind or interested in collaborating? I'd love to hear from you!
      </motion.p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="heading-md mb-6">Contact Form</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-medium dark:bg-gray-dark"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-medium dark:bg-gray-dark"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-medium dark:bg-gray-dark"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-medium dark:bg-gray-dark"
              />
            </div>
            
            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="btn-primary w-full flex justify-center items-center gap-2"
            >
              {formStatus === 'submitting' ? (
                <span>Sending...</span>
              ) : (
                <>
                  <FiSend size={18} />
                  <span>Send Message</span>
                </>
              )}
            </button>
            
            {formStatus === 'success' && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 dark:text-green-400 text-center"
              >
                Thank you! Your message has been sent successfully.
              </motion.p>
            )}
            
            {formStatus === 'error' && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-600 dark:text-red-400 text-center"
              >
                Sorry, there was an error sending your message. Please try again.
              </motion.p>
            )}
          </form>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:pl-12"
        >
          <h3 className="heading-md mb-6">Connect With Me</h3>
          
          <p className="paragraph mb-8">
            You can also reach out to me directly through email or connect with me on social platforms.
            I'm always open to discussing new projects, opportunities, or just having a chat.
          </p>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Email Me Directly</h4>
              <a 
                href="mailto:raunak9554@gmail.com" 
                className="text-blue-dark dark:text-blue-medium hover:underline flex items-center gap-2"
              >
                <FiMail size={18} />
                <span>raunak9554@gmail.com</span>
              </a>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Social Profiles</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-light dark:bg-gray-dark px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label={link.name}
                  >
                    <span className="text-blue-dark dark:text-blue-medium">{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Resume</h4>
              <a 
                href="/resume.pdf" 
                download
                className="btn-secondary flex items-center gap-2 w-fit"
              >
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 