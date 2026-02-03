import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { ProductModal } from './ProductModal';
import { Info, ChevronLeft, ChevronRight } from 'lucide-react';

export const Storefront: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProduct = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % PRODUCTS.length);
  };

  const prevProduct = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  const activeProduct = PRODUCTS[activeIndex];

  return (
    <div className="min-h-screen bg-sunflower-yellow bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] flex flex-col overflow-x-hidden">
      
      {/* Global Wall Texture Overlay for depth */}
      <div className="fixed inset-0 pointer-events-none opacity-50 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] z-0"></div>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center relative z-10 w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
        
        {/* 1. SIGNAGE SECTION (Painted on the wall) */}
        <div className="w-full flex flex-col items-center justify-center mb-12 md:mb-20 relative">
           {/* Light leak effect */}
           <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/20 blur-[100px] pointer-events-none mix-blend-overlay"></div>
           
           {/* Signage Container */}
           <div className="relative flex flex-col items-center transform hover:scale-105 transition-transform duration-500 cursor-default">
             
             {/* Main Title - Hand Painted Look */}
             <h1 className="text-7xl md:text-9xl text-brand-trim font-dafoe drop-shadow-[4px_4px_0px_rgba(255,255,255,0.3)] -rotate-2 mix-blend-color-burn opacity-90">
               Con Alma
             </h1>

             {/* Decorative Underline/Paint Swipe */}
             <div className="w-48 h-2 bg-brand-trim/70 mt-4 rounded-full skew-x-12 opacity-80"></div>

             {/* Est Badge */}
             <div className="mt-6 text-brand-trim/80 font-oswald text-sm font-bold uppercase tracking-widest border-2 border-brand-trim/30 px-4 py-1 rounded-full bg-sunflower-yellow/50 backdrop-blur-sm shadow-sm">
               Est. 2025
             </div>
           </div>
        </div>

        {/* 2. WINDOW FRAME OBJECT (The Storefront) */}
        {/* Updated: Taller arch radius and overall shape */}
        <div className="w-full max-w-4xl bg-brand-trim relative shadow-[inset_0_20px_50px_rgba(0,0,0,0.7)] rounded-t-[50%] md:rounded-t-[350px] rounded-b-3xl overflow-hidden border-[16px] border-[#5d290b]/40 ring-1 ring-white/5 mx-auto">
            
            {/* Painted Concrete Texture for Brown Section */}
            <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] pointer-events-none"></div>
            <div className="absolute inset-0 opacity-20 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] pointer-events-none"></div>

            {/* Adjusted padding bottom to make frame thinner at the bottom */}
            <div className="relative px-6 pb-6 md:px-16 md:pb-10 pt-16 md:pt-24 flex flex-col items-center">
                
                {/* The "Window" Cutout - Made Taller for mobile (aspect-[2/3]) */}
                <div className="w-full aspect-[2/3] md:aspect-[1/1] bg-[#4a2208] rounded-t-[50%] md:rounded-t-[300px] rounded-b-xl shadow-[inset_0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden border-8 border-[#4a2208] ring-1 ring-white/10 group">
                    
                    {/* Window Interior Background - Darkened to match border */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#4a2208] via-[#3a1a05] to-[#250f02]"></div>
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] mix-blend-overlay"></div>
                    
                    {/* Hanging Decor */}
                    <div className="absolute top-0 left-0 w-full h-16 flex justify-around pointer-events-none opacity-60 z-10">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="h-full w-0.5 bg-white/10 relative">
                                <div className="absolute bottom-0 -left-2 w-4 h-4 rounded-full bg-mex-orange/20 blur-sm animate-pulse" style={{ animationDelay: `${i * 0.5}s` }}></div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Controls - Hidden by default, visible on hover (group-hover), translucent */}
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 md:pl-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <button 
                            onClick={prevProduct} 
                            className="p-2 md:p-3 bg-brand-trim/30 text-mex-cream/70 rounded-full hover:bg-brand-trim/80 hover:text-white hover:scale-110 transition-all backdrop-blur-sm border border-white/5 shadow-lg"
                            aria-label="Previous product"
                        >
                            <ChevronLeft size={32} />
                        </button>
                    </div>
                    
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:pr-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <button 
                            onClick={nextProduct} 
                            className="p-2 md:p-3 bg-brand-trim/30 text-mex-cream/70 rounded-full hover:bg-brand-trim/80 hover:text-white hover:scale-110 transition-all backdrop-blur-sm border border-white/5 shadow-lg"
                            aria-label="Next product"
                        >
                            <ChevronRight size={32} />
                        </button>
                    </div>

                    {/* Single Product Carousel Display */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProduct.id}
                                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -50, scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                className="w-full h-full flex items-center justify-center"
                            >
                                 <ProductCard 
                                    product={activeProduct} 
                                    onClick={() => setSelectedProduct(activeProduct)} 
                                    isHero={true}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Window Reflection Effect */}
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-white/10 via-transparent to-transparent pointer-events-none rounded-tr-[200px]"></div>

                </div>

                {/* "Open" Signage or Text below window - Reduced margin top */}
                <div className="mt-4 md:mt-6 flex flex-col items-center opacity-80">
                    <div className="w-24 h-1 bg-mex-cream/20 rounded-full mb-3"></div>
                    <span className="font-oswald text-mex-cream text-sm tracking-[0.4em] uppercase hover:text-white transition-colors cursor-pointer">Deslice Para Ver Más</span>
                </div>

            </div>
        </div>
      </main>

      {/* 3. SIDEWALK FOOTER (Bottom of page) */}
      <footer className="relative z-20 w-full h-32 md:h-40 bg-stone-400 border-t-[12px] border-[#3f3f3f] bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] flex flex-col items-center justify-center shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
         <div className="absolute top-0 w-full h-4 bg-black/20 blur-sm"></div>
         
         {/* Street Debris/Texture */}
         <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] mix-blend-multiply"></div>
         
         <div className="relative z-10 flex flex-col items-center gap-2">
             <span className="text-stone-600 font-oswald text-sm md:text-base uppercase tracking-[0.3em] bg-stone-300/80 px-8 py-3 rounded-sm border border-stone-500/20 backdrop-blur-sm shadow-inner transform skew-x-[-10deg]">
               Calle Revolución #45, Celaya, Gto.
             </span>
             <span className="text-stone-500 font-oswald text-xs tracking-widest opacity-60">
                Abierto Todos Los Días
             </span>
         </div>
      </footer>

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// Sub-component for the product item
const ProductCard: React.FC<{ product: Product; onClick: () => void; isHero?: boolean }> = ({ product, onClick, isHero = false }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -5, scale: 1.02 }}
      // Adjusted width sizing to prevent clipping on mobile. 
      // Changed mobile width to 60% of container (instead of fixed pixels) to scale responsibly.
      className={`group cursor-pointer relative flex flex-col items-center ${isHero ? 'w-[60%] md:w-[280px]' : 'w-full'}`}
    >
      {/* Price Tag */}
      <motion.div 
        className="absolute -top-4 -right-4 md:-right-8 z-30 bg-yellow-300 text-black font-oswald font-bold px-2 md:px-3 py-2 md:py-3 shadow-xl transform rotate-12 text-sm md:text-lg border-2 border-brand-trim rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
        whileHover={{ rotate: 0, scale: 1.1 }}
      >
        ${Math.floor(product.price)}
      </motion.div>

      {/* Product visual container */}
      <div className={`w-full aspect-[3/4] rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden shadow-2xl bg-white/5 border border-white/20 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}>
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          style={{ backgroundColor: product.bgColor }}
        />
        
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />

        {/* Hover info overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/90 to-transparent pt-12 md:pt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-end">
          <span className="text-white font-oswald text-xs md:text-sm uppercase tracking-widest border-b-2 border-brand-primary pb-1 flex items-center gap-2">
            <Info size={14} /> Details
          </span>
        </div>
      </div>

      {/* Label under jar */}
      <div className="mt-4 md:mt-6 bg-mex-cream px-4 md:px-8 py-2 md:py-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)] transform -rotate-1 w-[110%] md:w-[120%] text-center border-y-4 border-brand-primary rounded-lg relative z-20">
         {/* Little tape pieces on corners of label */}
         <div className="absolute -top-2 left-2 w-3 h-6 md:w-4 md:h-8 bg-white/40 rotate-45 backdrop-blur-md"></div>
         <div className="absolute -top-2 right-2 w-3 h-6 md:w-4 md:h-8 bg-white/40 -rotate-45 backdrop-blur-md"></div>

         <h3 className="font-dafoe text-3xl md:text-4xl text-cajeta-dark leading-none drop-shadow-sm">
           {product.name}
         </h3>
         <p className="font-oswald text-[10px] md:text-xs text-stone-500 uppercase tracking-widest mt-1">
           {product.tagline}
         </p>
      </div>
      
      {/* Shadow on the floor */}
      <div className="w-[80%] h-4 bg-black/40 blur-lg rounded-[100%] mt-2"></div>
    </motion.div>
  );
};