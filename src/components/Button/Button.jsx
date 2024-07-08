/* eslint-disable react/prop-types */
import "./Button.css"
export default function Button  (props) {
    const { text, background, buttonSize, icon, clickFunction, buttonType } = props;
    return (
        <button 
        className={`Button ${buttonSize} ${background}`}
        onClick={clickFunction}
        type={buttonType}
        >
            {text || <img src={icon} />}
        </button>
    );
}