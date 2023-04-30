function Input({ placeHolder, variant = 'default' }) {
  const textStyle = variant === 'error' ? 'text-danger' : 'text-gray-500';
  const inputStyle = variant === 'error' ? 'border-danger' : 'border-gray-500';

  return (
    <div className="flex flex-col">
      <input
        type="text"
        className={`border-2 p-2 rounded focus:border-primary focus:outline-none mb-1 ${inputStyle}`}
        placeholder={placeHolder}
      />
      <span className={`text-sm ${textStyle}`}>Form helper text</span>
    </div>
  );
}

export default Input;
