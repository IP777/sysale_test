import style from "./NSbutton.module.css";

const NSbutton = ({ name, fontSize, widthIn, heightIn }) => (
	<button
		className={style.nsBtn}
		style={{ width: widthIn, height: heightIn, fontSize: fontSize }}
	>
		{name}
	</button>
);

export default NSbutton;
