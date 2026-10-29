'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icons } from './components/icons';

const features = [
  "Continuous performance budgets in CI/CD",
  "Automatic regression detection with statistical rigor",
  "Bundle analysis with tree-shaking recommendations",
  "Real-user monitoring correlation",
  "Performance regression root-cause attribution"
];
const pricing = {
  "free": true,
  "pro": "$39/mo",
  "enterprise": "Custom"
};
const ctaPrimary = {
  "text": "Add to CI Pipeline",
  "href": "https://perfarchitect.com/setup"
};
const ctaSecondary = {
  "text": "View Benchmarks",
  "href": "/benchmarks"
};

const brand = 'PerfArchitect';
const tagline = 'Architect high-performance systems with confidence';
const category = 'performance';
const solution = 'Continuous performance architecture that catches regressions before merge';
const primaryColor = '#2563eb';
const secondaryColor = '#3b82f6';
const bgColor = '#eff6ff';
const textColor = '#1e3a5f';

const style = {
  primary: primaryColor,
  primaryHover: secondaryColor,
  bg: bgColor,
  text: textColor,
  border: primaryColor + '33',
  cardBg: '#ffffff',
  codeBg: '#f8fafc',
  muted: textColor + '99',
};

function NavLink({ href, children, active }: { href: string; children: string; active?: boolean }) {
  return (
    <a
      href={href}
      style={{
        fontWeight: 500,
        color: active ? style.primary : style.text,
        textDecoration: 'none',
        transition: 'color 0.15s',
        padding: '0.5rem 0',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.color = style.primary; }}
      onMouseLeave={(e) => { e.currentTarget.style.color = active ? style.primary : style.text; }}
    >
      {children}
    </a>
  );
}

function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  className = '',
  disabled = false,
  type = 'button',
  style: styleProp = {},
  ...rest
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement>) {
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';
  
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '0.95rem',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.15s',
    opacity: disabled ? 0.6 : 1,
    textDecoration: 'none',
    ...(className ? {} : {}),
  };

  const primaryStyle = {
    background: style.primary,
    color: 'white',
  };
  
  const secondaryStyle = {
    background: style.cardBg,
    color: style.text,
    border: '1px solid ' + style.border,
  };

  const hoverStyle = isPrimary 
    ? { background: style.primaryHover } 
    : { borderColor: style.primary };

  const combinedStyle = { ...baseStyle, ...(isPrimary ? primaryStyle : secondaryStyle), ...hoverStyle, ...styleProp };

  const Content = href ? 'a' : 'button';
  
  return (
    <Content
      href={href}
      onClick={onClick}
      type={href ? undefined : type}
      style={combinedStyle}
      disabled={disabled && !href}
      onMouseEnter={(e) => { if (!disabled) Object.assign(e.currentTarget.style, hoverStyle); }}
      onMouseLeave={(e) => { if (!disabled) Object.assign(e.currentTarget.style, isPrimary ? primaryStyle : secondaryStyle); }}
      {...rest}
    >
      {children}
      {href && <Icons.ChevronRight size={16} />}
    </Content>
  );
}

function Card({ children, className = '', style: styleProp = {}, ...rest }: { children: React.ReactNode; className?: string; style?: React.CSSProperties; } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      style={{
        background: style.cardBg,
        border: '1px solid ' + style.border,
        borderRadius: '12px',
        padding: '1.5rem',
        transition: 'transform 0.2s, box-shadow 0.2s',
        ...(className ? {} : {}),
        ...styleProp,
      }}
      onMouseEnter={(e) => { 
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 12px 24px -12px ' + style.primary;
      }}
      onMouseLeave={(e) => { 
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: 600,
      background: style.primary + '15',
      color: style.primary,
      marginBottom: '1rem',
    }}>
      {children}
    </span>
  );
}

function Container({ children, style: styleProp = {}, ...rest }: { children: React.ReactNode; style?: React.CSSProperties; } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', ...styleProp }} {...rest}>
      {children}
    </div>
  );
}

