import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { siteData } from '../data';
import VideoCarousel from '../components/VideoCarousel';
import DoctorsTestimonials from '../components/DoctorsTestimonials';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import styles from './DivisionPage.module.css';

const ceoImages = [
  'https://res.cloudinary.com/dzr5dorsx/image/upload/q_auto/f_auto/v1775212341/_DSC5278.jpg_kybfkd.jpg',
  'https://res.cloudinary.com/dzr5dorsx/image/upload/q_auto/f_auto/v1775212340/_DSC5279.jpg_1_zrrdgy.jpg',
  'https://res.cloudinary.com/dzr5dorsx/image/upload/q_auto/f_auto/v1775212337/_DSC5297.jpg_ett6t5.jpg'
];

const d = siteData.divisions.ves_branding;

export default function BrandingPage() {
    const [activeCeoIndex, setActiveCeoIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCeoIndex((prev) => (prev + 1) % ceoImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className={styles.page}>
            <SEO
                title="VES Brand - Authority for Doctors"
                description="Specialized personal branding for doctors and healthcare professionals. Build trust and authority ethically."
                path="/branding"
            />
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroBg}>
                    <div className={styles.heroGrid}></div>
                    <div className={styles.heroGlow1}></div>
                    <div className={styles.heroGlow2}></div>
                    <div className={styles.ambientOrb1}></div>
                    <div className={styles.ambientOrb2}></div>
                </div>
                <div className={styles.heroContent}>
                    <div className={styles.heroTop}>
                        <div className={styles.heroText}>
                            <div className={styles.breadcrumb}>
                                <span>VES Brand</span>
                            </div>
                            <span className={styles.heroTag}>{d.hero_label}</span>
                            <h1 className={styles.heroTitle}>{d.title.toUpperCase()}</h1>
                            <p className={styles.heroSub}>{d.subtitle}. {d.description}</p>

                            <div className={styles.trustBar}>
                                <span className={styles.trustNum}>{d.clients_count}</span>
                                <span className={styles.trustSep}>|</span>
                                <span className={styles.trustText}>5+ Years of Excellence</span>
                            </div>

                            <div className={styles.heroCtas}>
                                <a href="#contact" className={styles.ctaPrimary}>Start Your Journey</a>
                                <a href="#services" className={styles.ctaSecondary}>Our Services -&gt;</a>
                            </div>
                        </div>

                        <div className={styles.heroImageWrapper}>
                            <div className={styles.heroImageContainer}>
                                <div className={styles.imageGlow}></div>
                                <div className={styles.heroImageCarousel}>
                                    {ceoImages.map((image, index) => (
                                        <img
                                            key={image}
                                            src={image}
                                            alt="Founder and CEO portrait"
                                            className={`${styles.heroImage} ${styles.heroImageSlide} ${
                                                index === activeCeoIndex ? styles.heroImageActive : ''
                                            }`}
                                            loading={index === 0 ? 'eager' : 'lazy'}
                                            width={400}
                                            height={400}
                                            onError={(e) => {
                                                e.currentTarget.src = '/images/ceo.jpg';
                                            }}
                                        />
                                    ))}
                                </div>
                                <div className={styles.imageRing}></div>
                                <div className={styles.imageBadge}>
                                    <span className={styles.imageBadgeDot}></span>
                                    <span>Founder & CEO</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted Clients — Infinite Marquee */}
            <section className={styles.clients}>
                <div className={styles.clientsHeader}>
                    <span className={styles.clientsHeaderDot} />
                    <span className={styles.clientsHeaderLabel}>Trusted By</span>
                    <span className={styles.clientsDivider} />
                </div>
                <div className={styles.clientsTrack}>
                    <div className={styles.clientsScroll}>
                        {d.trusted_clients.map((c, i) => (
                            <div key={`a-${i}`} className={styles.clientChip}>{c}</div>
                        ))}
                        {d.trusted_clients.map((c, i) => (
                            <div key={`b-${i}`} className={styles.clientChip} aria-hidden="true">{c}</div>
                        ))}
                        {d.trusted_clients.map((c, i) => (
                            <div key={`c-${i}`} className={styles.clientChip} aria-hidden="true">{c}</div>
                        ))}
                        {d.trusted_clients.map((c, i) => (
                            <div key={`d-${i}`} className={styles.clientChip} aria-hidden="true">{c}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services — VES Brand Offerings */}
            <section className={styles.services} id="services">
                <div className={styles.sectionInner}>

                    <div className={styles.servicesHeaderWrap}>
                        <span className={styles.servicesSectionEyebrow}>VES BRAND</span>
                        <h2 className={styles.servicesSectionTitle}>
                            Build Your Personal Brand.<br />Grow Faster.
                        </h2>
                        <p className={styles.servicesSectionSub}>
                            We help professionals build authority, attract clients, and grow their digital presence with strategic content, branding, and marketing. Trusted by 750+ professionals with 5+ years of branding experience.
                        </p>
                    </div>

                    <div className={styles.servicesList}>
                        {[
                            {
                                title: 'Personal Branding',
                                description: 'We create a complete personal branding roadmap to help you build authority, trust, and online visibility.',
                                includes: [
                                    'Strategy roadmap',
                                    'Content planning',
                                    'Scriptwriting',
                                    'Reels editing',
                                    'Reel covers',
                                    'SEO captions & hashtags'
                                ]
                            },
                            {
                                title: 'Social Media Management',
                                description: 'We manage your social media professionally so you can focus on your work.',
                                includes: [
                                    'Posting & scheduling',
                                    'Page management',
                                    'Captions & hashtags',
                                    'Comments handling',
                                    'Stories & creatives',
                                    'Monthly growth tracking'
                                ]
                            },
                            {
                                title: 'Meta Ads Management',
                                description: 'We run targeted ad campaigns to help you get more inquiries, leads, and visibility.',
                                includes: [
                                    'Campaign setup',
                                    'Audience targeting',
                                    'Lead generation',
                                    'Retargeting',
                                    'Weekly optimization',
                                    'Monthly performance report'
                                ]
                            },
                            {
                                title: 'Professional Website / Landing Page',
                                description: 'We create professional websites and landing pages that help convert visitors into inquiries.',
                                includes: [
                                    'Personal brand website',
                                    'Service showcase',
                                    'Lead / appointment generation',
                                    'Mobile-friendly design',
                                    'SEO-friendly structure'
                                ]
                            },
                            {
                                title: 'UGC & Authority Videos',
                                description: 'We create trust-building videos for professionals, clinics, and brands.',
                                includes: [
                                    'Product / service videos',
                                    'Authority videos',
                                    'Review videos',
                                    'Professional scripting',
                                    'Shoot + edit',
                                    'Ad-ready delivery'
                                ]
                            }
                        ].map((service, index) => (
                            <div key={service.title} className={styles.serviceBlock}>
                                <h3 className={styles.serviceBlockTitle}>{index + 1}. {service.title}</h3>
                                <p className={styles.serviceBlockDescription}>{service.description}</p>
                                <div className={styles.serviceBlockIncludes}>
                                    <span>Includes:</span>
                                    <ul>
                                        {service.includes.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Branding Video Section */}
            <section className={styles.videoCarouselSection} style={{ padding: '5rem 0', background: '#fdfdfd' }}>
                <div className={styles.sectionInner}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                            color: '#0d9488', // Teal color from screenshot
                            fontFamily: 'var(--font-display, sans-serif)',
                            fontWeight: '600'
                        }}>
                            Our Work
                        </h2>
                    </div>
                </div>
                <VideoCarousel />
            </section>

            {/* Doctors Testimonials - Alternating Vertical Carousel */}
            <DoctorsTestimonials
                title="DOCTORS TESTIMONIALS"
                label="/ OUR HAPPY CLIENTS"
            />

            {/* Why VES */}
            <section className={styles.why}>
                <div className={styles.sectionInner}>
                    <div className={styles.whyGrid}>
                        <div className={styles.whyLeft}>
                            <span className={styles.sectionLabel}>/ WHY VES BRANDING</span>
                            <h2 className={styles.sectionTitle}>Why Choose VES Branding?</h2>
                            <div className={styles.whyList}>
                                {[
                                    '750+ professionals trusted',
                                    '5+ years experience',
                                    'Strategy-first approach',
                                    'Personal branding experts',
                                    'Content + marketing under one roof',
                                    'Result-focused execution'
                                ].map((item) => (
                                    <p key={item} className={styles.whyListItem}>• {item}</p>
                                ))}
                            </div>
                        </div>
                        <div className={styles.whyRight}>
                            <div className={styles.whyStats}>
                                {[
                                    { num: '750+', label: 'Professionals Trusted' },
                                    { num: '5+', label: 'Years Experience' },
                                    { num: '1', label: 'Branding + Marketing Hub' },
                                    { num: 'Result', label: 'Focused Execution' },
                                ].map((s, i) => (
                                    <div key={i} className={styles.whyStat}>
                                        <span className={styles.whyNum}>{s.num}</span>
                                        <span className={styles.whyLabel}>{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className={styles.testimonials}>
                <div className={styles.sectionInner}>
                    <span className={styles.sectionLabel}>/ CLIENT VOICES</span>
                    <h2 className={styles.sectionTitle}>WHAT DOCTORS SAY</h2>
                    <div className={styles.testGrid}>
                        {siteData.testimonials.filter((_, i) => i % 2 === 1).map((t, i) => (
                            <div key={i} className={styles.testCard}>
                                <div className={styles.testQuote}>
                                    <span className={styles.qMark}>"</span>
                                    {t.quote}
                                </div>
                                <div className={styles.testAuthor}>
                                    <div className={styles.testAvatar}>
                                        {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                    </div>
                                    <div>
                                        <p className={styles.testName}>{t.name}</p>
                                        <p className={styles.testRole}>{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection} id="contact">
                <div className={styles.ctaBg}></div>
                <div className={styles.sectionInner} style={{ position: 'relative', textAlign: 'center' }}>
                    <span className={styles.sectionLabel}>/ GET STARTED</span>
                    <h2 className={styles.sectionTitle} style={{ marginBottom: '1rem' }}>
                        READY TO BUILD<br />YOUR PERSONAL BRAND?
                    </h2>
                    <p style={{ color: 'var(--gray)', marginBottom: '2.5rem', fontSize: '0.95rem', maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Book a free consultation with VES Branding today.
                    </p>

                    <div className={styles.formWrapper} style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <ContactForm />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center', marginTop: '3rem', opacity: 0.9 }}>
                        <a href="tel:+917044232016" style={{ color: 'var(--gray)', fontSize: '0.95rem', fontWeight: 600 }}>
                            📞 Call / WhatsApp: +91 7044 23 2016
                        </a>
                        <a href="mailto:visualeditstudios@gmail.com" style={{ color: 'var(--gray)', fontSize: '0.95rem', fontWeight: 600 }}>
                            📩 Email: visualeditstudios@gmail.com
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
