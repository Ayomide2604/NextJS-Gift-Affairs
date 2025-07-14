import React from "react";

const SocialAuth = () => {
	return (
		<div className="d-flex flex-column flex-sm-row gap-3 pb-4 mb-3 mb-lg-4">
			<button
				type="button"
				className="btn btn-lg btn-outline-secondary w-100 px-2"
			>
				<i className="ci-google ms-1 me-1"></i>
				Google
			</button>
			<button
				type="button"
				className="btn btn-lg btn-outline-secondary w-100 px-2"
			>
				<i className="ci-facebook ms-1 me-1"></i>
				Facebook
			</button>
			<button
				type="button"
				className="btn btn-lg btn-outline-secondary w-100 px-2"
			>
				<i className="ci-apple ms-1 me-1"></i>
				Apple
			</button>
		</div>
	);
};

export default SocialAuth;