function Section({ children, id, style: styleProp = {}, ...rest }: { children: React.ReactNode; id?: string; style?: React.CSSProperties; } & React.HTMLAttributes<HTMLElement>) {
  return (
    <section id={id} style={{ marginBottom: '3rem', ...styleProp }} {...rest}>
      {children}
    </section>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid ' + style.border,
    }}>
      <Container>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <Link href="/" style={{ fontWeight: 700, fontSize: '1.25rem', color: style.text, textDecoration: 'none' }}>
            {brand}
          </Link>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{ display: mobileMenuOpen ? 'flex' : 'none', flexDirection: 'column', position: 'absolute', top: '64px', left: 0, right: 0, background: 'white', padding: '1rem', borderBottom: '1px solid ' + style.border, gap: '1rem' }}>
              <NavLink href="/features">Features</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/docs">Docs</NavLink>
              <NavLink href="/about">About</NavLink>
              <Button variant="primary" href={ctaPrimary.href}>{ctaPrimary.text}</Button>
            </div>
            
            <div style={{ display: 'none', gap: '2rem' }} className="nav-links">
              <NavLink href="/features">Features</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/docs">Docs</NavLink>
              <NavLink href="/about">About</NavLink>
            </div>
            
            <Button variant="secondary" href={ctaSecondary.href} style={{ display: 'none' }}>
              {ctaSecondary.text}
            </Button>
            <Button variant="primary" href={ctaPrimary.href} style={{ display: 'none' }}>
              {ctaPrimary.text}
            </Button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                padding: '0.5rem',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                borderRadius: '8px',
              }}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <Icons.Brain size={24} style={{ color: style.text }} />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <Section style={{ padding: '5rem 0', textAlign: 'center' }}>
      <Container>
        <Badge>{category.charAt(0).toUpperCase() + category.slice(1)} Tool</Badge>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
          fontWeight: 800, 
          lineHeight: 1.1, 
          marginBottom: '1.5rem',
          color: style.text,
          letterSpacing: '-0.02em',
        }}>
          {tagline}
        </h1>
        <p style={{ 
          fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', 
          color: style.muted, 
          maxWidth: '700px', 
          margin: '0 auto 2.5rem',
          lineHeight: 1.7,
        }}>
          {solution}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" href={ctaPrimary.href} style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
            {ctaPrimary.text}
            <Icons.ArrowRight size={18} />
          </Button>
          <Button variant="secondary" href={ctaSecondary.href} style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
            {ctaSecondary.text}
          </Button>
        </div>
        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', color: style.muted, fontSize: '0.9rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Icons.CheckCircle size={16} />
            <span>No credit card required</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Icons.CheckCircle size={16} />
            <span>14-day free trial</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Icons.CheckCircle size={16} />
            <span>Cancel anytime</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Features() {
  return (
    <Section id="features">
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 700, marginBottom: '1rem', color: style.text }}>
            Everything you need to {category}
          </h2>
          <p style={{ fontSize: '1.1rem', color: style.muted, maxWidth: '600px', margin: '0 auto' }}>
            Powerful features designed for modern development workflows
          </p>
        </div>
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {features.map((feature, i) => (
            <Card key={i}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '12px', 
                  background: style.primary + '15', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icons.Zap size={24} style={{ color: style.primary }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: style.text }}>
                    Feature {i + 1}
                  </h3>
                  <p style={{ color: style.muted, lineHeight: 1.6 }}>{feature}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    { title: 'Connect', description: 'Link your repository or import your configuration in seconds' },
    { title: 'Analyze', description: 'Our AI examines your codebase, patterns, and history' },
    { title: 'Optimize', description: 'Get actionable insights, fixes, and recommendations' },
    { title: 'Automate', description: 'Set up continuous monitoring and automated workflows' },
  ];
  
  return (
    <Section id="how-it-works" style={{ background: style.cardBg, borderRadius: '16px', padding: '4rem 0', margin: '4rem 0', border: '1px solid ' + style.border }}>
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 700, marginBottom: '1rem', color: style.text }}>
            How it works
          </h2>
          <p style={{ fontSize: '1.1rem', color: style.muted, maxWidth: '600px', margin: '0 auto' }}>
            Get started in minutes, not hours
          </p>
        </div>
        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {steps.map((step, i) => (
            <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{ 
                width: '64px', 
                height: '64px', 
                borderRadius: '16px', 
                background: style.primary + '15', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: style.primary,
              }}>
                {i + 1}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: style.text }}>
                {step.title}
              </h3>
              <p style={{ color: style.muted, lineHeight: 1.6 }}>{step.description}</p>
              {i < steps.length - 1 && (
                <div style={{ position: 'absolute', top: '16px', right: '-10%', width: '20%', height: '2px', background: 'linear-gradient(90deg, ' + style.primary + '33, transparent)' }} />
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Pricing() {
  const pricingAny = pricing as Record<string, string | boolean>;
  const teamPrice = pricingAny.team?.replace('/mo', '') || pricingAny.enterprise?.replace('/mo', '') || '$79';
  const teamFeatures = pricingAny.enterprise ? 
    ['Everything in Pro', 'SSO & SAML', 'Audit logs', 'Custom integrations', 'Dedicated support'] :
    ['Everything in Pro', 'Team collaboration', 'Advanced analytics', 'Priority support', 'Custom integrations'];
  const teamCta = pricingAny.enterprise ? 'Contact Sales' : 'Get Started';
  const teamName = pricingAny.enterprise ? 'Enterprise' : 'Team';
  
  const tiers = [
    { name: 'Free', price: '$0', period: '/month', features: ['Core features', 'Up to 5 projects', 'Community support', 'Basic analytics'], cta: 'Start Free', highlighted: false },
    { name: 'Pro', price: pricing.pro?.replace('/mo', '') || '$29', period: '/month', features: ['Everything in Free', 'Unlimited projects', 'Priority support', 'Advanced analytics', 'Team collaboration'], cta: 'Get Started', highlighted: true },
    { name: teamName, price: teamPrice, period: '/month', features: teamFeatures, cta: teamCta, highlighted: false },
  ];
  
  return (
    <Section id="pricing">
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 700, marginBottom: '1rem', color: style.text }}>
            Simple, transparent pricing
          </h2>
          <p style={{ fontSize: '1.1rem', color: style.muted, maxWidth: '600px', margin: '0 auto' }}>
            Start free. Upgrade when you need more.
          </p>
        </div>
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', alignItems: 'start' }}>
          {tiers.map((tier, i) => (
            <Card key={i} style={{ 
              ...(tier.highlighted ? { 
                border: '2px solid ' + style.primary,
                boxShadow: '0 0 0 4px ' + style.primary + '15',
              } : {})
            }}>
              {tier.highlighted && (
                <div style={{ 
                  background: style.primary, 
                  color: 'white', 
                  padding: '0.25rem 0.75rem', 
                  borderRadius: '9999px', 
                  fontSize: '0.75rem', 
                  fontWeight: 600,
                  display: 'inline-block',
                  marginBottom: '1rem',
                }}>
                  Most Popular
                </div>
              )}
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: style.text }}>{tier.name}</h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: 800, color: style.text }}>{tier.price}</span>
                <span style={{ color: style.muted, fontSize: '1rem' }}>{tier.period}</span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {tier.features.map((feat, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: style.text }}>
                    <Icons.CheckCircle size={18} style={{ color: style.primary, flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant={tier.highlighted ? 'primary' : 'secondary'} 
                href={ctaPrimary.href}
                style={{ width: '100%' }}
              >
                {tier.cta}
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FAQ() {
  const faqs = [
    { q: 'How does ' + brand + ' work?', a: brand + ' integrates with your development workflow to provide ' + category + ' insights and automation. It analyzes your code, configuration, and patterns to deliver actionable recommendations.' },
    { q: 'Is my code sent to external servers?', a: 'No. All analysis runs locally in your environment or CI pipeline. We never upload your source code. Only anonymized usage metrics are collected with your consent.' },
    { q: 'What languages and frameworks are supported?', a: 'We support 50+ languages including TypeScript, Python, Go, Rust, Java, and all major frameworks. See our docs for the full list.' },
    { q: 'Can I self-host?', a: 'Yes, enterprise plans include self-hosted deployment options with air-gapped support. Contact sales for details.' },
    { q: 'How does pricing work?', a: 'Free tier includes core features for individuals. Pro adds unlimited usage and advanced features. Team adds SSO, audit logs, and dedicated support. No per-seat pricing.' },
    { q: 'What integrations are available?', a: 'GitHub, GitLab, Bitbucket, VS Code, JetBrains IDEs, Slack, Discord, Linear, Jira, and more. See our integrations page for the full list.' },
  ];
  
  return (
    <Section id="faq">
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 700, marginBottom: '1rem', color: style.text }}>
            Frequently asked questions
          </h2>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, i) => (
            <details key={i} style={{ border: '1px solid ' + style.border, borderRadius: '8px', marginBottom: '1rem', overflow: 'hidden' }}>
              <summary style={{ 
                padding: '1.25rem 1.5rem', 
                cursor: 'pointer', 
                fontWeight: 600, 
                color: style.text,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                listStyle: 'none',
              }}>
                {faq.q}
                <Icons.ChevronRight size={20} style={{ color: style.muted, transition: 'transform 0.2s' }} />
              </summary>
              <div style={{ padding: '0 1.5rem 1.5rem', color: style.muted, lineHeight: 1.7 }}>
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function CTA() {
  return (
    <Section style={{ textAlign: 'center', padding: '4rem 0' }}>
      <Container>
        <h2 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 700, marginBottom: '1rem', color: style.text }}>
          Ready to transform your {category} workflow?
        </h2>
        <p style={{ fontSize: '1.1rem', color: style.muted, maxWidth: '600px', margin: '0 auto 2rem' }}>
          Join thousands of developers who use {brand} to ship better code faster.
        </p>
        <Button variant="primary" href={ctaPrimary.href} style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
          {ctaPrimary.text}
          <Icons.ArrowRight size={18} />
        </Button>
      </Container>
    </Section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ borderTop: '1px solid ' + style.border, padding: '3rem 0 2rem', marginTop: '4rem', color: style.muted }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <h3 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '1rem', color: style.text }}>
              {brand}
            </h3>
            <p style={{ lineHeight: 1.7, fontSize: '0.95rem' }}>
              {tagline}
            </p>
          </div>
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '1rem', color: style.text }}>Product</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="/features" style={{ color: style.muted, fontSize: '0.95rem' }}>Features</a></li>
              <li><a href="/pricing" style={{ color: style.muted, fontSize: '0.95rem' }}>Pricing</a></li>
              <li><a href="/docs" style={{ color: style.muted, fontSize: '0.95rem' }}>Documentation</a></li>
              <li><a href="/changelog" style={{ color: style.muted, fontSize: '0.95rem' }}>Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '1rem', color: style.text }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="/about" style={{ color: style.muted, fontSize: '0.95rem' }}>About</a></li>
              <li><a href="/blog" style={{ color: style.muted, fontSize: '0.95rem' }}>Blog</a></li>
              <li><a href="/careers" style={{ color: style.muted, fontSize: '0.95rem' }}>Careers</a></li>
              <li><a href="/contact" style={{ color: style.muted, fontSize: '0.95rem' }}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '1rem', color: style.text }}>Legal</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="/privacy" style={{ color: style.muted, fontSize: '0.95rem' }}>Privacy Policy</a></li>
              <li><a href="/terms" style={{ color: style.muted, fontSize: '0.95rem' }}>Terms of Service</a></li>
              <li><a href="/security" style={{ color: style.muted, fontSize: '0.95rem' }}>Security</a></li>
              <li><a href="/cookies" style={{ color: style.muted, fontSize: '0.95rem' }}>Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid ' + style.border, paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontSize: '0.9rem' }}>
          <p>© {currentYear} {brand}. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: style.muted }}>
              <Icons.Github size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: style.muted }}>
              <Icons.Twitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: style.muted }}>
              <Icons.Linkedin size={20} />
            </a>
            <a href={"mailto:hello@" + 'perfarchitect.com'} style={{ color: style.muted }}>
              <Icons.Mail size={20} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}