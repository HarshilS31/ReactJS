import { createPortal } from 'react-dom';

const PopUpContent = ({ copied }) => {
  // Safe check to ensure the DOM element exists
  const targetElement = document.querySelector("#popup-content");

  if (!targetElement) return null; 

  return createPortal(
    <section>
      {copied && (
        <p style={{ position: "absolute", bottom: "3rem" }}>
          TEXT COPIED TO CLIPBOARD!
        </p>
      )}
    </section>,
    targetElement
  );
};

export default PopUpContent;