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
    <div className="h-[100dvh] bg-sunflower-yellow bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] flex flex-col overflow-hidden relative">
      
      {/* Global Wall Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-50 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] z-0"></div>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-start md:justify-center relative z-10 w-full max-w-7xl mx-auto px-4 pt-2 md:pt-4 pb-1 min-h-0">
        
        {/* 1. SIGNAGE SECTION */}
        <div className="w-full flex-none flex flex-col items-center justify-center mb-2 md:mb-4 lg:mb-4 relative z-20">
           <div className="absolute top-0 w-48 h-24 bg-white/10 blur-[60px] pointer-events-none mix-blend-overlay"></div>
           
           <div className="relative flex flex-col items-center cursor-default">
             <h1 className="text-6xl md:text-8xl lg:text-9xl text-brand-trim font-dafoe drop-shadow-[2px_2px_1px_rgba(255,255,255,0.25)] -rotate-1 mix-blend-color-burn opacity-95 leading-none transform scale-x-110 md:scale-x-115 origin-center">
               Con Alma
             </h1>
             
             <div className="w-32 md:w-56 lg:w-72 h-1.5 md:h-2 bg-brand-trim/65 rounded-full skew-x-12 opacity-80 -mt-1 md:-mt-2"></div>

             <div className="mt-2 md:mt-3 flex flex-col items-center">
                <span className="font-oswald text-brand-trim/50 text-[10px] md:text-xs lg:text-sm font-black uppercase tracking-[0.5em] mix-blend-multiply blur-[0.3px] select-none rotate-1">
                  EST. 2025
                </span>
             </div>
           </div>
        </div>

        {/* 2. WINDOW FRAME OBJECT - Updated max-w for mobile (wider) */}
        <div className="flex-1 w-full flex items-center justify-center min-h-0 relative z-10 pb-2 md:pb-6">
            <div className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[440px] h-full max-h-[82vh] md:max-h-[86vh] flex flex-col bg-brand-trim relative shadow-[inset_0_15px_50px_rgba(0,0,0,0.7),0_20px_40px_-12px_rgba(0,0,0,0.5)] rounded-t-[50%] md:rounded-t-[340px] rounded-b-3xl overflow-hidden border-[6px] md:border-[14px] border-[#5d290b]/40 ring-1 ring-white/5 mx-auto transition-all duration-300">
                
                <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] pointer-events-none"></div>

                <div className="relative w-full h-full flex flex-col px-6 pt-10 pb-2 md:px-8 md:pt-16 md:pb-6 lg:px-10 lg:pt-20 lg:pb-8">
                    
                    <div className="w-full flex-1 relative bg-[#4a2208] rounded-t-[50%] md:rounded-t-[340px] rounded-b-xl shadow-[inset_0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden border-4 md:border-[8px] border-[#4a2208] ring-1 ring-white/10 group min-h-0">
                        
                        <div className="absolute inset-0 bg-gradient-to-b from-[#4a2208] via-[#3a1a05] to-[#250f02]"></div>
                        <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] mix-blend-overlay"></div>
                        
                        {/* Navigation */}
                        <div className="absolute inset-y-0 left-0 flex items-center pl-1 md:pl-2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button 
                                onClick={prevProduct} 
                                className="p-1.5 md:p-2.5 bg-brand-trim/60 text-mex-cream/90 rounded-full hover:bg-brand-trim hover:text-white transition-all backdrop-blur-md border border-white/5"
                                aria-label="Previous product"
                            >
                                <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
                            </button>
                        </div>
                        
                        <div className="absolute inset-y-0 right-0 flex items-center pr-1 md:pr-2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button 
                                onClick={nextProduct} 
                                className="p-1.5 md:p-2.5 bg-brand-trim/60 text-mex-cream/90 rounded-full hover:bg-brand-trim hover:text-white transition-all backdrop-blur-md border border-white/5"
                                aria-label="Next product"
                            >
                                <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
                            </button>
                        </div>

                        {/* Product Display */}
                        <div className="absolute inset-0 flex items-center justify-center z-20 px-4 py-4 md:py-8 lg:py-12">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeProduct.id}
                                    initial={{ opacity: 0, y: 15, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -15, scale: 0.96 }}
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

                        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-white/5 via-transparent to-transparent pointer-events-none rounded-tr-[200px]"></div>
                    </div>

                    <div className="mt-2 md:mt-3 flex flex-col items-center opacity-40 flex-none">
                        <span className="font-oswald text-mex-cream text-[8px] md:text-[9px] tracking-[0.6em] uppercase whitespace-nowrap">Hecho en México</span>
                    </div>

                </div>
            </div>
        </div>
      </main>

      {/* 3. SIDEWALK FOOTER */}
      <footer className="flex-none relative z-20 w-full h-10 md:h-12 bg-stone-400 border-t-[6px] md:border-t-[8px] border-[#3f3f3f] bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] flex items-center justify-center">
         <div className="absolute top-0 w-full h-2 bg-black/15 blur-sm"></div>
         <span className="text-stone-700/60 font-oswald text-[9px] md:text-[11px] uppercase tracking-[0.5em] select-none">
           Calidad Artesanal Garantizada
         </span>
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

