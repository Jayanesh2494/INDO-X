
import { Mail, MessageSquare, Send } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle>Get in Touch</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-secondary-dark">Contact Information</h3>
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-primary" />
              <span className="text-secondary">support@indox.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MessageSquare className="w-6 h-6 text-primary" />
              <span className="text-secondary">Join our Telegram community</span>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-secondary-dark mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-200 rounded-md px-4 py-3 text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-secondary-dark mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-200 rounded-md px-4 py-3 text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-secondary-dark mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full border border-gray-200 rounded-md px-4 py-3 text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="group w-full bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 flex items-center justify-center"
            >
              Send Message
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}