
export const ModelBox = ({content, onClose, open}) => {
	const className = open ? "click-catcher--open" : "click-catcher";
	return (
		<div className={className} onClick={onClose}>
			<div className="modal">{content}</div>
		</div>
	);
};