const ProductCard: React.FC<{ product: Product; onClick: () => void; isHero?: boolean }> = ({ product, onClick, isHero = false }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -4, scale: 1.01 }}
      className={`group cursor-pointer relative flex flex-col items-center justify-center ${isHero ? 'w-[90%] sm:w-[85%] md:w-[200px] lg:w-[240px] h-full' : 'w-full'}`}
    >
      <motion.div 
        className="absolute -top-1 -right-2 md:-top-3 md:-right-4 z-30 bg-yellow-400 text-black font-oswald font-black px-1.5 py-0.5 md:px-2 md:py-1 shadow-xl transform rotate-12 text-[10px] md:text-sm lg:text-base border border-brand-trim rounded-full w-9 h-9 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center"
        whileHover={{ rotate: 0, scale: 1.1 }}
      >
        ${Math.floor(product.price)}
      </motion.div>

      <div className={`w-full h-auto max-h-[38vh] md:max-h-[42vh] aspect-[3/5] rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.8rem] relative overflow-hidden shadow-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.6)]`}>
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500"
          style={{ backgroundColor: product.bgColor }}
        />
        
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 p-2 md:p-4 bg-gradient-to-t from-black/95 to-transparent pt-6 md:pt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-end">
          <span className="text-white font-oswald text-[9px] md:text-[10px] uppercase tracking-widest border-b border-brand-primary pb-0.5 flex items-center gap-1.5">
            <Info size={12} /> Ver Más
          </span>
        </div>
      </div>

      <div className="mt-3 md:mt-5 bg-mex-cream px-3 md:px-5 py-1.5 md:py-3 shadow-lg transform -rotate-1 w-[110%] md:w-[130%] text-center border-y md:border-y-2 lg:border-y-4 border-brand-primary rounded-md relative z-20">
         <div className="absolute -top-1 left-2 w-1.5 h-3 md:w-3 md:h-7 bg-white/40 rotate-45 backdrop-blur-md"></div>
         <div className="absolute -top-1 right-2 w-1.5 h-3 md:w-3 md:h-7 bg-white/40 -rotate-45 backdrop-blur-md"></div>

         <h3 className="font-dafoe text-xl md:text-2xl lg:text-3xl text-cajeta-dark leading-none drop-shadow-sm">
           {product.name}
         </h3>
         <p className="font-oswald text-[8px] md:text-[9px] lg:text-[10px] text-stone-500 uppercase tracking-widest mt-0.5 font-bold">
           {product.tagline}
         </p>
      </div>
      
      <div className="w-[80%] h-2 md:h-3 bg-black/40 blur-xl rounded-[100%] mt-1 md:mt-2 transition-all group-hover:w-[85%]"></div>
    </motion.div>
  );
};