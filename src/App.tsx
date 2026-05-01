/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Home, 
  Search, 
  History, 
  BarChart3, 
  Image as ImageIcon, 
  Menu, 
  ShoppingBag,
  Leaf,
  Droplets,
  Sun,
  ArrowRight,
  ChevronRight,
  Star,
  Share2,
  Instagram,
  Twitter,
  MessageCircle,
  Trash2,
  CreditCard,
  CheckCircle2,
  ArrowLeft,
  Plus,
  Minus,
  QrCode,
  CircleDollarSign
} from 'lucide-react';
import { MANGO_VARIETIES, MangoVariety } from './constants';

interface CartItem extends MangoVariety {
  quantity: number;
  price: number;
}

// --- Components ---

const TopBar = ({ onCartClick, cartCount, onMenuClick }: { onCartClick: () => void, cartCount: number, onMenuClick: () => void }) => (
  <header className="fixed top-0 left-0 w-full z-[100] glass border-b border-white/5 px-6 py-5 flex justify-between items-center transition-all duration-500">
    <button onClick={onMenuClick} className="text-white p-2 active:scale-90 transition-transform relative group">
      <div className="absolute inset-0 bg-brand-500/20 blur-md rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
      <Menu size={28} className="relative z-10" />
    </button>
    <div className="font-serif italic font-bold text-gradient text-3xl tracking-tight drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]">
      Preethi Grove
    </div>
    <button onClick={onCartClick} className="text-white p-2 relative active:scale-90 transition-transform group">
      <div className="absolute inset-0 bg-brand-500/20 blur-md rounded-full scale-0 group-hover:scale-110 transition-transform"></div>
      <ShoppingBag size={28} className="relative z-10" />
      {cartCount > 0 && (
        <span className="absolute top-0 right-0 w-6 h-6 bg-brand-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-dark-900 font-bold shadow-glow-sm">
          {cartCount}
        </span>
      )}
    </button>
  </header>
);

