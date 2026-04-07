import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import { Icon, IconRing } from '../components/Icons';
import './Contact.css';

const CONTACT_INFO = [
  { iconName: 'mail',     label: 'EMAIL',        value: 'reallifeworld2015@gmail.com' },
  { iconName: 'phone',    label: 'PHONE',        value: '+233 50 132 6651\n+233 24 797 8169' },
  { iconName: 'office',   label: 'HEAD OFFICE',  value: 'Real Life World Inc. Headquarters\nAccra, Ghana' },
  { iconName: 'clock',    label: 'OFFICE HOURS', value: 'Monday – Friday: 9:00 AM – 5:00 PM (GMT)\nSaturday: By Appointment' },
];

const INQUIRY_OPTIONS = [
  'General Inquiry','Join a Chapter','Start a Chapter',
  'Partnership','Prayer Request','Events','Pastoral Care',
];

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', subject:'', message:'', newsletter:false });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <PageHero
        label="CONTACT US"
        title="We'd Love to Hear<br />From You"
        subtitle="Whether you have a question, need prayer, want to partner with us, or desire to start a chapter, our team is ready to connect with you."
      />

      <section style={{ padding: '64px 0', background: 'var(--dark2)' }}>
        <div className="container-wide">
          <div className="contact__grid">
            {/* Form */}
            <div className="contact__form-card">
              <div style={{ display:'flex', gap:14, alignItems:'center', marginBottom:24 }}>
                <IconRing name="mail" size={46} />
                <div>
                  <h2 style={{ fontFamily:'var(--font-accent)', fontSize:19, fontWeight:700, fontStyle:'italic' }}>Send Us a Message</h2>
                  <p style={{ fontSize:12.5, color:'var(--w60)' }}>Fill out the form below and we will get back to you as soon as possible.</p>
                </div>
              </div>

              {submitted ? (
                <div className="contact__success">
                  <div style={{ display:'flex', justifyContent:'center', marginBottom:12 }}><IconRing name="heart" size={52} bright /></div>
                  <h3 style={{ fontFamily:'var(--font-accent)', fontSize:20, fontStyle:'italic', marginBottom:8 }}>Message Sent!</h3>
                  <p style={{ color:'var(--w60)', fontSize:13.5, lineHeight:1.7 }}>Thank you for reaching out. Our team will get back to you as soon as possible.</p>
                  <button className="contact__reset" onClick={() => { setSubmitted(false); setForm({ name:'', email:'', phone:'', subject:'', message:'', newsletter:false }); }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                  <div className="contact__row-2">
                    <input className="form-input" placeholder="Your Name" value={form.name} onChange={e => setForm({...form, name:e.target.value})} required />
                    <input className="form-input" type="email" placeholder="Your Email Address" value={form.email} onChange={e => setForm({...form, email:e.target.value})} required />
                  </div>
                  <input className="form-input" placeholder="Phone Number (Optional)" value={form.phone} onChange={e => setForm({...form, phone:e.target.value})} style={{ marginBottom:13 }} />
                  <select className="form-input" style={{ cursor:'pointer', marginBottom:13 }} value={form.subject} onChange={e => setForm({...form, subject:e.target.value})}>
                    <option value="">I would like to inquire about…</option>
                    {INQUIRY_OPTIONS.map(o => <option key={o}>{o}</option>)}
                  </select>
                  <textarea className="form-input" placeholder="Your Message…" rows={5} style={{ resize:'vertical', marginBottom:16 }} value={form.message} onChange={e => setForm({...form, message:e.target.value})} required />
                  <label className="contact__checkbox-label">
                    <input type="checkbox" style={{ accentColor:'var(--gold)', cursor:'pointer' }} checked={form.newsletter} onChange={e => setForm({...form, newsletter:e.target.checked})} />
                    I would like to receive updates and newsletters from RLW.
                  </label>
                  <Button type="submit" fullWidth size="lg" style={{ marginTop:22 }}>Send Message →</Button>
                </form>
              )}
            </div>

            {/* Info panel */}
            <div>
              <h2 style={{ fontFamily:'var(--font-accent)', fontSize:21, fontWeight:700, fontStyle:'italic', marginBottom:7 }}>Contact Information</h2>
              <p style={{ fontSize:13, color:'var(--w60)', marginBottom:26 }}>Reach us directly through any of the channels below.</p>
              <div className="contact__info-list">
                {CONTACT_INFO.map(c => (
                  <div key={c.label} className="contact__info-row">
                    <IconRing name={c.iconName} size={42} />
                    <div>
                      <div style={{ fontSize:10.5, color:'var(--gold)', fontWeight:700, letterSpacing:1.5, marginBottom:3 }}>{c.label}</div>
                      <div style={{ fontSize:13.5, color:'var(--w80)', whiteSpace:'pre-line', lineHeight:1.65 }}>{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="contact__prayer-card">
                <div style={{ display:'flex', gap:13, alignItems:'flex-start', marginBottom:14 }}>
                  <IconRing name="prayer" size={42} />
                  <div>
                    <h3 style={{ fontFamily:'var(--font-accent)', fontSize:16, fontWeight:700, fontStyle:'italic', marginBottom:5 }}>Need Prayer?</h3>
                    <p style={{ fontSize:12.5, color:'var(--w60)', lineHeight:1.65 }}>Our intercessory team stands with you. Send us your prayer request and we will pray with you.</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Submit a Prayer Request →</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding:'44px 0', background:'var(--dark)' }}>
        <div className="container-wide">
          <div className="grid-2">
            <div className="card">
              <div style={{ display:'flex', gap:14, alignItems:'center', marginBottom:16 }}>
                <IconRing name="calendar" size={44} />
                <h3 style={{ fontFamily:'var(--font-accent)', fontSize:19, fontWeight:700, fontStyle:'italic' }}>Book for Pastoral Care &amp; Prophetic Counseling</h3>
              </div>
              <p style={{ fontSize:13.5, color:'var(--w60)', lineHeight:1.75, marginBottom:22 }}>
                Get personal guidance, pastoral care, and prophetic insight to help you walk in clarity, healing, and the reality of the Christ-Life.
              </p>
              <Button variant="outline" size="sm">Book an Appointment →</Button>
            </div>
            <div className="card">
              <h3 style={{ fontFamily:'var(--font-accent)', fontSize:19, fontWeight:700, fontStyle:'italic', marginBottom:8 }}>Visit Any of Our Chapters</h3>
              <p style={{ fontSize:13.5, color:'var(--w60)', lineHeight:1.75, marginBottom:18 }}>We would love to welcome you in person.</p>
              <div className="contact__chapter-row">
                <div style={{ display:'flex', gap:12, alignItems:'center' }}>
                  <IconRing name="pin" size={38} />
                  <div>
                    <div style={{ fontWeight:600, fontSize:13.5, marginBottom:2 }}>Real Life World Chapters</div>
                    <div style={{ fontSize:12, color:'var(--w60)', lineHeight:1.5 }}>Across Africa, Europe, Asia,<br />and other regions.</div>
                  </div>
                </div>
                <div style={{ opacity:0.35 }}><Icon name="globe" size={28} /></div>
              </div>
              <Link to="/chapters" style={{ textDecoration:'none' }}>
                <Button variant="outline" size="sm">Find a Chapter →</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding:'44px 0 76px', background:'var(--dark2)' }}>
        <div className="container">
          <div className="contact__cta-bar">
            <div style={{ display:'flex', gap:17, alignItems:'center' }}>
              <IconRing name="globe" size={52} />
              <div>
                <span className="section-label" style={{ marginBottom:5 }}>BE PART OF THE MOVEMENT</span>
                <h3 style={{ fontFamily:'var(--font-accent)', fontSize:19, fontWeight:700, fontStyle:'italic', marginBottom:5 }}>Let's Advance the Christ-Life Together</h3>
                <p style={{ fontSize:12.5, color:'var(--w60)' }}>Join us in raising a generation that lives the reality of Christ and impacts the world.</p>
              </div>
            </div>
            <Button size="lg">Join the Movement →</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
