import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  ShieldCheck, 
  Check, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PageRoute } from '../types';
import { TrustpilotBadge } from '../components/TrustpilotBadge';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    interest: 'Windows',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-600/30 text-blue-300 border border-blue-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch with Vortex</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Contact & Dewsbury Showroom
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Speak directly with our local team for advice, book a free home measuring survey, or visit our showroom to view full-size door and window displays.
          </p>
          <div className="pt-2 flex justify-center">
            <TrustpilotBadge />
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details & Opening Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md space-y-6">
              <h3 className="text-xl font-extrabold text-slate-900">
                Direct Contact Details
              </h3>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Telephone</p>
                    <a href="tel:01924888123" className="font-extrabold text-base text-slate-900 hover:text-blue-600 transition-colors">
                      01924 888 123
                    </a>
                    <p className="text-xs text-slate-500">Free advice & instant callbacks</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Enquiries</p>
                    <a href="mailto:quotes@vortexwindows.co.uk" className="font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      quotes@vortexwindows.co.uk
                    </a>
                    <p className="text-xs text-slate-500">Quotes returned within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Showroom Address</p>
                    <p className="font-bold text-slate-900">
                      Vortex Windows and Doors Ltd<br />
                      Halifax Road, Dewsbury,<br />
                      West Yorkshire, WF13 2EF
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Opening Hours</p>
                    <p className="font-semibold text-slate-800 text-xs">Monday – Friday: 8:00 AM – 6:00 PM</p>
                    <p className="font-semibold text-slate-800 text-xs">Saturday: 9:00 AM – 4:00 PM</p>
                    <p className="text-slate-500 text-xs">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full bg-[#0B4BBE] hover:bg-[#083C9A] text-white font-bold text-sm py-3.5 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Launch Instant Quote Calculator</span>
                </button>
              </div>
            </div>

            {/* Dewsbury & Surrounding Map Box */}
            <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm">Service Radius Coverage</span>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">Active</span>
              </div>
              <p className="text-xs text-slate-400">
                We provide free home surveys within 30 miles of Dewsbury including Batley, Mirfield, Wakefield, Huddersfield, Leeds, Morley, and Cleckheaton.
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
              {formSent ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Message Received!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, {formData.name}. Our Dewsbury team will contact you shortly regarding your enquiry for {formData.interest}.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="bg-[#0B4BBE] text-white font-bold text-xs px-6 py-2.5 rounded-xl cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900">Send an Online Enquiry</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill in your details below and our team will get back to you with free advice and pricing.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="07123 456789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="john@example.co.uk"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Postcode *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="WF12 8EE"
                        value={formData.postcode}
                        onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 mb-1">Service Required</label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-white"
                      >
                        <option value="UPVC Windows">UPVC Windows (Casement, Flush Sash, Sliding Sash)</option>
                        <option value="Composite Doors">Composite Front Doors</option>
                        <option value="Bifolding & Patio Doors">Bifolding & Patio Doors</option>
                        <option value="Fascia, Soffit & Guttering">Fascia, Soffit & Guttering</option>
                        <option value="Full House Renovation">Full House Glazing & Roofline Renovation</option>
                        <option value="Glazing Repairs">Misted Glass / Lock Repairs</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Message or Query</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your project, target dates, or specific styles you're considering..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0B4BBE] hover:bg-[#083C9A] text-white font-extrabold text-sm py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>SUBMIT ENQUIRY</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
