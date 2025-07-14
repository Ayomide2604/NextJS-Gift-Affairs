import React from "react";

const CartToggle = () => {
	return (
		<>
		
			{/* Cart Button */}
			<button
				aria-controls="shoppingCart"
				aria-label="Shopping cart"
				className="btn btn-icon btn-lg fs-xl btn-outline-secondary position-relative border-0 rounded-circle animate-scale"
				data-bs-target="#shoppingCart"
				data-bs-toggle="offcanvas"
				type="button"
			>
				<span
					className="position-absolute top-0 start-100 badge fs-xs text-bg-primary rounded-pill mt-1 ms-n4 z-2"
					// style={{
					// 	"--cz-badge-padding-x": ".42em",
					// 	"--cz-badge-padding-y": ".25em",
					// }}
				>
					3
				</span>
				<i className="ci-shopping-bag animate-target me-1" />
			</button>
		</>
	);
};

export default CartToggle;
