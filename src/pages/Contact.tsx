import React, { useState } from "react";

interface ContactProps {
  onNavigate: (path: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-container bg-[#FAF8F3]">
      <section className="py-20 md:py-28 bg-grid">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Context */}
            <div className="lg:col-span-5">
              <span className="inline-block text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-[#08090B] text-[#CDF22B] font-display mb-6 shadow-tactile-light">
                OPEN COLLABORATION
              </span>
              
              <h1 className="font-display font-bold text-4xl md:text-6xl text-[#08090B] tracking-[-0.035em] leading-[0.95] mb-6">
                Have something worth<br />
                <span className="text-[#CDF22B] bg-[#08090B] px-3 py-1 rounded-2xl inline-block shadow-tactile-dark transform -rotate-1">revealing?</span>
              </h1>

              <p className="text-lg text-[#08090B]/70 leading-relaxed font-body mb-8">
                We'd love to hear your ideas, feedback and opportunities to collaborate on expanding the UNSEEN Resource Intelligence Platform.
              </p>

              <div className="space-y-6 pt-6 border-t border-black/10">
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-[#00545F] font-display mb-1">Direct Inquiries</div>
                  <a href="mailto:hello@unseen.platform" className="text-base font-bold text-[#08090B] hover:text-[#00545F] font-display">hello@unseen.platform</a>
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-[#00545F] font-display mb-1">Platform Status</div>
                  <div className="text-sm text-[#08090B]/70 font-body">Buildathon Technology Suite — v2.4 Active</div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl border border-[#08090B]/10 shadow-tactile-light">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#CDF22B] text-[#08090B] text-2xl font-bold font-display flex items-center justify-center mx-auto shadow-tactile-light">✓</div>
                  <h3 className="font-display font-bold text-2xl text-[#08090B]">Thank you, {formData.name || "Explorer"}!</h3>
                  <p className="text-sm text-[#08090B]/70 max-w-sm mx-auto font-body">Your message has been received in the UNSEEN sandbox laboratory. A response will be coordinated via your email address.</p>
                  <div className="pt-4">
                    <button onClick={() => onNavigate("/tools")} className="btn-tactile-dark px-6 py-2.5 rounded-2xl text-xs font-bold font-display">
                      Explore Tools →
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="font-display font-bold text-2xl text-[#08090B] mb-2">Send a Message</h2>
                  <p className="text-xs text-[#08090B]/60 mb-6 font-body">Fill out the fields below to initiate a dialogue with the UNSEEN team.</p>

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="form-name" className="block text-xs font-bold font-display uppercase tracking-wider text-[#08090B]/80 mb-2">Full Name</label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Rivera"
                        className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F3] border border-[#08090B]/15 text-[#08090B] text-sm focus:outline-none focus:border-[#08090B] focus:ring-2 focus:ring-[#CDF22B]/40 transition-all font-body"
                      />
                    </div>

                    <div>
                      <label htmlFor="form-email" className="block text-xs font-bold font-display uppercase tracking-wider text-[#08090B]/80 mb-2">Email Address</label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@domain.com"
                        className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F3] border border-[#08090B]/15 text-[#08090B] text-sm focus:outline-none focus:border-[#08090B] focus:ring-2 focus:ring-[#CDF22B]/40 transition-all font-body"
                      />
                    </div>

                    <div>
                      <label htmlFor="form-subject" className="block text-xs font-bold font-display uppercase tracking-wider text-[#08090B]/80 mb-2">Subject / Area of Interest</label>
                      <select
                        id="form-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F3] border border-[#08090B]/15 text-[#08090B] text-sm focus:outline-none focus:border-[#08090B] focus:ring-2 focus:ring-[#CDF22B]/40 transition-all font-body"
                      >
                        <option value="general">General Feedback</option>
                        <option value="time">Time Intelligence Partnership</option>
                        <option value="student">Student Tracker Deployment</option>
                        <option value="group">Group Analyzer Integration</option>
                        <option value="privacy">Privacy & Terms Forensics</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="form-msg" className="block text-xs font-bold font-display uppercase tracking-wider text-[#08090B]/80 mb-2">Message</label>
                      <textarea
                        id="form-msg"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe what invisible resource loss you're seeing..."
                        className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F3] border border-[#08090B]/15 text-[#08090B] text-sm focus:outline-none focus:border-[#08090B] focus:ring-2 focus:ring-[#CDF22B]/40 transition-all font-body"
                      />
                    </div>

                    <button type="submit" className="btn-tactile-dark w-full py-4 rounded-2xl text-sm font-bold font-display flex items-center justify-center gap-2">
                      <span>Send Message</span>
                      <span>→</span>
                    </button>
                  </form>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
