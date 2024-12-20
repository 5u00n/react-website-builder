function StyledCheckbox({ checked, onChange, value, name, ...props }) {
  return (
    <div className="relative">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        value={value}
        name={name}
        className="peer appearance-none border-2 border-gray-400 rounded-full w-4 h-4 transition duration-400 checked:border-blue-600 checked:border-2"
        {...props}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-600 scale-0 peer-checked:scale-100 transition duration-400"></div>
    </div>
  );
}

export const ToolbarCheckbox = ({ value, label, checked, onChange, name }) => {
  return (
    <label className="flex items-center space-x-2 text-[15px] cursor-pointer">
      <StyledCheckbox 
        value={value} 
        checked={checked}
        onChange={onChange}
        name={name}
      />
      <span className="text-gray-700">{label}</span>
    </label>
  );
};
