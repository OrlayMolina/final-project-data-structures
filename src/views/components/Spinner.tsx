import '../style/Spinner.css';

/**
 * Component for a spinner/loading animation.
 * @returns {JSX.Element} The Spinner component.
 */
const Spinner = (): JSX.Element => {
    return (
      <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
      </div>
    )
  }
  
  export default Spinner