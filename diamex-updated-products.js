(function(){
  /*
    diamex-updated-products.js
    - When included AFTER diamex.js, this script updates the products array in-place:
      it sets each offer.url = product.link for every product that has offers.
    - It also exposes window.updatedProducts (the updated array) and logs a summary.
    Usage: include this script after diamex.js in your HTML (or import it after loading diamex.js).
  */

  if (typeof products === 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      // Node environment: try to require the original file if possible (not attempting here)
      console.warn('diamex-updated-products: products not found in global scope. Please require the file that defines products first.');
    } else {
      console.warn('diamex-updated-products: products not found. Make sure this file is included after diamex.js');
    }
    return;
  }

  // Clone products shallowly and replace offer.url values with product.link
  const updatedProducts = products.map(product => {
    // make shallow copy of product to avoid accidental shared references
    const p = Object.assign({}, product);
    if (Array.isArray(p.offers)) {
      p.offers = p.offers.map(offer => Object.assign({}, offer, { url: p.link }));
    }
    return p;
  });

  // Overwrite global products and expose updatedProducts
  try {
    if (typeof window !== 'undefined') {
      window.products = updatedProducts;
      window.updatedProducts = updatedProducts;
    }
  } catch (e) {
    // ignore if window not writable
  }

  if (typeof console !== 'undefined') {
    console.log('diamex-updated-products: updated offer.url for', updatedProducts.length, 'products');
  }
})();