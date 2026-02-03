import React from 'react';
import { motion } from 'framer-motion';
import { X, ShoppingBag, Wheat, Scale } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Card Container - Very Rounded */}
      <motion.div
        layoutId={`card-container-${product.id}`}
        className="relative w-full max-w-4xl bg-mex-cream rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/80 rounded-full hover:bg-white transition-colors shadow-sm"
        >
          <X className="w-6 h-6 text-brand-primary" />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative bg-neutral-200">
           {/* Decorative visual layer mimicking the jar label color */}
          <motion.div 
             layoutId={`product-bg-${product.id}`}
             className="absolute inset-0 opacity-20"
             style={{ backgroundColor: product.bgColor }}
          />
          <motion.img
            layoutId={`product-image-${product.id}`}
            src={product.image}
            alt={product.name}
            className="w-full h-64 md:h-full object-cover relative z-10"
          />
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 p-8 overflow-y-auto flex flex-col justify-between relative bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]">
          <div>
            <motion.h3 
              layoutId={`product-tagline-${product.id}`}
              className="text-mex-orange font-oswald text-sm tracking-widest uppercase mb-2"
            >
              {product.tagline}
            </motion.h3>
            <motion.h2 
              layoutId={`product-name-${product.id}`}
              className="text-5xl font-dafoe text-cajeta-dark mb-6"
            >
              {product.name}
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-bitter text-lg text-gray-700 leading-relaxed mb-6"
            >
              {product.description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/50 p-4 rounded-2xl border border-cajeta-light/20 mb-6"
            >
              <h4 className="font-oswald text-cajeta-dark text-lg mb-2 flex items-center gap-2">
                <Wheat size={18} /> Ingredients
              </h4>
              <ul className="flex flex-wrap gap-2">
                {product.ingredients.map((ing, idx) => (
                  <span 
                    key={idx} 
                    className={`px-3 py-1 rounded-full text-sm font-bitter ${ing.isAllergen ? 'bg-orange-100 text-orange-800' : 'bg-stone-100 text-stone-600'}`}
                  >
                    {ing.name}
                  </span>
                ))}
              </ul>
            </motion.div>

             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h4 className="font-oswald text-cajeta-dark text-lg mb-2">Origins</h4>
              <p className="font-bitter text-sm text-gray-600 italic">"{product.story}"</p>
            </motion.div>
          </div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
             className="flex items-center justify-between border-t border-cajeta-light/20 pt-6"
          >
            <div className="flex items-center gap-2 text-cajeta-dark font-oswald">
              <Scale size={20} />
              <span>{product.weight}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold font-bitter text-brand-primary">${product.price.toFixed(2)}</span>
              <button className="bg-mex-orange text-white px-6 py-3 rounded-full font-oswald uppercase tracking-wide flex items-center gap-2 hover:bg-[#9a3412] transition-colors shadow-lg hover:shadow-xl active:scale-95 transform">
                <ShoppingBag size={18} /> Add to Cart
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};