const BottomNav = ({ activeTab, onTabChange }: { activeTab: string, onTabChange: (tab: string) => void }) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Orchard' },
    { id: 'varieties', icon: Search, label: 'Varieties' },
    { id: 'farmer', icon: History, label: 'Stories' },
    { id: 'insights', icon: BarChart3, label: 'Insights' },
    { id: 'gallery', icon: ImageIcon, label: 'Gallery' },
  ];

  return (
    <nav className="fixed bottom-6 left-6 right-6 z-[100] glass rounded-full px-6 py-4 flex justify-around items-center border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex flex-col items-center gap-1 transition-all duration-300 relative group ${
            activeTab === tab.id ? 'text-brand-400 scale-110' : 'text-stone-500 hover:text-white'
          }`}
        >
          {activeTab === tab.id && (
            <motion.div 
              layoutId="nav-active"
              className="absolute -inset-x-4 -inset-y-2 bg-brand-500/10 blur-md rounded-xl"
            />
          )}
          <tab.icon size={24} className="relative z-10" fill={activeTab === tab.id ? "currentColor" : "none"} />
          <span className="text-[10px] uppercase tracking-widest font-sans font-bold relative z-10">
            {tab.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

// --- Screens ---

const HomeScreen = ({ onExplore, onMangoTap }: { onExplore: () => void, onMangoTap: (mango: MangoVariety) => void }) => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            className="w-full h-full object-cover opacity-60"
            alt="Orchard background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/60 to-dark-900"></div>
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-brand-400 text-sm font-semibold mb-8 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Heritage Harvesting
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight tracking-tight text-white drop-shadow-2xl">
              Preethi <br />
              <span className="text-gradient">Grove Premium</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Experience the cinematic artisanal heritage of Ratnagiri. Where traditional wisdom meets 4D visual flair.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={onExplore}
                className="bg-brand-500 hover:bg-brand-400 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:-translate-y-1 block"
              >
                The Collection
              </button>
              <button className="glass hover:bg-white/10 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1">
                Gallery <ArrowRight size={20} className="text-brand-400" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seasonal Section */}
      <section className="py-32 px-6 container mx-auto relative z-10">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-brand-500 font-semibold tracking-widest uppercase text-sm mb-4">Limited Selection</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">Seasonal Favorites</h3>
          </div>
          <button onClick={onExplore} className="text-brand-400 font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
            View All <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex overflow-x-auto gap-8 pb-12 snap-x px-4 no-scrollbar">
          {MANGO_VARIETIES.slice(0, 4).map((mango) => (
            <motion.div 
              key={mango.id}
              onClick={() => onMangoTap(mango)}
              whileHover={{ y: -10 }}
              className="min-w-[320px] glass p-8 rounded-[2.5rem] snap-center relative overflow-hidden group cursor-pointer border border-white/5"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 blur-3xl rounded-full translate-x-10 -translate-y-10 group-hover:bg-brand-500/20 transition-colors"></div>
              
              <img 
                src={mango.image} 
                className="w-48 h-48 object-contain mx-auto mb-8 drop-shadow-2xl group-hover:scale-110 transition-transform duration-700" 
                alt={mango.name} 
              />
              
              <div className="relative z-10">
                <h4 className="font-serif text-2xl font-bold mb-2 text-white">{mango.name}</h4>
                <p className="text-stone-400 text-sm mb-6 flex items-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span> {mango.origin}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="font-bold text-2xl text-brand-secondary">₹1,800</span>
                  <div className="p-3 bg-brand-500 text-white rounded-2xl shadow-glow active:scale-90 transition-transform">
                    <Plus size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

const FarmerScreen = () => {
  const [showInquiry, setShowInquiry] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-32 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full h-[500px] rounded-[3rem] overflow-hidden mb-12 shadow-2xl relative group"
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOPshztFVIZOJ562qgz_Cy-hS75lEAz1NwT4zaf4lWxtDopcpBFzIk6-nfXEv74lTCeOOunJOL-ULnijM1c8wmArO2yMxMaLswyaIx0MqoFjh6yO-BtrctMKd_lKgV7R5vp_Mw_qtjNBV13b4IC4d1nq9I1oKRt3jeNs7csT1TSkejgMMzVoTOozRH8OKqoRsWmI1iIiDPMtcmCAHmJLojqgleJNDWpkAOQQooCTVs_65qYNlKTHKH6LK-7HSJJgee-O4r507tm5NF"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            alt="The Master Cultivator"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent"></div>
          <div className="absolute bottom-10 left-10">
            <h2 className="font-serif text-5xl font-bold text-white mb-2">Aakash Ji & Preethi Venkat</h2>
            <p className="text-brand-400 font-sans tracking-[0.2em] uppercase text-sm font-bold">Chief Cultivator & Visionary</p>
          </div>
          <button 
            className="absolute top-8 right-8 w-14 h-14 glass rounded-full flex items-center justify-center text-white hover:bg-brand-500 transition-colors"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Preethi Grove',
                  text: 'Check out the world of elite mangoes at Preethi Grove.',
                  url: window.location.href,
                });
              }
            }}
          >
            <Share2 size={24} />
          </button>
        </motion.div>

        <div className="space-y-12">
          <div className="glass p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-500/5 blur-3xl rounded-full"></div>
            <h3 className="font-serif text-3xl font-bold italic text-brand-400 mb-8 leading-tight">
              "A mango tree doesn't just bear fruit; it carries the weight of history and the promise of summer."
            </h3>
            <p className="text-stone-300 text-lg leading-relaxed font-light mb-8">
              At Preethi Grove, we don't just farm; we curate experiences. Our groves in Ratnagiri have been home to rare grafts and artisanal techniques passed down through generations. 
            </p>
            <div className="flex gap-4">
              <button className="p-4 glass rounded-2xl text-brand-400 hover:bg-brand-500 hover:text-white transition-all"><Instagram size={24} /></button>
              <button className="p-4 glass rounded-2xl text-brand-400 hover:bg-brand-500 hover:text-white transition-all"><Twitter size={24} /></button>
              <button className="p-4 glass rounded-2xl text-brand-400 hover:bg-brand-500 hover:text-white transition-all"><MessageCircle size={24} /></button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-[2rem] border border-white/5">
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-6 font-bold">01</div>
              <h4 className="text-xl font-bold mb-4">Artisanal Grafts</h4>
              <p className="text-stone-400 font-light">We maintain a unique collection of rare grafts, some over a century old, ensuring unmatched flavor profiles.</p>
            </div>
            <div className="glass p-8 rounded-[2rem] border border-white/5">
              <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 mb-6 font-bold">02</div>
              <h4 className="text-xl font-bold mb-4">Precision Cultivation</h4>
              <p className="text-stone-400 font-light">Every tree is monitored for moisture and nutrient intake, balancing traditional wisdom with modern data.</p>
            </div>
          </div>

          <motion.button 
            onClick={() => setShowInquiry(true)}
            className="w-full py-6 bg-gradient-to-r from-brand-500 to-red-600 text-white rounded-full font-bold uppercase tracking-[0.2em] shadow-glow-lg transition-transform active:scale-95"
          >
            Request Private Allocation
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {showInquiry && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark-900/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="w-full max-w-lg glass p-10 rounded-[3rem] border border-white/10 relative"
            >
              <button onClick={() => setShowInquiry(false)} className="absolute top-8 right-8 text-stone-400 hover:text-white transition-colors">
                <Plus size={32} className="rotate-45" />
              </button>
              <h2 className="text-3xl font-serif font-bold mb-2">Request Allocation</h2>
              <p className="text-stone-400 mb-8">Our private harvest is limited. Express your interest below.</p>
              
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setShowInquiry(false); alert('Inquiry Transmitted!'); }}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-500 ml-2 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all font-sans" placeholder="Your Full Name" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-500 ml-2 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all font-sans" placeholder="you@example.com" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-500 ml-2 uppercase tracking-widest">Preferred Variety</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all font-sans">
                    {MANGO_VARIETIES.map(v => <option key={v.id} value={v.id} className="bg-dark-800">{v.name}</option>)}
                  </select>
                </div>
                <button type="submit" className="w-full py-5 bg-brand-500 text-white rounded-full font-bold uppercase tracking-widest shadow-glow">Transmit Request</button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};const VarietiesScreen = ({ onAddToCart }: { onAddToCart: (mango: MangoVariety) => void }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVarieties = MANGO_VARIETIES.filter(mango => 
    mango.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mango.origin.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 pb-32 px-6 text-white">
      <div className="max-w-xl mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">The Royal Harvest</h2>
        <p className="text-stone-400 font-light text-lg">Our artisanal collection of rare grafts, each with a cinematic flavor profile.</p>
      </div>
      
      <div className="relative mb-12 max-w-2xl mx-auto">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-400" size={24} />
        <input 
          type="text" 
          placeholder="Search variety or origin..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-6 pl-16 bg-white/5 rounded-3xl border border-white/10 text-white focus:ring-2 focus:ring-brand-500 transition-all placeholder:text-stone-600 font-serif text-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVarieties.length > 0 ? (
          filteredVarieties.map((mango) => (
            <motion.div
              key={mango.id}
              onClick={() => onAddToCart(mango)}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.95 }}
              className="glass p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 blur-3xl rounded-full transition-all group-hover:bg-brand-500/20"></div>
              <motion.img 
                layoutId={`img-${mango.id}`}
                src={mango.image} 
                className="w-40 h-40 object-contain mx-auto mb-8 drop-shadow-2xl group-hover:scale-110 transition-transform duration-700" 
                alt={mango.name}
              />
              <div className="relative z-10 text-center">
                <h3 className="font-serif text-2xl font-bold mb-1 text-white">{mango.name}</h3>
                <p className="text-stone-400 text-sm mb-6 flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span> {mango.origin}
                </p>
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
                  <span className="font-bold text-2xl text-brand-secondary">₹1,800</span>
                  <div className="p-3 bg-brand-500/10 text-brand-500 rounded-2xl hover:bg-brand-500 hover:text-white transition-all active:scale-95">
                    <Plus size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 glass rounded-[3rem] border-dashed border-white/10">
            <p className="font-serif text-stone-400 text-xl italic">No variety matches your quest...</p>
          </div>
        )}
      </div>
    </div>
  );
};

const InsightsScreen = () => (
  <div className="min-h-screen pt-24 pb-32 px-6">
    <h2 className="font-serif text-4xl font-bold mb-4">Orchard Intelligence</h2>
    <p className="text-stone-500 mb-10">Real-time data from our soil sensors and satellite monitoring systems.</p>

    <div className="grid gap-6">
      <div className="p-8 bg-brand-surface-container rounded-[2rem] border border-white/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-tertiary/5 rounded-full -mr-16 -mt-16"></div>
        <div className="flex items-center gap-3 mb-6">
          <BarChart3 className="text-brand-primary" size={24} />
          <h3 className="font-serif text-xl font-bold">Seasonal Yield Trends</h3>
        </div>
        <div className="h-40 flex items-end gap-3 px-2">
          {[40, 60, 45, 90, 75, 55, 80].map((h, i) => (
            <motion.div 
              key={i} 
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="flex-1 bg-brand-primary/20 rounded-t-lg relative group"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {h}%
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-between mt-4 text-[10px] uppercase font-bold text-stone-400 tracking-tighter">
          <span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-6 glass rounded-3xl">
          <Droplets className="text-blue-500 mb-3" size={24} />
          <p className="text-3xl font-bold font-serif">82%</p>
          <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Soil Health</p>
        </div>
        <div className="p-6 glass rounded-3xl">
          <Sun className="text-amber-500 mb-3" size={24} />
          <p className="text-3xl font-bold font-serif">28°C</p>
          <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Ambient Temp</p>
        </div>
      </div>

      <div className="p-8 bg-black/5 rounded-[2rem] flex items-center justify-between">
        <div>
          <h4 className="font-serif text-lg font-bold">Next Harvest Window</h4>
          <p className="text-stone-500 text-sm">Peak ripeness forecast: May 12-18</p>
        </div>
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
          <ChevronRight className="text-brand-primary" />
        </div>
      </div>
    </div>
  </div>
);

const GalleryScreen = () => (
  <div className="min-h-screen pt-24 pb-32 px-6">
    <h2 className="font-serif text-4xl font-bold mb-4">Farm Portraits</h2>
    <p className="text-stone-500 mb-10">Capturing the soul of Preethi Grove through the seasons.</p>

    <div className="grid grid-cols-2 gap-4">
      {[
        "https://lh3.googleusercontent.com/aida-public/AB6AXuApYn0ZXi8UDulMQvCEKqAmbrKcK_eSKCn6g7mZ4NhzreXwhohXADSK875hYu2pR0bNivh7VWyk-Qnw3SbCH4heuVV5ANj3WqNRPCdvDtGIyiyPUMzC3PZ106U-Km3esuc1jTPhE6TANcSjJJdLIvnddUv1kQ49RWo99PjwN2j4ZI9FThJuBvBCvD7TnjXgbGM1eXb8UNKsgUMHSn7q49-BP2_mppx5mD72I-NTLviDEpyW0w8yJpuoHeMKcmcOIUuEm8KfsIrrYLkJ",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBo6jDWZ60qbAMbKpPGxVmYcIlpQBU6jeB7X310NNc8DYr8H2rlICP0J-4MlXtqrptyskzGak9QFDP9tFAZ0F8DpR-5zn_hphfgdCFgs9Ogmy_D7JOAKsOJM8ngNUfGHFWiJjrOn6wVOatdK01WGrcHKx3uqUgdOxKCa8YCNlofSa87t6wqknGH7ZgX3V09BOyo2r9lMwSt2g4SxQlZSE7nSNdteRTJYIvUoiReoqIE7t70zD9TEEa_e38iTW0m1Tmd3cGRAexA_IUU",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDBdxXUp7xjuKf5Ja31asSyaRUD2wa_ydmS8rK373xhc9GhcccCED-1kVW8xFVCM7t7ohl_5SrQxUyps06lV35Ny_S9CzZISiDr_KGhaQ2iXgTAgDY1Pc7h-Q9o_dLBWExTF7l1cmpPKcPEXm03oJwijmtp3BYzE07DtXsik0JL-x9h5_agDuzqYzHtqbaNST_fZ5IIB6FF7Y27yzSRJ68H0VMtdDbfVTjwMA_XrukNuoN3Q79on8_QM6MdfWPYnfUXD2cPPST4Mk_Y",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAWCwILi8igx8HWdcRQqpZGR-IKG6C7wF1sg_zkPF78-iyTs_lov6mGVh27g95H2VEUzqk7TrdpY-zU6uV_CLhQb6ua9A3Of3mPVr1Q3_w3_giYSUXJVw3G6taLfDqSMjUiunZQc3IIZFme9iXAj-K4GVGn2ovGvtSG4OZBbu1ugINqXM5SF_AK2bC57bB-ZCgciNvakBiMyAJGLMbOAqP3_uT24yG9QpBZVnKIVR3s2edeptclrKQO-cW_pwu0j4IyUgZUK1gJ5Tqr",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBOPshztFVIZOJ562qgz_Cy-hS75lEAz1NwT4zaf4lWxtDopcpBFzIk6-nfXEv74lTCeOOunJOL-ULnijM1c8wmArO2yMxMaLswyaIx0MqoFjh6yO-BtrctMKd_lKgV7R5vp_Mw_qtjNBV13b4IC4d1nq9I1oKRt3jeNs7csT1TSkejgMMzVoTOozRH8OKqoRsWmI1iIiDPMtcmCAHmJLojqgleJNDWpkAOQQooCTVs_65qYNlKTHKH6LK-7HSJJgee-O4r507tm5NF",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDqPcDcfknrcoKPO6XCkn8qm9LXWpMbPF_rtcBMsK-d5EV3rqA-M9sO9vwk64YHcPDXNxIVFLV7iWVqZ43v66NbOY9TITpfyegTG8vmNcDgHSzXh_Ik2rzKHz7Hh7pHBJT-IoI5RSG9U0OcxSxLbTxojZ91H2NFHMY_53-0eVZn8X8FIa4yckUlm_pQC06AzFb9U1RCGQXdc4zWa7IE9JIQxQEXfguzbLCr44PI_nIwGF349q1eGCGctnQ-zo00BBog6r8fYP8af-13"
      ].map((src, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className={`rounded-2xl overflow-hidden shadow-soft aspect-[4/5] ${idx % 3 === 0 ? 'col-span-2 aspect-video' : ''}`}
        >
          <img src={src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt={`Farm ${idx}`} />
        </motion.div>
      ))}
    </div>
  </div>
);

// --- Cart Screen ---

const CartScreen = ({ cart, onUpdateQuantity, onRemove, onCheckout, onBack }: { 
  cart: CartItem[], 
  onUpdateQuantity: (id: string, delta: number) => void, 
  onRemove: (id: string) => void,
  onCheckout: () => void,
  onBack: () => void
}) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen pt-24 pb-32 px-6">
      <div className="max-w-2xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-stone-400 mb-8 font-medium hover:text-white transition-colors">
          <ArrowLeft size={20} /> Continue Shopping
        </button>
        
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-white">Your Harvest Crate</h2>

        {cart.length === 0 ? (
          <div className="text-center py-20 glass rounded-[3rem] border border-white/5">
            <ShoppingBag size={64} className="mx-auto text-stone-600 mb-6" />
            <p className="text-stone-400 mb-8 font-serif text-2xl italic">The crate awaits its bounty...</p>
            <button onClick={onBack} className="px-10 py-4 bg-brand-500 text-white rounded-full font-bold uppercase tracking-widest text-sm shadow-glow">
              Explore Harvest
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <motion.div 
                layout
                key={item.id} 
                className="glass p-6 rounded-[2.5rem] border border-white/5 flex items-center gap-6 relative overflow-hidden"
              >
                <div className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center overflow-hidden shrink-0">
                  <img src={item.image} className="w-20 h-20 object-contain drop-shadow-xl" alt={item.name} />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-brand-400 font-bold">₹{item.price.toLocaleString()}</p>
                </div>
                <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-2xl border border-white/10">
                  <button 
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="text-stone-400 hover:text-white active:scale-90 transition-transform"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="font-bold w-4 text-center text-white">{item.quantity}</span>
                  <button 
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="text-stone-400 hover:text-white active:scale-90 transition-transform"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-stone-600 hover:text-red-400 transition-colors p-2">
                  <Trash2 size={24} />
                </button>
              </motion.div>
            ))}

            <div className="mt-12 glass rounded-[3rem] p-10 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-500/5 blur-3xl rounded-full"></div>
              <div className="flex justify-between items-center mb-6 text-stone-400">
                <span>Subtotal</span>
                <span className="font-bold text-white">₹{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center mb-8 pt-6 border-t border-white/10">
                <span className="font-serif text-2xl font-bold text-white">Total</span>
                <span className="font-serif text-4xl font-bold text-gradient">₹{(total + 150).toLocaleString()}</span>
              </div>
              <p className="text-[10px] text-stone-500 text-center mb-8 tracking-[0.3em] uppercase font-bold">Inc. ₹150 Express Delivery</p>
              <button 
                onClick={onCheckout}
                className="w-full py-6 bg-brand-500 text-white rounded-full font-bold uppercase tracking-[0.2em] shadow-glow-lg hover:shadow-glow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                Checkout <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CheckoutScreen = ({ total, onComplete, onBack, cart }: { total: number, onComplete: () => void, onBack: () => void, cart: CartItem[] }) => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'cash' | 'card'>('upi');
  const [showQR, setShowQR] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-32 px-6">
      <div className="max-w-xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-stone-400 mb-8 font-medium hover:text-white transition-colors">
          <ArrowLeft size={20} /> Back to Crate
        </button>

        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white text-center">Secure Checkout</h2>
        
        {/* Simplified Order Summary Toggle */}
        <div className="mb-10 flex justify-center">
          <button 
            onClick={() => setShowSummary(!showSummary)}
            className="text-stone-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors"
          >
            {showSummary ? 'Hide Order Details' : 'Show Order Details'}
            <Plus size={14} className={showSummary ? 'rotate-45' : ''} />
          </button>
        </div>

        <AnimatePresence>
          {showSummary && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-10"
            >
              <div className="glass p-6 rounded-3xl border border-white/5 space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center text-sm font-light text-stone-300">
                    <span>{item.name} x {item.quantity}</span>
                    <span className="font-bold">₹{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
                <div className="pt-4 border-t border-white/10 flex justify-between font-bold text-white">
                  <span>Grand Total</span>
                  <span className="text-brand-400">₹{(total + 150).toLocaleString()}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {step === 1 ? (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="glass p-8 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 blur-3xl rounded-full"></div>
              <h3 className="font-serif text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400 text-sm italic">01</div>
                Delivery Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-widest ml-2">Recipient Name</label>
                  <input type="text" placeholder="John Doe" className="w-full p-5 bg-white/5 rounded-2xl border border-white/10 text-white focus:ring-2 focus:ring-brand-500 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-widest ml-2">Contact Number</label>
                  <input type="text" placeholder="+91 9876543210" className="w-full p-5 bg-white/5 rounded-2xl border border-white/10 text-white focus:ring-2 focus:ring-brand-500 outline-none transition-all" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-widest ml-2">Harvest Drop Address</label>
                  <input type="text" placeholder="House No, Street, Apartment" className="w-full p-5 bg-white/5 rounded-2xl border border-white/10 text-white focus:ring-2 focus:ring-brand-500 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-widest ml-2">City</label>
                  <input type="text" placeholder="Mumbai" className="w-full p-5 bg-white/5 rounded-2xl border border-white/10 text-white focus:ring-2 focus:ring-brand-500 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-widest ml-2">Pincode</label>
                  <input type="text" placeholder="400001" className="w-full p-5 bg-white/5 rounded-2xl border border-white/10 text-white focus:ring-2 focus:ring-brand-500 outline-none transition-all" />
                </div>
              </div>
            </div>
            <button 
              onClick={() => setStep(2)}
              className="w-full py-6 bg-brand-500 text-white rounded-full font-bold uppercase tracking-[0.2em] shadow-glow-lg hover:shadow-glow-xl hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              Continue to Payment <ArrowRight size={20} />
            </button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="glass p-8 rounded-[2.5rem] border border-white/10">
              <h3 className="font-serif text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400 text-sm italic">02</div>
                Select Provider
              </h3>
              <div className="space-y-4">
                <button 
                  onClick={() => setPaymentMethod('upi')}
                  className={`w-full flex items-center gap-4 p-6 rounded-[1.5rem] transition-all border-2 ${paymentMethod === 'upi' ? 'border-brand-500 bg-brand-500/10' : 'border-white/5 bg-white/5 hover:bg-white/10'}`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-500">
                    <QrCode size={24} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-bold text-white">Unified UPI</p>
                    <p className="text-xs text-stone-500">Scan & Pay Instantly</p>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'upi' ? 'border-brand-500' : 'border-stone-700'}`}>
                    {paymentMethod === 'upi' && <div className="w-3 h-3 rounded-full bg-brand-500"></div>}
                  </div>
                </button>

                <button 
                  onClick={() => setPaymentMethod('card')}
                  className={`w-full flex items-center gap-4 p-6 rounded-[1.5rem] transition-all border-2 ${paymentMethod === 'card' ? 'border-brand-500 bg-brand-500/10' : 'border-white/5 bg-white/5 hover:bg-white/10'}`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-500">
                    <CreditCard size={24} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-bold text-white">Citadel Card</p>
                    <p className="text-xs text-stone-500">Credit or Debit</p>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'card' ? 'border-brand-500' : 'border-stone-700'}`}>
                    {paymentMethod === 'card' && <div className="w-3 h-3 rounded-full bg-brand-500"></div>}
                  </div>
                </button>

                <button 
                  onClick={() => setPaymentMethod('cash')}
                  className={`w-full flex items-center gap-4 p-6 rounded-[1.5rem] transition-all border-2 ${paymentMethod === 'cash' ? 'border-brand-500 bg-brand-500/10' : 'border-white/5 bg-white/5 hover:bg-white/10'}`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                    <CircleDollarSign size={24} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-bold text-white">Liquid Cash</p>
                    <p className="text-xs text-stone-500">Pay on Harvest Arrival</p>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'cash' ? 'border-brand-500' : 'border-stone-700'}`}>
                    {paymentMethod === 'cash' && <div className="w-3 h-3 rounded-full bg-brand-500"></div>}
                  </div>
                </button>
              </div>

              {paymentMethod === 'upi' && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="mt-8 overflow-hidden">
                  <div className="p-6 bg-white/5 rounded-2xl border border-dashed border-white/20 flex flex-col items-center">
                    <button 
                      onClick={() => setShowQR(!showQR)}
                      className="text-brand-400 text-sm font-bold flex items-center gap-2 mb-4 hover:text-brand-300 transition-colors"
                    >
                      {showQR ? 'Hide Secure QR' : 'Initialize QR Scanner'} <ChevronRight size={16} className={showQR ? 'rotate-90' : ''} />
                    </button>
                    <AnimatePresence>
                      {showQR && (
                        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} className="bg-white p-4 rounded-2xl">
                          <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PreethiGrovePayment" alt="UPI QR" className="w-32 h-32" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={() => setStep(1)}
                className="flex-1 py-6 glass text-white rounded-full font-bold uppercase tracking-widest"
              >
                Back
              </button>
              <button 
                onClick={onComplete}
                className="flex-[2] py-6 bg-brand-500 text-white rounded-full font-bold uppercase tracking-[0.2em] shadow-glow-lg hover:shadow-glow-xl hover:scale-[1.02] active:scale-95 transition-all"
              >
                Place Final Order
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const SuccessScreen = ({ onHome }: { onHome: () => void }) => (
  <div className="min-h-screen flex items-center justify-center px-6">
    <div className="text-center max-w-sm">
      <motion.div 
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', damping: 15 }}
        className="w-32 h-32 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-10 shadow-glow-lg border-4 border-white/20"
      >
        <CheckCircle2 size={64} />
      </motion.div>
      <h2 className="font-serif text-5xl font-bold mb-6 text-white text-gradient">Harvest Secured!</h2>
      <p className="text-stone-400 text-lg mb-12 font-light leading-relaxed italic">
        "Nature has received your request. The finest grafts are being prepared for their journey to your home."
      </p>
      <button 
        onClick={onHome} 
        className="w-full py-6 bg-brand-500 text-white rounded-full font-bold uppercase tracking-[0.2em] shadow-glow-lg hover:shadow-glow-xl hover:scale-[1.02] transition-all active:scale-95"
      >
        Return to Orchard
      </button>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab, showCart, showCheckout, showSuccess]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const addToCart = (mango: MangoVariety) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === mango.id);
      if (existing) {
        return prev.map(item => item.id === mango.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...mango, quantity: 1, price: 1800 }];
    });
    setShowCart(true);
    setShowCheckout(false);
    setShowSuccess(false);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setShowCart(false);
    setShowCheckout(true);
  };

  const handlePaymentComplete = () => {
    setCart([]);
    setShowCheckout(false);
    setShowSuccess(true);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0) + 150;

  return (
    <div className="relative selection:bg-brand-primary selection:text-white overflow-hidden min-h-screen bg-dark-900 text-white">
      {/* Nexa 4D Interactivity Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Animated Orbs */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-brand-500 rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-red-600 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.15] animate-blob animation-delay-4000"></div>
        
        {/* Foundation Grid */}
        <div className="perspective-grid"></div>
        
        {/* Base Forest Texture (User Request) */}
        <img 
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          className="w-full h-full object-cover opacity-20 grayscale brightness-50"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-dark-900/60 to-dark-900"></div>
      </div>

      <TopBar 
        onCartClick={() => { 
          setShowCart(true); 
          setShowCheckout(false); 
          setShowSuccess(false);
          setIsMenuOpen(false);
        }} 
        cartCount={cartCount}
        onMenuClick={toggleMenu}
      />
      
      {/* Side Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-on-background/20 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-4/5 max-w-sm glass-dark z-[70] p-8 flex flex-col pt-24"
            >
              <div className="space-y-8">
                <div className="font-serif italic font-bold text-amber-400 text-3xl mb-12">Preethi Grove</div>
                {[
                  { id: 'home', label: 'Our Orchard', icon: Home },
                  { id: 'varieties', label: 'Mango Varieties', icon: Search },
                  { id: 'farmer', label: 'The Stories', icon: History },
                  { id: 'insights', label: 'Farm Insights', icon: BarChart3 },
                  { id: 'gallery', label: 'Visual Gallery', icon: ImageIcon },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { setActiveTab(item.id); toggleMenu(); setShowCart(false); setShowCheckout(false); setShowSuccess(false); }}
                    className={`flex items-center gap-4 text-xl font-serif transition-colors ${activeTab === item.id ? 'text-amber-400' : 'text-white/70'}`}
                  >
                    <item.icon size={24} />
                    {item.label}
                  </button>
                ))}
              </div>
              
              <div className="mt-auto pt-16 border-t border-white/10 space-y-4">
                <p className="text-white/40 text-xs uppercase tracking-widest">Connect with us</p>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"><Instagram size={20} /></div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"><Twitter size={20} /></div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          {showSuccess ? (
            <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <SuccessScreen onHome={() => { setShowSuccess(false); setActiveTab('home'); }} />
            </motion.div>
          ) : showCheckout ? (
            <motion.div key="checkout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <CheckoutScreen total={cartTotal} onComplete={handlePaymentComplete} onBack={() => setShowCheckout(false)} cart={cart} />
            </motion.div>
          ) : showCart ? (
            <motion.div key="cart" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <CartScreen 
                cart={cart} 
                onUpdateQuantity={updateQuantity} 
                onRemove={removeFromCart} 
                onCheckout={handleCheckout}
                onBack={() => setShowCart(false)}
              />
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.02, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {activeTab === 'home' && <HomeScreen onExplore={() => setActiveTab('varieties')} onMangoTap={addToCart} />}
              {activeTab === 'farmer' && <FarmerScreen />}
              {activeTab === 'varieties' && <VarietiesScreen onAddToCart={addToCart} />}
              {activeTab === 'insights' && <InsightsScreen />}
              {activeTab === 'gallery' && <GalleryScreen />}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <BottomNav activeTab={activeTab} onTabChange={(tab) => { setActiveTab(tab); setShowCart(false); setShowCheckout(false); setShowSuccess(false); }} />
      
      {/* Background Decorative Elements */}
      <div className="fixed top-1/4 -left-20 w-80 h-80 bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="fixed bottom-1/4 -right-20 w-96 h-96 bg-brand-secondary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
    </div>
  );
}
