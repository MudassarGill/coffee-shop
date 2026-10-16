function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  inputMode,
  autoComplete,
  maxLength,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        inputMode={inputMode}
        autoComplete={autoComplete}
        maxLength={maxLength}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`rounded-xl border-2 bg-white px-4 py-3 outline-none focus:border-roast ${
          error ? "border-red-500" : "border-latte"
        }`}
      />

      {error && (
        <p id={`${name}-error`} className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormField;