import './Button.css';

/**
 * variant: 'primary' | 'outline' | 'ghost'
 * size:    'sm' | 'md' (default) | 'lg'
 */
export default function Button({ children, variant = 'primary', size = 'md', onClick, style, type = 'button', fullWidth = false }) {
  return (
    <button
      type={type}
      className={`btn btn--${variant} btn--${size} ${fullWidth ? 'btn--full' : ''}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}
