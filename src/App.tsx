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
  Minus
} from 'lucide-react';
import { MANGO_VARIETIES, MangoVariety } from './constants';

interface CartItem extends MangoVariety {
  quantity: number;
  price: number;
}

// --- Components ---

const TopBar = ({ onCartClick, cartCount, onMenuClick }: { onCartClick: () => void, cartCount: number, onMenuClick: () => void }) => (
  <header className="fixed top-0 left-0 w-full z-50 glass border-b border-stone-200/30 px-6 py-4 flex justify-between items-center">
    <button onClick={onMenuClick} className="text-brand-primary p-2 active:scale-95 transition-transform">
      <Menu size={24} />
    </button>
    <div className="font-serif italic font-bold text-brand-secondary text-2xl tracking-wide">
      Preethi Grove
    </div>
    <button onClick={onCartClick} className="text-brand-primary p-2 relative active:scale-95 transition-transform">
      <ShoppingBag size={24} />
      {cartCount > 0 && (
        <span className="absolute top-1 right-1 w-5 h-5 bg-brand-secondary text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white font-bold">
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
    <nav className="fixed bottom-0 left-0 w-full z-50 glass-dark rounded-t-[32px] px-4 pb-8 pt-4 flex justify-around items-center border-t border-white/10">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${
            activeTab === tab.id ? 'text-amber-400 scale-110' : 'text-stone-400'
          }`}
        >
          <tab.icon size={24} fill={activeTab === tab.id ? "currentColor" : "none"} />
          <span className="text-[10px] uppercase tracking-widest font-serif font-medium">
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
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="min-h-screen pt-20 pb-32">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden px-6 text-center">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0 scale-110"
        >
          <img 
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            className="w-full h-full object-cover"
            alt="Vibrant Forest"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-surface/20 via-brand-surface/40 to-brand-surface"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 max-w-2xl"
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-on-surface mb-6 leading-tight">
            The World of <span className="italic text-brand-primary">Mangoes</span>
          </h1>
          <p className="font-sans text-lg text-stone-600 mb-10 tracking-wide uppercase font-medium flex items-center justify-center gap-3">
            <span>From Farm</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
            <span>To Flavor</span>
          </p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative mb-12 flex justify-center perspective-1000"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-primary/20 blur-3xl rounded-full translate-y-10 group-hover:bg-brand-primary/30 transition-all duration-500"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ_k0U27BdQ7YA4sQcuhOhzO71_AZQhPU4eH1OgW-B3Z5w3e4vzNCCvOe2dTub63TvFS248M83Sm_IBVZYP3sd5Ix_9bX-UP2LTBz3kUh2KFu14SZTzXlbf9Rdj1yFx3rpDk2U9UfAMHVsxP7u3ZhzB0fspxVucK8S0uTNmWH4Sn9XB7cG8_egHZ98YnorCBBuSAKiws96g9nrppyXhm5ZOAL6h6z6ICMPiQ3cN0Ezz8qkaRnAwOTWNZOnYR0vIDnv0Y-ZdsEcKGIl"
                className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_20px_40px_rgba(93,64,55,0.3)] hover:scale-105 transition-transform duration-700" 
                alt="Ripe Mango"
              />
            </div>
          </motion.div>

          <button 
            onClick={onExplore}
            className="px-10 py-4 bg-brand-primary text-white rounded-full font-bold uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl hover:bg-brand-secondary transition-all active:scale-95 flex items-center gap-2 mx-auto"
          >
            Explore Varieties <ArrowRight size={18} />
          </button>
        </motion.div>
      </section>

      {/* Featured Varieties Slider */}
      <section className="px-6 py-12">
        <h2 className="font-serif text-3xl font-bold mb-8">Seasonal Selection</h2>
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
          {MANGO_VARIETIES.map((mango) => (
            <motion.div 
              key={mango.id}
              onClick={() => onMangoTap(mango)}
              className="min-w-[280px] bg-white rounded-3xl p-6 shadow-soft snap-center relative overflow-hidden group cursor-pointer active:scale-95 transition-transform"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-bl-full transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform"></div>
              <img src={mango.image} className="w-40 h-40 object-contain mx-auto mb-4 drop-shadow-md group-hover:scale-110 transition-transform duration-500" alt={mango.name} />
              <h3 className="font-serif text-xl font-bold">{mango.name}</h3>
              <p className="text-stone-500 text-sm mb-2">{mango.origin}</p>
              <p className="text-brand-secondary font-bold mb-4">₹1,800</p>
              <div className="flex items-center gap-1 text-brand-primary">
                {[...Array(mango.tasteProfile.sweetness)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-3 gap-4 px-6 mb-12">
        <div className="p-4 bg-brand-surface-container rounded-2xl text-center">
          <Leaf className="mx-auto text-brand-tertiary mb-2" size={20} />
          <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">Purity</p>
          <p className="font-bold text-lg">100%</p>
        </div>
        <div className="p-4 bg-brand-surface-container rounded-2xl text-center">
          <Droplets className="mx-auto text-blue-500 mb-2" size={20} />
          <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">Moisture</p>
          <p className="font-bold text-lg">Optimum</p>
        </div>
        <div className="p-4 bg-brand-surface-container rounded-2xl text-center">
          <Sun className="mx-auto text-brand-secondary mb-2" size={20} />
          <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">Harvest</p>
          <p className="font-bold text-lg">Prime</p>
        </div>
      </section>
    </div>
  );
};

const FarmerScreen = () => (
  <div className="min-h-screen pt-24 pb-32 px-6">
    <div className="max-w-xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full h-96 rounded-3xl overflow-hidden mb-10 shadow-2xl relative"
      >
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOPshztFVIZOJ562qgz_Cy-hS75lEAz1NwT4zaf4lWxtDopcpBFzIk6-nfXEv74lTCeOOunJOL-ULnijM1c8wmArO2yMxMaLswyaIx0MqoFjh6yO-BtrctMKd_lKgV7R5vp_Mw_qtjNBV13b4IC4d1nq9I1oKRt3jeNs7csT1TSkejgMMzVoTOozRH8OKqoRsWmI1iIiDPMtcmCAHmJLojqgleJNDWpkAOQQooCTVs_65qYNlKTHKH6LK-7HSJJgee-O4r507tm5NF"
          className="w-full h-full object-cover grayscale-[20%] sepia-[10%]"
          alt="Farmer"
        />
        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/60 to-transparent">
          <h2 className="text-white font-serif text-3xl font-bold">Preethi Venkat</h2>
          <p className="text-white/80 font-sans tracking-wide">Chief Cultivator & Visionary</p>
        </div>
      </motion.div>

      <div className="space-y-8">
        <h3 className="font-serif text-2xl font-bold italic text-brand-primary">"A mango tree doesn't just bear fruit; it carries the weight of history and the promise of summer."</h3>
        
        <div className="flex gap-6 items-start">
          <div className="w-12 h-12 rounded-full glass border border-brand-primary/20 flex items-center justify-center shrink-0">
            <Leaf size={24} className="text-brand-tertiary" />
          </div>
          <div>
            <h4 className="font-serif text-xl font-bold mb-2">Our Philosophy</h4>
            <p className="text-stone-600 leading-relaxed">
              For three generations, the Venkat family has lived and breathed the rhythm of the Ratnagiri foothills. We believe in slow growth, organic nutrients, and the patience of the sun.
            </p>
          </div>
        </div>

        {/* Share Section */}
        <section className="bg-brand-surface-container rounded-3xl p-8 mb-12 shadow-soft border border-white/50">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full glass border border-brand-primary/10 flex items-center justify-center text-brand-primary mb-2">
              <Share2 size={28} />
            </div>
            <h4 className="font-serif text-xl font-bold">Share Preethi's Story</h4>
            <p className="text-stone-500 text-sm mb-4">Inspire others with our journey of sustainable, high-craft agriculture.</p>
            
            <button 
              className="w-full py-4 bg-brand-primary text-white rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-brand-secondary transition-all active:scale-95"
            >
              <Share2 size={18} /> Share Journey
            </button>
            
            <div className="flex gap-6 mt-4">
              <button className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300">
                <Instagram size={20} />
              </button>
              <button className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300">
                <Twitter size={20} />
              </button>
              <button className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300">
                <MessageCircle size={20} />
              </button>
            </div>
          </div>
        </section>

        <div className="relative pl-12 border-l border-brand-primary/20 space-y-12 py-4">
          {[
            { year: '1952', title: 'The First Sapling', desc: "Preethi's ancestors planted the first Alphonso graft in our ancestral soil." },
            { year: '1988', title: 'Legacy of Flavor', desc: 'Establishing our orchard as the premier supplier of export-grade fruit.' },
            { year: 'Today', title: 'Sustainable Future', desc: 'Blending traditional wisdom with precision AI agriculture.' }
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[54px] top-1 w-4 h-4 rounded-full bg-brand-primary border-4 border-brand-surface"></div>
              <span className="font-serif text-stone-400 font-bold mb-1 block">{item.year}</span>
              <h5 className="font-serif text-lg font-bold mb-1">{item.title}</h5>
              <p className="text-sm text-stone-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const VarietiesScreen = ({ onAddToCart }: { onAddToCart: (mango: MangoVariety) => void }) => {
  const [selected, setSelected] = useState<MangoVariety | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVarieties = MANGO_VARIETIES.filter(mango => 
    mango.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mango.origin.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selected) {
    return (
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        className="fixed inset-0 z-[60] bg-brand-surface pt-24 px-6 pb-32 overflow-y-auto"
      >
        <button 
          onClick={() => setSelected(null)}
          className="mb-8 text-brand-primary flex items-center gap-2 font-medium"
        >
          <ChevronRight size={20} className="rotate-180" /> Back to List
        </button>

        <motion.img 
          layoutId={`img-${selected.id}`}
          src={selected.image} 
          className="w-full max-w-sm mx-auto h-auto object-contain mb-10 drop-shadow-2xl"
          alt={selected.name}
        />

        <div className="max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 bg-brand-surface-container text-brand-secondary text-[10px] uppercase tracking-widest font-bold rounded-full mb-4">
            {selected.origin}
          </span>
          <h2 className="font-serif text-5xl font-bold mb-6">{selected.name}</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="p-4 glass rounded-2xl">
              <p className="text-[10px] uppercase text-stone-400 font-bold tracking-widest mb-2">Sweetness</p>
              <div className="flex text-brand-primary gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < selected.tasteProfile.sweetness ? "currentColor" : "none"} strokeWidth={2} />
                ))}
              </div>
            </div>
            <div className="p-4 glass rounded-2xl">
              <p className="text-[10px] uppercase text-stone-400 font-bold tracking-widest mb-2">Texture</p>
              <p className="font-serif font-bold text-sm">{selected.tasteProfile.texture}</p>
            </div>
          </div>

          <p className="text-stone-600 leading-relaxed mb-10 text-lg">
            {selected.description}
          </p>

          <div className="bg-white/50 p-6 rounded-3xl mb-10">
            <h4 className="font-serif font-bold mb-4 flex items-center gap-2">
              <Droplets className="text-blue-500" size={20} /> Nutritional Profile
            </h4>
            <div className="flex flex-wrap gap-2 text-stone-500 text-sm">
              {selected.nutrition.map((item, idx) => (
                <span key={idx} className="px-4 py-2 border border-stone-200 rounded-full">{item}</span>
              ))}
            </div>
          </div>

          <button 
            onClick={() => { onAddToCart(selected); setSelected(null); }}
            className="w-full py-5 bg-brand-secondary text-white rounded-full font-bold uppercase tracking-widest shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <ShoppingBag size={20} /> Add to Crate • ₹1,800
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-32 px-6">
      <h2 className="font-serif text-4xl font-bold mb-4">The Royal Harvest</h2>
      <p className="text-stone-500 mb-8">A curated collection of artisanal varieties, each with a unique heritage and flavor profile.</p>
      
      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
        <input 
          type="text" 
          placeholder="Search variety or origin..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-4 pl-12 bg-white rounded-2xl shadow-soft border-none focus:ring-2 focus:ring-brand-primary placeholder:text-stone-300 font-serif"
        />
      </div>

      <div className="space-y-6">
        {filteredVarieties.length > 0 ? (
          filteredVarieties.map((mango) => (
            <motion.div
              key={mango.id}
              onClick={() => setSelected(mango)}
              layoutId={`card-${mango.id}`}
              className="w-full bg-white p-6 rounded-3xl shadow-soft flex items-center gap-6 text-left group hover:shadow-lg transition-all cursor-pointer"
            >
              <motion.img 
                layoutId={`img-${mango.id}`}
                src={mango.image} 
                className="w-24 h-24 object-contain group-hover:scale-110 transition-transform" 
                alt={mango.name}
              />
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-bold mb-1">{mango.name}</h3>
                <div className="flex justify-between items-start mb-3">
                  <p className="text-stone-400 text-sm underline decoration-brand-primary/20">{mango.origin}</p>
                  <p className="font-bold text-brand-secondary">₹1,800</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex text-brand-primary">
                    {[...Array(mango.tasteProfile.sweetness)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={(e) => { e.stopPropagation(); onAddToCart(mango); }}
                      className="p-2 bg-brand-primary/10 text-brand-primary rounded-full hover:bg-brand-primary hover:text-white transition-all active:scale-90"
                    >
                      <Plus size={18} />
                    </button>
                    <ChevronRight size={20} className="text-stone-300 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-20 bg-brand-primary/5 rounded-3xl border-2 border-dashed border-brand-primary/10">
            <p className="font-serif text-stone-400 text-xl italic">No variety found matching your quest...</p>
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
    <div className="min-h-screen pt-24 pb-32 px-6 bg-brand-surface">
      <div className="max-w-2xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-brand-primary mb-8 font-medium">
          <ArrowLeft size={20} /> Continue Shopping
        </button>
        
        <h2 className="font-serif text-4xl font-bold mb-8">Your Harvest Crate</h2>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[2rem] shadow-soft">
            <ShoppingBag size={64} className="mx-auto text-stone-200 mb-6" />
            <p className="text-stone-500 mb-8 font-serif text-xl">Your crate is empty</p>
            <button onClick={onBack} className="px-8 py-3 bg-brand-primary text-white rounded-full font-bold uppercase tracking-widest text-sm">
              Explore Varieties
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-3xl shadow-soft flex items-center gap-4">
                <div className="w-20 h-20 bg-brand-surface-container rounded-2xl flex items-center justify-center overflow-hidden">
                  <img src={item.image} className="w-16 h-16 object-contain" alt={item.name} />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold">{item.name}</h3>
                  <p className="text-brand-secondary font-bold text-sm">₹{item.price.toLocaleString()}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center active:scale-90 transition-transform"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-bold w-4 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center active:scale-90 transition-transform"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-stone-300 hover:text-red-500 transition-colors p-2">
                  <Trash2 size={20} />
                </button>
              </div>
            ))}

            <div className="mt-12 bg-white rounded-[2rem] p-8 shadow-soft border border-brand-primary/5">
              <div className="flex justify-between items-center mb-6">
                <span className="text-stone-500">Subtotal</span>
                <span className="font-bold">₹{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center mb-8 pt-6 border-t border-stone-100">
                <span className="font-serif text-xl font-bold">Total</span>
                <span className="font-serif text-3xl font-bold text-brand-primary">₹{(total + 150).toLocaleString()}</span>
              </div>
              <p className="text-[10px] text-stone-400 text-center mb-6 tracking-widest uppercase">Inc. ₹150 Express Delivery</p>
              <button 
                onClick={onCheckout}
                className="w-full py-5 bg-brand-secondary text-white rounded-full font-bold uppercase tracking-widest shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                Proceed to Payment <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CheckoutScreen = ({ total, onComplete }: { total: number, onComplete: () => void }) => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'cash' | 'card'>('upi');
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-32 px-6 bg-brand-primary/5">
      <div className="max-w-md mx-auto">
        <h2 className="font-serif text-3xl font-bold mb-10 text-center">Secure Checkout</h2>
        
        {step === 1 ? (
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-soft border border-brand-primary/5">
              <h3 className="font-serif text-xl font-bold mb-6 border-b border-stone-100 pb-4">Delivery Address</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full p-4 bg-brand-surface rounded-xl border-none focus:ring-1 focus:ring-brand-primary" />
                <input type="text" placeholder="Mobile Number" className="w-full p-4 bg-brand-surface rounded-xl border-none focus:ring-1 focus:ring-brand-primary" />
                <input type="text" placeholder="Street / House No." className="w-full p-4 bg-brand-surface rounded-xl border-none focus:ring-1 focus:ring-brand-primary" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="City" className="w-full p-4 bg-brand-surface rounded-xl border-none focus:ring-1 focus:ring-brand-primary" />
                  <input type="text" placeholder="Pincode" className="w-full p-4 bg-brand-surface rounded-xl border-none focus:ring-1 focus:ring-brand-primary" />
                </div>
              </div>
            </div>
            <button 
              onClick={() => setStep(2)}
              className="w-full py-5 bg-brand-primary text-white rounded-full font-bold uppercase tracking-widest shadow-xl"
            >
              Next Step
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-soft border border-brand-primary/5">
              <h3 className="font-serif text-xl font-bold mb-6 border-b border-stone-100 pb-4">Payment Method</h3>
              <div className="space-y-4">
                <button 
                  onClick={() => setPaymentMethod('upi')}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${paymentMethod === 'upi' ? 'border-2 border-brand-primary bg-brand-primary/5' : 'border border-stone-100 bg-white'}`}
                >
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                    <span className="material-symbols-outlined">qr_code_scanner</span>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-bold">UPI / QR Scanner</p>
                    <p className="text-xs text-stone-500">Fast & Instant</p>
                  </div>
                  {paymentMethod === 'upi' && <div className="w-4 h-4 rounded-full bg-brand-primary"></div>}
                </button>

                <button 
                  onClick={() => setPaymentMethod('card')}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${paymentMethod === 'card' ? 'border-2 border-brand-primary bg-brand-primary/5' : 'border border-stone-100 bg-white'}`}
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <CreditCard size={20} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-bold">Card Transaction</p>
                    <p className="text-xs text-stone-500">Credit or Debit Card</p>
                  </div>
                  {paymentMethod === 'card' && <div className="w-4 h-4 rounded-full bg-brand-primary"></div>}
                </button>

                <button 
                  onClick={() => setPaymentMethod('cash')}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${paymentMethod === 'cash' ? 'border-2 border-brand-primary bg-brand-primary/5' : 'border border-stone-100 bg-white'}`}
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-bold">Cash in Hand</p>
                    <p className="text-xs text-stone-500">Pay on Delivery</p>
                  </div>
                  {paymentMethod === 'cash' && <div className="w-4 h-4 rounded-full bg-brand-primary"></div>}
                </button>
              </div>

              {paymentMethod === 'upi' && (
                <div className="mt-6 p-4 bg-brand-surface rounded-2xl flex flex-col items-center">
                  <button 
                    onClick={() => setShowQR(!showQR)}
                    className="text-brand-primary text-sm font-bold underline flex items-center gap-2 mb-4"
                  >
                    {showQR ? 'Hide QR Code' : 'Generate QR Scanner'}
                  </button>
                  {showQR && (
                    <div className="bg-white p-4 rounded-xl shadow-inner mb-2">
                       <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PreethiGrovePayment" alt="QR Code" />
                    </div>
                  )}
                </div>
              )}

              <div className="mt-10 pt-6 border-t border-stone-100 flex justify-between items-center">
                <span className="text-stone-500">Payable Amount</span>
                <span className="font-serif text-2xl font-bold">₹{total.toLocaleString()}</span>
              </div>
            </div>
            
            <button 
              onClick={onComplete}
              className="w-full py-5 bg-brand-secondary text-white rounded-full font-bold uppercase tracking-widest shadow-xl flex items-center justify-center gap-2"
            >
              Confirm & Pay <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const SuccessScreen = ({ onHome }: { onHome: () => void }) => (
  <div className="min-h-screen flex items-center justify-center px-6">
    <div className="text-center max-w-sm">
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 12 }}
        className="w-24 h-24 bg-brand-tertiary rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-glow"
      >
        <CheckCircle2 size={48} />
      </motion.div>
      <h2 className="font-serif text-4xl font-bold mb-4">Harvest Secured!</h2>
      <p className="text-stone-500 mb-10 leading-relaxed">Your order is being handpicked from Preethi Grove. Expect the arrival within 48 hours.</p>
      <button 
        onClick={onHome}
        className="px-10 py-4 bg-brand-primary text-white rounded-full font-bold uppercase tracking-widest text-sm shadow-xl"
      >
        Return to Grove
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
      return [...prev, { ...mango, quantity: 1, price: 1800 }]; // Simplified fixed price for demo
    });
    setShowCart(true);
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
    <div className="relative selection:bg-brand-primary selection:text-white overflow-hidden min-h-screen bg-brand-surface">
      {/* Global Theme Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          className="w-full h-full object-cover grayscale brightness-200"
          alt=""
        />
      </div>

      <TopBar 
        onCartClick={() => { setShowCart(true); setShowCheckout(false); setShowSuccess(false); }} 
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
              <CheckoutScreen total={cartTotal} onComplete={handlePaymentComplete} />
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
