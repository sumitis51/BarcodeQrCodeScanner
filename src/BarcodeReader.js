import React, { useState } from 'react';
import BarcodeScannerComponent from "react-qr-barcode-scanner";

   const Test=()=>{
    const [ data, setData ] = useState('');
    const [isVisible,setIsvisible]=useState(false);
    const showScan=()=>setIsvisible(true);
        return(
          <div>
            {isVisible &&
             <BarcodeScannerComponent
             width={500}
             height={500}
             onUpdate={(err, result) => {
               if (result){
                setData(result.text)
               }
             }}
              />}
            <p>{data}</p>
            <button onClick={showScan}>showBar</button>
          </div>
        )
      }
    export default Test;