import { ChangeEvent } from 'react';
import './challenge-input.css';

interface InputChallengeProps {
  type: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorText?: string;
}

export const InputChallenge = ({
  type,
  placeholder,
  onChange,
  error,
  errorText,
}: InputChallengeProps) => {
  return (
    <div>
      <input
        type={type}
        className={`challenge__input ${error ? 'challenge__input_error' : ''}`}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <div className='error_text'>{errorText}</div>}
    </div>
  );
};
