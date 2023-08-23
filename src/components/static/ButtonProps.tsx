import React from 'react'


interface iButton{
    text?: string;
    h?: string;
    w?: string;
    bg?: string;
    border?: string;
    col?: string;
    medium?: string;
    small?: string
}

const ButtonProps:React.FC <iButton> = ({text, h, w, bg, border, col, medium,small}) => {
  return (
    <div className={`${h} ${w} ${border} ${bg} ${col} ${medium} ${small} flex justify-center items-center  text-[12px] font-bold rounded hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all`}>
        {text}
    </div>
  )
}

export default ButtonProps