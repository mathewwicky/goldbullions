import { useAccordionButton } from 'react-bootstrap/AccordionButton';
function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
        <i className="bi bi-plus-lg"
        type="button"
        style={{ color: '#014D85', float:"right" }}
        onClick={decoratedOnClick}
        >
             {children}
        </i>
  
    );
  }

  export default CustomToggle