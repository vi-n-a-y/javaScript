import { useEffect, useState } from "react";

const RandomColor =()=>{
    const [typeOfColor, setTypeOfColor]=useState('hex')
    const [color, setColor]=useState("#000000");

    const handleCreateRandomHexColor =()=>{
        const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexColor="#";
        console.log(hex.length);
        for(let i=0;i<6;i++){
            hexColor+=hex[randomColorUtility(hex.length)]
        }
        console.log(hexColor);
        setColor(hexColor)

    }
    const randomColorUtility=(length)=>{
        let rand= Math.floor(Math.random()*length)
        console.log(rand);
        return rand;

    }

    
    const handleCreateRandomRgbColor =()=>{
        const r=randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect(()=>{
        if(typeOfColor === "rgb") handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();

    },[typeOfColor]);

    return (
        <div 
        style={{width:"100vw",
            height:"100vh",
           background: color ,
        }}
        className="container">
            <button onClick={()=>setTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={()=>setTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={typeOfColor === 'hex'? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>

            <div 
            style={{

                dispay:"flex",
                justifyContent:"center",
                alignItems:"center",
                color:"#fff",
                fontSize:"60px",
                MarginTop:"50px",
                flexDirection:"column",
                gap:"20px"
            }}
            >
                <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
                <h3>{color}</h3>

            </div>
        </div>
    )
}

export default RandomColor;