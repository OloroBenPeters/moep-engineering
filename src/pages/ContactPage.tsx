import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Globe,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  MapPin,
  Loader2,
} from 'lucide-react';

interface ContactPageProps {
  initialSubject?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialSubject = '' }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState<
    'Residential' | 'Commercial' | 'Renovation' | 'Consulting' | 'Other'
  >('Residential');
  const [message, setMessage] = useState(
    initialSubject ? `Inquiry regarding: ${initialSubject}` : ''
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('_subject', 'New Website Inquiry — MOEP Engineering');
      formData.append('_captcha', 'false');
      formData.append('Full Name', fullName.trim());
      formData.append('Email', email.trim());
      formData.append('Phone', phone.trim() || 'Not provided');
      formData.append('Project Type', projectType);
      formData.append('Message', message.trim());

      const response = await fetch(
        'https://formsubmit.co/ajax/MOEPengineeringservicesltd@gmail.com',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: formData,
        }
      );

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback: If the AJAX endpoint responds with an error, try standard urlencoded post
        const urlParams = new URLSearchParams();
        urlParams.append('_subject', 'New Website Inquiry — MOEP Engineering');
        urlParams.append('_captcha', 'false');
        urlParams.append('Full Name', fullName.trim());
        urlParams.append('Email', email.trim());
        urlParams.append('Phone', phone.trim() || 'Not provided');
        urlParams.append('Project Type', projectType);
        urlParams.append('Message', message.trim());

        const retryRes = await fetch(
          'https://formsubmit.co/MOEPengineeringservicesltd@gmail.com',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Accept: 'application/json',
            },
            body: urlParams.toString(),
          }
        );

        if (retryRes.ok) {
          setSubmitted(true);
        } else {
          setErrorMsg(
            'Unable to submit your inquiry at this moment. Please email us directly at MOEPengineeringservicesltd@gmail.com or call +234 807 617 6939.'
          );
        }
      }
    } catch {
      setErrorMsg(
        'A network error occurred. Please try again or reach out directly at MOEPengineeringservicesltd@gmail.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setProjectType('Residential');
    setMessage('');
    setSubmitted(false);
    setErrorMsg('');
  };

  return (
    <div id="contact-page" className="w-full">
      {/* =========================================================================
          SECTION 1 — Page Header (dark steel blue background)
          Heading: "Let's Build Something"
          Subtext: "Tell us about your project — residential, commercial, or
          consulting — and we'll get back to you directly."
         ========================================================================= */}
      <section
        id="contact-header-section"
        className="bg-[#233746] text-[#F0E7D9] pt-32 sm:pt-40 pb-16 sm:pb-20 border-b border-[#2c4457] bg-dark-grid-pattern relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none bg-dark-grid-pattern" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="w-12 h-1 bg-[#FBC215] mb-4" />
          <h1 className="font-heading text-3xl sm:text-5xl font-black text-[#F0E7D9] tracking-tight uppercase">
            Let&apos;s Build Something
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#F0E7D9]/85 max-w-3xl leading-relaxed">
            Tell us about your project — residential, commercial, or consulting — and we&apos;ll get back to you directly.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — Contact Form + Info (cream background, two-column layout)
          Left column: Contact form
            - Full Name
            - Email Address
            - Phone Number
            - Project Type (dropdown: Residential / Commercial / Renovation / Consulting / Other)
            - Message / Project Details (textarea)
            - Submit button (red #BD1E3C): "Send Message"

          Right column: Contact info card (dark steel blue background, cream text)
            Heading: "Get In Touch"
            - Email: [insert email]
            - Phone: [insert phone number]
            - Service Area: Nationwide / Remote Consulting Available
            - Add small note: "We respond to all inquiries within 24-48 hours."
         ========================================================================= */}
      <section
        id="contact-main-section"
        className="py-20 sm:py-28 bg-[#F0E7D9] bg-grid-pattern"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center pb-3 mb-12 border-b border-[#233746]/10">
            <div className="w-10 h-1 bg-[#FBC215]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#BD1E3C]">
              01 / 01 — PROJECT INQUIRY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 border-l-4 border-[#233746] shadow-elegant">
              {submitted ? (
                <div
                  id="contact-success-container"
                  className="py-10 text-center space-y-5"
                >
                  <div className="w-16 h-16 bg-[#233746] text-[#FBC215] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-9 h-9 text-[#BD1E3C]" />
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#233746] uppercase tracking-tight">
                    Inquiry Received
                  </h3>

                  <p className="text-base text-[#233746]/80 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-[#233746]">{fullName}</span>. An engineer from MOEP Engineering Services Limited will review your project details and reach out within 24–48 hours.
                  </p>

                  <div className="p-4 bg-[#F0E7D9] border-l-4 border-[#BD1E3C] text-left text-xs font-mono text-[#233746]/80 max-w-md mx-auto space-y-1">
                    <div><span className="font-bold">Project Scope:</span> {projectType}</div>
                    <div><span className="font-bold">Email:</span> {email}</div>
                    {phone && <div><span className="font-bold">Phone:</span> {phone}</div>}
                  </div>

                  <div className="pt-4">
                    <button
                      id="send-another-message-btn"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 bg-[#233746] hover:bg-[#192733] text-[#F0E7D9] text-xs font-bold uppercase tracking-wider px-8 py-3.5 shadow-xs cursor-pointer transition-colors"
                    >
                      <span>Send Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  id="contact-inquiry-form"
                  onSubmit={handleSubmit}
                  action="https://formsubmit.co/MOEPengineeringservicesltd@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Hidden FormSubmit configuration inputs */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Website Inquiry — MOEP Engineering"
                  />
                  <input type="hidden" name="_captcha" value="false" />

                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#233746] tracking-tight uppercase">
                      Tell Us About Your Project
                    </h2>
                    <p className="text-sm text-[#233746]/70 mt-1">
                      Direct engineering consultation with zero middlemen.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3.5 bg-red-50 border-l-4 border-[#BD1E3C] text-[#BD1E3C] text-xs flex items-center gap-2 font-medium">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-bold uppercase tracking-wider text-[#233746] mb-2"
                    >
                      Full Name <span className="text-[#BD1E3C]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Alexander Clark"
                      className="w-full bg-[#F0E7D9]/40 border border-[#233746]/20 px-4 py-3.5 text-sm text-[#233746] placeholder-[#233746]/40 focus:outline-hidden focus:border-[#BD1E3C] focus:ring-1 focus:ring-[#BD1E3C] transition-all"
                    />
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-[#233746] mb-2"
                      >
                        Email Address <span className="text-[#BD1E3C]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. alexander@example.com"
                        className="w-full bg-[#F0E7D9]/40 border border-[#233746]/20 px-4 py-3.5 text-sm text-[#233746] placeholder-[#233746]/40 focus:outline-hidden focus:border-[#BD1E3C] focus:ring-1 focus:ring-[#BD1E3C] transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-wider text-[#233746] mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +234 807 617 6939"
                        className="w-full bg-[#F0E7D9]/40 border border-[#233746]/20 px-4 py-3.5 text-sm text-[#233746] placeholder-[#233746]/40 focus:outline-hidden focus:border-[#BD1E3C] focus:ring-1 focus:ring-[#BD1E3C] transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type Dropdown */}
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-xs font-bold uppercase tracking-wider text-[#233746] mb-2"
                    >
                      Project Type <span className="text-[#BD1E3C]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="projectType"
                        name="projectType"
                        value={projectType}
                        onChange={(e) =>
                          setProjectType(
                            e.target.value as
                              | 'Residential'
                              | 'Commercial'
                              | 'Renovation'
                              | 'Consulting'
                              | 'Other'
                          )
                        }
                        className="w-full bg-[#F0E7D9]/40 border border-[#233746]/20 px-4 py-3.5 text-sm text-[#233746] focus:outline-hidden focus:border-[#BD1E3C] focus:ring-1 focus:ring-[#BD1E3C] appearance-none cursor-pointer"
                      >
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Renovation">Renovation</option>
                        <option value="Consulting">Consulting</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#233746]">
                        <Building className="w-4 h-4 text-[#BD1E3C]" />
                      </div>
                    </div>
                  </div>

                  {/* Message / Project Details */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-[#233746] mb-2"
                    >
                      Message / Project Details <span className="text-[#BD1E3C]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please outline the project location, estimated timeline, objectives, or any technical questions..."
                      className="w-full bg-[#F0E7D9]/40 border border-[#233746]/20 p-4 text-sm text-[#233746] placeholder-[#233746]/40 focus:outline-hidden focus:border-[#BD1E3C] focus:ring-1 focus:ring-[#BD1E3C] transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button (red #BD1E3C) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="contact-form-submit-btn"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#BD1E3C] hover:bg-[#9e1832] disabled:bg-[#BD1E3C]/60 disabled:cursor-not-allowed text-[#F0E7D9] text-xs font-bold uppercase tracking-wider px-10 py-4 shadow-elegant hover:scale-[1.02] disabled:scale-100 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 text-[#FBC215] animate-spin" />
                          <span>Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 text-[#FBC215]" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Contact Info Card (5 cols) (Dark Steel Blue Background, Cream Text) */}
            <div className="lg:col-span-5 space-y-6">
              <div
                id="contact-info-card"
                className="bg-[#233746] text-[#F0E7D9] p-8 sm:p-10 border-l-4 border-[#BD1E3C] shadow-elegant-lg bg-dark-grid-pattern relative overflow-hidden"
              >
                <div className="w-10 h-1 bg-[#FBC215] mb-4" />

                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F0E7D9] tracking-tight uppercase mb-8">
                  Get In Touch
                </h2>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#192733] border border-[#2c4457] flex items-center justify-center text-[#FBC215] flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold tracking-wider text-[#F0E7D9]/60 mb-0.5">
                        Email
                      </div>
                      <a
                        href="mailto:MOEPengineeringservicesltd@gmail.com"
                        className="text-base font-bold text-[#F0E7D9] hover:text-[#FBC215] transition-colors break-all"
                      >
                        MOEPengineeringservicesltd@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Office Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#192733] border border-[#2c4457] flex items-center justify-center text-[#FBC215] flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold tracking-wider text-[#F0E7D9]/60 mb-0.5">
                        Office Address
                      </div>
                      <div className="text-base font-bold text-[#F0E7D9] leading-snug">
                        13 Tangayika Crescent, Crown Estate, Lekki, Lagos
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#192733] border border-[#2c4457] flex items-center justify-center text-[#FBC215] flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold tracking-wider text-[#F0E7D9]/60 mb-0.5">
                        Phone
                      </div>
                      <a
                        href="tel:+2348076176939"
                        className="text-base font-bold text-[#F0E7D9] hover:text-[#FBC215] transition-colors inline-block"
                      >
                        +234 807 617 6939
                      </a>
                    </div>
                  </div>

                  {/* Service Area */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#192733] border border-[#2c4457] flex items-center justify-center text-[#FBC215] flex-shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold tracking-wider text-[#F0E7D9]/60 mb-0.5">
                        Service Area
                      </div>
                      <div className="text-base font-bold text-[#F0E7D9]">
                        Nationwide / Remote Consulting Available
                      </div>
                    </div>
                  </div>
                </div>

                {/* Small note: "We respond to all inquiries within 24-48 hours." */}
                <div className="mt-10 pt-6 border-t border-[#2c4457] flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#FBC215] flex-shrink-0" />
                  <p className="text-xs text-[#F0E7D9]/80 italic">
                    We respond to all inquiries within 24-48 hours.
                  </p>
                </div>
              </div>

              {/* Direct Accountability Commitment Box */}
              <div className="p-6 bg-white border-l-4 border-[#233746] shadow-elegant text-xs text-[#233746]/80 leading-relaxed">
                <span className="font-bold uppercase text-[#BD1E3C] block mb-1">
                  Direct Principal Engagement
                </span>
                Every proposal and consultation inquiry is routed directly to our lead engineers. No middlemen, no call centers.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
