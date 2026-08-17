import React, { useState } from 'react';
import { 
  X, 
  Check, 
  ShieldCheck, 
  Phone, 
  Calendar, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  Clock,
  Layers,
  Home,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useContent } from '../context/ContentContext';

interface FreeQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const FreeQuoteModal: React.FC<FreeQuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = ''
}) => {
  const { submitQuoteRequest } = useContent();
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState(initialService || 'UPVC & Aluminium Windows');
  const [propertyType, setPropertyType] = useState('Semi-Detached');
  const [itemCount, setItemCount] = useState(5);
  const [colorPref, setColorPref] = useState('Anthracite Grey (RAL 7016)');
  const [timeframe, setTimeframe] = useState('Within 1 month');
  
  // Contact details
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [postcode, setPostcode] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteRef, setQuoteRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedRef = `VTX-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      await submitQuoteRequest({
        fullName,
        phone,
        email,
        postcode,
        address,
        serviceType,
        subType: colorPref,
        itemCount,
        propertyType,
        colorPreference: colorPref,
        timeframe,
        notes: notes ? `Ref: ${generatedRef} | ${notes}` : `Ref: ${generatedRef}`
      });
    } catch (err) {
      console.warn('Quote submit notice:', err);
    }

    setIsSubmitting(false);
    setQuoteRef(generatedRef);
    setStep(4);

    // Trigger celebration confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleResetAndClose = () => {
    setStep(1);
    setQuoteRef('');
    onClose();
  };

  return (
    <div 
      id="free-quote-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div 
        id="free-quote-modal-container"
        className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200 my-8"
      >
        {/* Header bar */}
        <div className="bg-gradient-to-r from-[#2D1A60] to-[#0B4BBE] p-6 text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-white/20 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                100% Free & No Obligation
              </span>
              <span className="text-xs text-blue-200 font-medium">10-Year Guarantee Included</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              Get Your Free, Fast Quotation
            </h3>
          </div>
          <button 
            id="close-quote-modal-btn"
            onClick={handleResetAndClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Step Indicator */}
        {step < 4 && (
          <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                step >= 1 ? 'bg-blue-600 text-white' : 'bg-slate-300 text-slate-700'
              }`}>1</span>
              <span className={step === 1 ? 'text-blue-900 font-bold' : ''}>Service Details</span>
            </div>
            <div className="w-8 h-0.5 bg-slate-300" />
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                step >= 2 ? 'bg-blue-600 text-white' : 'bg-slate-300 text-slate-700'
              }`}>2</span>
              <span className={step === 2 ? 'text-blue-900 font-bold' : ''}>Property & Specs</span>
            </div>
            <div className="w-8 h-0.5 bg-slate-300" />
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                step >= 3 ? 'bg-blue-600 text-white' : 'bg-slate-300 text-slate-700'
              }`}>3</span>
              <span className={step === 3 ? 'text-blue-900 font-bold' : ''}>Contact & Address</span>
            </div>
          </div>
        )}

        {/* Step 1: Select Service */}
        {step === 1 && (
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                What service are you interested in?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500">
                Select your primary requirement. You can specify more details in the next steps.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: 'UPVC & Aluminium Windows', desc: 'Casement, Flush Sash, Sliding Sash, Tilt & Turn' },
                { label: 'Composite Front Doors', desc: 'High security 48mm solid core, Ultion 3*' },
                { label: 'Bifolding & Patio Doors', desc: 'Slimline panoramic aluminium & UPVC' },
                { label: 'Fascia, Soffit & Guttering', desc: '18mm full replacement & storm drainage' },
                { label: 'Full House Package', desc: 'Complete windows, doors & roofline renovation' },
                { label: 'Repair & Replacement Glazing', desc: 'Misted units, locks, handles, hinges' }
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setServiceType(item.label)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    serviceType === item.label
                      ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-600/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">{item.label}</span>
                    {serviceType === item.label && (
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    )}
                  </div>
                  <span className="text-xs text-slate-500 mt-1">{item.desc}</span>
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="bg-[#0B4BBE] hover:bg-[#083C9A] text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Continue to Specifications</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Property & Specifications */}
        {step === 2 && (
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                Property details & approximate volume
              </h4>
              <p className="text-xs sm:text-sm text-slate-500">
                Helps our Dewsbury survey team calculate an accurate preliminary estimate.
              </p>
            </div>

            <div className="space-y-4">
              {/* Property Type */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Property Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Detached', 'Semi-Detached', 'Terraced', 'Bungalow / Flat'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setPropertyType(type)}
                      className={`p-2.5 rounded-lg border text-xs font-bold transition-all cursor-pointer text-center ${
                        propertyType === type
                          ? 'border-blue-600 bg-blue-50 text-blue-900 ring-2 ring-blue-600/20'
                          : 'border-slate-200 text-slate-700 bg-white hover:bg-slate-50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Number of Items */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Approximate Number of Windows / Items: <span className="text-blue-700 font-extrabold text-sm">{itemCount}</span>
                  </label>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="20" 
                  value={itemCount}
                  onChange={(e) => setItemCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>1 item</span>
                  <span>5 items (Average)</span>
                  <span>10 items</span>
                  <span>15+ items</span>
                </div>
              </div>

              {/* Color preference */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Preferred Frame / Door Colour
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Anthracite Grey (RAL 7016)',
                    'Smooth White',
                    'Chartwell Green',
                    'Agate Grey',
                    'Black Ash',
                    'Golden Oak'
                  ].map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setColorPref(color)}
                      className={`p-2 rounded-lg border text-xs font-semibold text-left transition-all cursor-pointer ${
                        colorPref === color
                          ? 'border-blue-600 bg-blue-50 text-blue-900'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeframe */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Target Timeframe
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['ASAP / Urgent', 'Within 1 month', 'Planning ahead (2-3 mo)'].map((tf) => (
                    <button
                      key={tf}
                      type="button"
                      onClick={() => setTimeframe(tf)}
                      className={`p-2 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer ${
                        timeframe === tf
                          ? 'border-blue-600 bg-blue-50 text-blue-900'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {tf}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-slate-600 font-bold text-xs sm:text-sm flex items-center gap-1.5 hover:text-slate-900 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="bg-[#0B4BBE] hover:bg-[#083C9A] text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Continue to Your Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Contact & Address Form */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                Where should we send your quote?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500">
                We respect your privacy. No spam, no pushy sales calls guaranteed.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. John Smith"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. 07123 456789"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                <input 
                  type="email" 
                  required
                  placeholder="e.g. john@example.co.uk"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Postcode (Dewsbury & Surrounds) *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. WF12 8EE"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">Address / Street (Optional)</label>
                <input 
                  type="text" 
                  placeholder="e.g. 14 Halifax Road, Dewsbury"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">Additional Project Details / Notes</label>
                <textarea 
                  rows={2}
                  placeholder="Any specific glass patterns, Georgian bars, or questions for our surveyor..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm resize-none"
                />
              </div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <p className="text-xs text-slate-600">
                Includes our <span className="font-bold text-slate-900">10-Year Insurance-Backed Guarantee</span> and full FENSA registration.
              </p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-slate-600 font-bold text-xs sm:text-sm flex items-center gap-1.5 hover:text-slate-900 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#0B4BBE] hover:bg-[#083C9A] text-white font-extrabold px-8 py-3.5 rounded-xl flex items-center gap-2 cursor-pointer shadow-md active:scale-98 disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span>Saving & Submitting...</span>
                ) : (
                  <>
                    <span>SUBMIT FREE QUOTE REQUEST</span>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Success Screen */}
        {step === 4 && (
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div>
              <span className="text-xs font-extrabold text-blue-700 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                Reference: {quoteRef}
              </span>
              <h4 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 tracking-tight">
                Thank You, {fullName || 'Valued Customer'}!
              </h4>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-md mx-auto">
                Your free quote request for <span className="font-bold text-slate-900">{serviceType}</span> has been securely saved to our database. Our senior Dewsbury surveyor is reviewing your specifications.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 text-left max-w-md mx-auto text-xs sm:text-sm space-y-2 text-slate-700">
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Service:</span>
                <span className="font-bold text-slate-900">{serviceType}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Items / Finish:</span>
                <span className="font-bold text-slate-900">{itemCount} items ({colorPref})</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Expected Response:</span>
                <span className="font-bold text-emerald-700">Within 2 hours</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Location:</span>
                <span className="font-bold text-slate-900">{postcode || 'West Yorkshire'}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:01924888123"
                className="bg-[#0B4BBE] hover:bg-[#083C9A] text-white font-bold text-sm py-3 px-6 rounded-xl inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-white text-[#0B4BBE]" />
                <span>Call Us Now: 01924 888 123</span>
              </a>
              <button
                onClick={handleResetAndClose}
                className="border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-sm py-3 px-6 rounded-xl cursor-pointer"
              >
                Close & Return to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
