import React from 'react';
import { FiArrowRight, FiActivity, FiShield, FiCheck, FiCpu, FiTerminal, FiZap } from 'react-icons/fi';
import UrlShortenerCard from '../components/UrlShortenerCard.jsx';

const Home = ({ onShorten, isShortening, shortResult, error }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-12 pb-16 w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-warm-900 leading-[1.1] mb-6">
              Shrink your <span className="text-primary underline decoration-wavy decoration-primary-100">links</span>,<br />
              grow your reach.
            </h1>
            <p className="text-md md:text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
              The premium link management platform for creators. Track every click, customize every slug, and optimize your digital presence with neo-pop style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#shortener" 
                className="bg-primary text-white font-bold px-8 py-4 pill-shape text-center sunset-glow hover:scale-105 transition-transform active:scale-95 text-sm"
              >
                Start Building for Free
              </a>
              <a 
                href="/dashboard" 
                className="border-2 border-primary text-primary font-bold px-8 py-4 pill-shape text-center hover:bg-primary/5 transition-all text-sm"
              >
                View Dashboard
              </a>
            </div>
          </div>
          
          <div className="relative w-full max-w-lg lg:max-w-xl mx-auto">
            <div className="bg-white rounded-[2rem] p-4 shadow-xl border border-warm-200 rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                className="rounded-[1.5rem] w-full h-auto object-cover border border-warm-200 shadow-md"
                alt="Vibrant sleek MERN URL analytics dashboard dashboard mockup displayed on a modern laptop screen." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlBUbCt3dfYdvpRM1Ge6l7UznfUQoMBcZtyQcFqppNmU0HitdbztIF5PPbUo0t1RC73SIJp_T_PcqI9BEGgJP5svpL19mfQCD4IEWigt_DnVZRY2TUDKo9kLdCAYNc5PskcBm3imf-WcFOTJdYccVihT-WC4mSThd8Ml90KHdPI0og7WlLBi96EYh-wuqARXaNs6HnKDO_mB4AOC6nGGwoBduatLjoCCs9Qhkt2IVmDb7Zfu3r5xF4kLRa1vwgcn31nF86rV7yHBG9"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary opacity-10 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>
      </header>

      {/* URL Shortener Card Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8 relative z-20 scroll-mt-20">
        <UrlShortenerCard 
          onShorten={onShorten} 
          isShortening={isShortening} 
          shortResult={shortResult} 
          error={error} 
        />
      </section>

      {/* Features Bento Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 py-16 text-center" id="features">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-warm-900 tracking-tight mb-2">Tools for modern creators</h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-sm">
            Everything you need to manage your digital footprint in one energetic, high-performance platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
          {/* Deep Analytics Card */}
          <div className="md:col-span-8 bg-white rounded-[2rem] p-8 shadow-sm border border-warm-200/50 flex flex-col justify-between text-left sunset-glow-hover transition-all">
            <div>
              <div className="text-primary text-4xl mb-4 font-bold flex items-center gap-2">
                <FiActivity />
              </div>
              <h3 className="text-xl font-bold text-warm-900 mb-1">Deep Analytics</h3>
              <p className="text-slate-500 text-sm max-w-md leading-relaxed">
                Track clicks and real-time conversion trends with surgical precision. Learn when your links get clicked.
              </p>
            </div>
            {/* Visual representing graph */}
            <div className="relative h-16 w-full bg-slate-50 rounded-xl overflow-hidden mt-4">
              <div className="absolute bottom-0 left-0 w-full flex items-end gap-1.5 px-4 h-full">
                <div className="bg-primary/20 w-full h-[40%] rounded-t-sm animate-pulse"></div>
                <div className="bg-primary w-full h-[75%] rounded-t-sm"></div>
                <div className="bg-primary/40 w-full h-[60%] rounded-t-sm"></div>
                <div className="bg-amber-400 w-full h-[95%] rounded-t-sm"></div>
                <div className="bg-primary w-full h-[50%] rounded-t-sm"></div>
              </div>
            </div>
          </div>

          {/* Branded Card */}
          <div className="md:col-span-4 bg-tertiary-fixed text-on-tertiary-fixed rounded-[2rem] p-8 shadow-sm flex flex-col justify-between text-left sunset-glow-hover transition-all">
            <div className="text-4xl text-primary mb-4 font-bold">
              <FiCheck />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1 text-on-tertiary-fixed">Custom Branded</h3>
              <p className="text-[#5700c9] text-sm opacity-80 leading-relaxed">
                Replace links.xyz with your own domain for 40% more trust.
              </p>
            </div>
          </div>

          {/* Developer API Card */}
          <div className="md:col-span-4 bg-white rounded-[2rem] p-8 shadow-sm border border-warm-200/50 flex flex-col justify-center items-center text-center sunset-glow-hover transition-all">
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
              <FiTerminal className="text-amber-800 text-2xl" />
            </div>
            <h3 className="text-lg font-bold text-warm-900">Developer API</h3>
            <p className="text-slate-500 text-xs mt-1">Full backend system integrated with Express.</p>
          </div>

          {/* Smart Automation Card */}
          <div className="md:col-span-8 bg-warm-200 text-warm-900 rounded-[2rem] p-8 shadow-sm border border-warm-200/50 flex flex-row items-center gap-6 text-left sunset-glow-hover transition-all">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">Smart Automation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Auto-expire links or redirect based on user location and time of day.
              </p>
            </div>
            <div className="hidden sm:flex w-24 h-24 bg-primary/10 rounded-2xl items-center justify-center">
              <FiCpu className="text-primary text-4xl" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (Three Column) */}
      <section className="w-full bg-[#f8f3e9] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-warm-900 tracking-tight mb-12">Three steps to link mastery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white rounded-[1.5rem] shadow-md sunset-glow flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-primary font-black text-xl">01</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-warm-900">Input & Tag</h3>
              <p className="text-slate-500 text-sm max-w-xs mx-auto">
                Drop your long URL and add relevant tags for easier categorization later.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white rounded-[1.5rem] shadow-md sunset-glow flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-primary font-black text-xl">02</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-warm-900">Customize Slug</h3>
              <p className="text-slate-500 text-sm max-w-xs mx-auto">
                Create a memorable, branded backhalf that people actually want to click.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white rounded-[1.5rem] shadow-md sunset-glow flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-primary font-black text-xl">03</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-warm-900">Monitor Growth</h3>
              <p className="text-slate-500 text-sm max-w-xs mx-auto">
                Watch real-time traffic spikes and adjust your strategy based on click data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="bg-primary rounded-[2rem] p-10 md:p-12 shadow-xl relative overflow-hidden text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">
            <div>
              <div className="text-4xl lg:text-5xl font-black mb-1">4.2B</div>
              <div className="text-[10px] uppercase font-bold tracking-wider opacity-80">Clicks Optimized</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-black mb-1">150M</div>
              <div className="text-[10px] uppercase font-bold tracking-wider opacity-80">Shortened Links</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-black mb-1">99.9%</div>
              <div className="text-[10px] uppercase font-bold tracking-wider opacity-80">Uptime Rate</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-black mb-1">12K+</div>
              <div className="text-[10px] uppercase font-bold tracking-wider opacity-80">Active Brands</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold tracking-tight text-warm-900 mb-4">Ready to take control?</h2>
        <p className="text-slate-500 text-md leading-relaxed mb-8 max-w-lg mx-auto">
          Join the world's most creative teams and start branding your links today. No credit card required.
        </p>
        <a 
          href="#shortener" 
          className="bg-primary text-white font-bold px-8 py-4 pill-shape inline-block hover:scale-105 active:scale-95 transition-all text-sm shadow-lg shadow-primary/20"
        >
          Create Your Free Account
        </a>
      </section>
    </div>
  );
};

export default Home;
