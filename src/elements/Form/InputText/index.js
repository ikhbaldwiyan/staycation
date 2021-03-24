import React, { useState } from 'react'

export default function Text() {
  const {
    value,
    type,
    placeholder,
    name,
    prepend,
    append,
    outerClassName,
    inputClassName,
    errorResponse,
  } = props;

  const [hasError, setHasError] = useState(null);

  let pattern = "";
  if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (type === "tel") pattern = "[0-9]*";

  const onChange = (event) => {
    const target = {
      target: {
        name: name,
        value: event.target.value,
      },
    };

    if (type === "email") {
      !pattern.test(event.target.value) ? setHasError(errorResponse) : setHasError(null);
    }

    if (type === "tel") {
      if (event.target.validity.valid) props.onChange(target);
    } else {
      props.onChange(target);
    }
  }

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">
              {prepend}
            </span>
          </div>
        )}
        <input
          type={type}
          name={name}
          pattern={pattern}
          className={["form-control", inputClassName].join(" ")}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">
              {append}
            </span>
          </div>
        )}
        {hasError && <span className="error-helper">{hasError}</span>}
      </div>
    </div>
  );
};

Text.defaultProps = {
  type: "text",
  pattern: "",
  placeholder: "Please type here...",
  errorResponse: "Please match the requested format.",
};

Text.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  type: propTypes.string,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
