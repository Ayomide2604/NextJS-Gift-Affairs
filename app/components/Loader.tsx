import React from "react";

const Loader = () => {
	return (
		<div
			className="position-fixed  top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
			style={{ zIndex: 9999 }}
		>
			<div
				className="spinner-border"
				style={{ width: "5rem", height: "5rem", color: "white" }}
				role="status"
			></div>
		</div>
	);
};

export default Loader;
