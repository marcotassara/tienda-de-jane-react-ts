import { useState, type CSSProperties } from "react"


const styles:CSSProperties = {
                    backgroundColor: 'blue',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '8px 12px',
                    cursor: 'pointer',
                    margin: 5
                }

interface PropsInterCounter {                
    productName: string;
    quantity: number;
}

export const ItemCounter = ( { productName, quantity }:PropsInterCounter  ) => {
    
    const [ item , setItem ] = useState(quantity);

    const itemAdd = () => {
        console.log("clicked +1");
        setItem( item + 1);
    }

    const itemSubstract = () => {
        if(item === 1)return;
        setItem( item - 1);
    }    

    return (
        <section>
            <span>{ productName }</span>
            <button
                style={styles}
                onClick={ itemAdd }
            >+1</button>
            <span>Cantidad: { item }</span>
            <button
                style={styles}
                onClick={ itemSubstract }
            >-1</button>
        </section>
    )
}


