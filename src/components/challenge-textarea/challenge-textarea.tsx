import { ChangeEvent, useEffect, useRef } from 'react';
import './challenge-textarea.css';

interface InputChallengeProps {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  error?: boolean;
  errorText?: string;
  value: string
}

export const TextareaChallenge = ({
  placeholder,
  onChange,
  error,
  errorText,
  value
}: InputChallengeProps) => {
  const textareaRef:any = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  
  return (
    <div>
      <textarea
        className={`challenge__textarea ${error ? 'challenge__textarea_error' : ''}`}
        placeholder={placeholder}
        onChange={onChange}
        ref={textareaRef}
      />
      {error && <div className='error_text'>{errorText}</div>}
    </div>
  );
};
