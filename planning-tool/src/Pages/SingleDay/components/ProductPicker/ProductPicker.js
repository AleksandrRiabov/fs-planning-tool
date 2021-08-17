import { NativeSelect, FormControl } from "@material-ui/core";
import { capitalize } from "../../../../helpers";

const ProductPicker = ({ setSelectedProduct, selectedProduct, allProdNames }) => {
   return (
      <FormControl>
         <NativeSelect
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
         >
            <option key="chill" value="chill">
               Chill
            </option>
            {allProdNames.map((product) => {
               return (
                  <option key={product} value={product}>
                     {capitalize(product)}
                  </option>
               );
            })}
         </NativeSelect>
      </FormControl>
   );
};

export default ProductPicker;
