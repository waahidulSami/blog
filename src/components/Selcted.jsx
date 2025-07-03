import React , {useId} from "react";

function Selected({ 
    options , 
    label,
    className ,
    ...props
}, ref ) {
const id = useId();


return (
    <div className="w-full">
        {label && <label htmlFor={id} className="text-sm font-semibold mb-2">{label}</label>}

        <select
          id={id}
        ref={ref}
        className={`w-full h-10 px-4 rounded-xl bg-[#dce8f3] text-[#101518] text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
        >
            {options?.map((option) => (
                <option  key={option} value={option}>
                    {option}
                </option>)
            )}
        </select>
    </div>
)
}


export default  Selected