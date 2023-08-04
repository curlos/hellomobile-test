import './Offcanvas.css';

const Offcanvas = ({ show, onHide, children }) => {
    return (
        <div className={`offcanvas-container ${show ? 'show' : ''}`}>
            {show && <div className="overlay" onClick={onHide}></div>}
            <div className={`offcanvas ${show ? 'show' : ''}`}>
                <button className="close-button" onClick={onHide}>Close</button>
                {children}
            </div>
        </div>
    );
};

export default Offcanvas;