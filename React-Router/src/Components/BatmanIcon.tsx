// You can rename it to just "BatSignal", "Logo", or "BatIcon"
export function BatSignal({ className = "w-12 h-12 text-black" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C11.5 3.5 10.5 4.5 9 5c-1.5-.5-2.5-1.5-3-3-.3.5-.6 1.2-.6 2 0 2.5 2 4.5 4.5 4.5.3 0 .6 0 .9-.1-.5.6-1.2 1.1-2 1.4-1.2.4-2.6.2-3.8-.5 1.5 2.5 4.3 4.2 7.5 4.2s6-1.7 7.5-4.2c-1.2.7-2.6.9-3.8.5-.8-.3-1.5-.8-2-1.4.3 0 .6.1.9.1 2.5 0 4.5-2 4.5-4.5 0-.8-.3-1.5-.6-2-.5 1.5-1.5 2.5-3 3-1.5-.5-2.5-1.5-3-3z"/>
    </svg>
  );
}