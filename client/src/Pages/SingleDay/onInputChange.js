export const onInputChange = ({ data, setData, setNewChanges }) => {
   const onPalletsInputChange = (e) => {
     const updated = data.products.map((product) => {
       if (product.name === e.target.name) {
         const value = parseInt(e.target.value) ? parseInt(e.target.value) : 0;
         return { ...product, pallets: value };
       } else {
         return product;
       }
     });
     setData({ ...data, products: updated });
     setNewChanges(true);
   };
 
   const onCasesInputChange = (e) => {
     const updated = data.products.map((product) => {
       if (product.name === e.target.name) {
         const value = parseInt(e.target.value) ? parseInt(e.target.value) : 0;
 
         const predictedPallets =
           value && value !== 0
             ? Math.round(product.cof * +value)
             : Math.round(product.cof * product.predictedCases);
         return { ...product, cases: value, predictedPallets };
       } else {
         return product;
       }
     });
     setData({ ...data, products: updated });
     setNewChanges(true);
   };
 
   return { onCasesInputChange, onPalletsInputChange };
 };
 