import Link from "next/link";
import React from "react";

const CartOffCanvas = () => {
	return (
		<>
			{/* Cart offCanvas */}
			<div
				className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
				id="shoppingCart"
				tabIndex={-1}
				aria-labelledby="shoppingCartLabel"
				style={{ width: "500px" }}
			>
				{/* <!-- Header --> */}
				<div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
					<div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
						<h4 className="offcanvas-title" id="shoppingCartLabel">
							Shopping cart
						</h4>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						></button>
					</div>
					<p className="fs-sm">
						Buy <span className="text-dark-emphasis fw-semibold">$53</span> more
						to get{" "}
						<span className="text-dark-emphasis fw-semibold">
							Free Shipping
						</span>
					</p>
					<div
						className="progress w-100"
						role="progressbar"
						aria-label="Free shipping progress"
						aria-valuenow={78}
						aria-valuemin={0}
						aria-valuemax={100}
						style={{ height: "4px" }}
					>
						<div
							className="progress-bar bg-dark rounded-pill d-none-dark"
							style={{ width: "78%" }}
						></div>
						<div
							className="progress-bar bg-light rounded-pill d-none d-block-dark"
							style={{ width: "78%" }}
						></div>
					</div>
				</div>

				{/* <!-- Items --> */}
				<div className="offcanvas-body d-flex flex-column gap-4 pt-2">
					{/* <!-- Item --> */}
					<div className="d-flex align-items-center">
						<Link className="flex-shrink-0" href="shop-product-fashion.html">
							{/* <img src="assets/img/shop/fashion/thumbs/07.png" className="bg-body-tertiary rounded" width="110" alt="Thumbnail"> */}
						</Link>
						<div className="w-100 min-w-0 ps-3">
							<h5 className="d-flex animate-underline mb-2">
								<Link
									className="d-block fs-sm fw-medium text-truncate animate-target"
									href="shop-product-fashion.html"
								>
									Leather sneakers with golden laces
								</Link>
							</h5>
							<div className="h6 pb-1 mb-2">$74.00</div>
							<div className="d-flex align-items-center justify-content-between">
								<div className="count-input rounded-2">
									<button
										type="button"
										className="btn btn-icon btn-sm"
										data-decrement=""
										aria-label="Decrement quantity"
									>
										<i className="ci-minus"></i>
									</button>
									<input
										type="number"
										className="form-control form-control-sm"
										value="1"
										readOnly
									/>
									<button
										type="button"
										className="btn btn-icon btn-sm"
										data-increment=""
										aria-label="Increment quantity"
									>
										<i className="ci-plus"></i>
									</button>
								</div>
								<button
									type="button"
									className="btn-close fs-sm"
									data-bs-toggle="tooltip"
									// data-bs-custom-className="tooltip-sm"
									data-bs-title="Remove"
									aria-label="Remove from cart"
								></button>
							</div>
						</div>
					</div>

					{/* <!-- Item --> */}
					<div className="d-flex align-items-center">
						<Link className="flex-shrink-0" href="shop-product-fashion.html">
							{/* <img src="assets/img/shop/fashion/thumbs/08.png" className="bg-body-tertiary rounded" width="110" alt="Thumbnail"> */}
						</Link>
						<div className="w-100 min-w-0 ps-3">
							<h5 className="d-flex animate-underline mb-2">
								<Link
									className="d-block fs-sm fw-medium text-truncate animate-target"
									href="shop-product-fashion.html"
								>
									Classic cotton men shirt
								</Link>
							</h5>
							<div className="h6 pb-1 mb-2">$27.00</div>
							<div className="d-flex align-items-center justify-content-between">
								<div className="count-input rounded-2">
									<button
										type="button"
										className="btn btn-icon btn-sm"
										data-decrement=""
										aria-label="Decrement quantity"
									>
										<i className="ci-minus"></i>
									</button>
									<input
										type="number"
										className="form-control form-control-sm"
										value="1"
										readOnly
									/>
									<button
										type="button"
										className="btn btn-icon btn-sm"
										data-increment=""
										aria-label="Increment quantity"
									>
										<i className="ci-plus"></i>
									</button>
								</div>
								<button
									type="button"
									className="btn-close fs-sm"
									data-bs-toggle="tooltip"
									// data-bs-custom-className="tooltip-sm"
									data-bs-title="Remove"
									aria-label="Remove from cart"
								></button>
							</div>
						</div>
					</div>

					{/* <!-- Item --> */}
					<div className="d-flex align-items-center">
						<Link className="flex-shrink-0" href="shop-product-fashion.html">
							{/* <img src="assets/img/shop/fashion/thumbs/09.png" className="bg-body-tertiary rounded" width="110" alt="Thumbnail"> */}
						</Link>
						<div className="w-100 min-w-0 ps-3">
							<h5 className="d-flex animate-underline mb-2">
								<Link
									className="d-block fs-sm fw-medium text-truncate animate-target"
									href="shop-product-fashion.html"
								>
									Polarized sunglasses for men
								</Link>
							</h5>
							<div className="h6 pb-1 mb-2">
								$96.00{" "}
								<del className="text-body-tertiary fs-xs fw-normal">112.00</del>
							</div>
							<div className="d-flex align-items-center justify-content-between">
								<div className="count-input rounded-2">
									<button
										type="button"
										className="btn btn-icon btn-sm"
										data-decrement=""
										aria-label="Decrement quantity"
									>
										<i className="ci-minus"></i>
									</button>
									<input
										type="number"
										className="form-control form-control-sm"
										value="1"
										readOnly
									/>
									<button
										type="button"
										className="btn btn-icon btn-sm"
										data-increment=""
										aria-label="Increment quantity"
									>
										<i className="ci-plus"></i>
									</button>
								</div>
								<button
									type="button"
									className="btn-close fs-sm"
									data-bs-toggle="tooltip"
									// data-bs-custom-className="tooltip-sm"
									data-bs-title="Remove"
									aria-label="Remove from cart"
								></button>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Footer --> */}
				<div className="offcanvas-header flex-column align-items-start">
					<div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-md-4">
						<span className="text-light-emphasis">Subtotal:</span>
						<span className="h6 mb-0">$197.00</span>
					</div>
					<div className="d-flex w-100 gap-3">
						<Link className="btn btn-lg btn-secondary w-100" href="#!">
							View cart
						</Link>
						<Link className="btn btn-lg btn-dark w-100" href="#!">
							Checkout
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartOffCanvas;
