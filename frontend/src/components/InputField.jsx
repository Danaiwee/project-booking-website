
const InputField = ({
  label,
  id,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-xl font-medium text-white">
        {label}
      </label>
      <input
        className="input input-info w-full"
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
