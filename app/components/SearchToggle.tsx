import React from "react";

const SearchToggle = () => {
	return (
		<button
			aria-controls="searchBox"
			aria-label="Toggle search bar"
			className="btn btn-icon btn-lg fs-xl btn-outline-secondary border-0 rounded-circle animate-shake d-lg-none"
			data-bs-target="#searchBox"
			data-bs-toggle="offcanvas"
			type="button"
		>
			<i className="ci-search animate-target" />
		</button>
	);
};

export default SearchToggle;
