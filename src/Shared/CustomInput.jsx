import { useState } from 'react';

export default function CustomInput({ icon: Icon, placeholder, label, type = 'text', name: name }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <label className="mb-1 text-sm font-semibold flex items-center gap-2">
        {label}
      </label>
      <div
        className="flex items-center gap-3 px-4 py-3 bg-gray-100 rounded-lg 
        border-2 border-transparent transition duration-500
        hover:border-gray-400 has-focus-within:border-teal-600"
      >
        <Icon
          className={`w-5 h-5 transition-colors duration-300 ${
            isFocused ? 'text-teal-600' : 'text-gray-400'
          }`}
        />
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required
          className="bg-transparent outline-none w-full text-gray-700 placeholder:text-gray-400"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );
}
