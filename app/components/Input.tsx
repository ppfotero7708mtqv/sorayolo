import React from 'react';

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        value={value}
        type={type}
        id={id}
        className="
        text-md
        peer
        block
        w-full
        appearance-none
        rounded-md
        px-6
        pb-1
        pt-6
        invalid:border-b-1
        focus:outline-none
        focus:ring-0
        dark:bg-primary-200
        dark:opacity-50
        "
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="
        text-md 
        absolute
        left-6
        top-4 
        z-10 
        origin-[0] 
        -translate-y-3 
        scale-75 
        transform 
        text-primary-300
        duration-150
        peer-placeholder-shown:translate-y-0
        peer-placeholder-shown:scale-100 
        peer-focus:-translate-y-3 
        peer-focus:scale-75
        dark:text-white
      "
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
