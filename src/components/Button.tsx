import React, { ComponentProps } from 'react'

type IVariant =   "red" | "green" | "yellow"

type IButton = ComponentProps<"button"> & {
    children : React.ReactNode
    variant : IVariant
}


function Button({children, variant , style , ...rest} : IButton) {
  return (
    <button {...rest} style={{...style  , ...cheVariant(variant)}} >
        {children}
    </button>
  )

function cheVariant(variant : IVariant){
  if(variant === "red"){
    return {  backgroundColor: "rgb(255, 114, 114)",
      borderRadius: "8px",
      boxShadow: "0 1px 5px rgba(0, 0, 0, 0.4)",
      color: "white",
      padding:"5px"}
  }
  else if(variant === "green"){
    return {backgroundColor: "rgb(122, 224, 91)",
    borderRadius: "8px",
    boxShadow: "0 1px 5px rgba(0, 0, 0, 0.4)",
    color: "white",
    padding:"5px"}
  }
  else if(variant === "yellow"){
    return {backgroundColor: "rgb(226, 192, 42)",
    borderRadius: "8px",
    boxShadow: "0 1px 5px rgba(0, 0, 0, 0.4)",
    color: "white",
    padding:"5px"}
  }
}




}

export default Button