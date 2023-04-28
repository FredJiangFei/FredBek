function Title({ children, ...rest }) {
  const { className, others } = rest;
  return (
    <h1 className={`text-5xl font-bold ${className}`} {...others}>
      {children}
    </h1>
  );
}

export default Title;
