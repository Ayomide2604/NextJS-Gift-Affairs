import React from "react";
import ThemeToggle from "./ThemeToggle";
import SearchToggle from "./SearchToggle";
import CartToggle from "./CartToggle";
import CartOffCanvas from "./CartOffCanvas";
import SearchOffCanvas from "./SearchOffCanvas";
import Link from "next/link";

const Header = () => {
	return (
		<>
			<CartOffCanvas />
			<SearchOffCanvas />
			<header
				className="navbar navbar-expand-lg navbar-sticky bg-body d-block z-fixed p-0 fixed-top navbar-stuck"
				data-sticky-navbar='{"offset": 500}'
			>
				<div className="container py-2 py-lg-3">
					<div className="d-flex align-items-center gap-3 d-lg-none">
						<button
							aria-controls="navbarNav"
							aria-label="Toggle navigation"
							className="navbar-toggler me-4 me-md-2"
							data-bs-target="#navbarNav"
							data-bs-toggle="offcanvas"
							type="button"
						>
							<span className="navbar-toggler-icon" />
						</button>
					</div>
					<Link
						className="navbar-brand fs-2 py-0 m-0 me-auto me-sm-n5"
						href="index.html"
					>
						Gift Shop
					</Link>
					<div className="d-flex align-items-center">
						<button
							aria-controls="stuckNav"
							aria-expanded="false"
							aria-label="Toggle navigation in navbar stuck state"
							className="navbar-toggler d-none navbar-stuck-show me-5"
							data-bs-target="#stuckNav"
							data-bs-toggle="collapse"
							type="button"
						>
							<span className="navbar-toggler-icon" />
						</button>
						{/* Theme Toggle */}
						<ThemeToggle />
						{/* Search Toggle */}
						<SearchToggle />
						{/* Account */}
						<Link
							className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-shake d-none d-md-inline-flex"
							href="account-signin.html"
						>
							<i className="ci-user animate-target" />
							<span className="visually-hidden">Account</span>
						</Link>
						{/* Wishlist */}
						<Link
							className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-pulse d-none d-md-inline-flex"
							href="#!"
						>
							<i className="ci-heart animate-target" />
							<span className="visually-hidden">Wishlist</span>
						</Link>
						{/* Cart */}
						<CartToggle />
					</div>
				</div>
				<div className="collapse navbar-stuck-hide" id="stuckNav">
					<nav
						aria-labelledby="navbarNavLabel"
						className="offcanvas offcanvas-start"
						id="navbarNav"
						tabIndex={1}
					>
						<div className="offcanvas-header py-3">
							<button
								aria-label="Close"
								className="btn-close"
								data-bs-dismiss="offcanvas"
								type="button"
							/>
						</div>
						<div className="offcanvas-header gap-3 d-md-none pt-0 pb-3">
							<div className="dropdown position-static pb-lg-2">
								<h5>Gift Shop</h5>
							</div>
						</div>
						<div className="offcanvas-body pt-1 pb-3 py-lg-0">
							<div className="container pb-lg-2 px-0 px-lg-3">
								<div className="position-relative d-lg-flex align-items-center justify-content-between">
									<div className=""></div>
									<ul className="navbar-nav position-relative me-xl-n5">
										<li className="nav-item pb-lg-2 me-lg-n2 me-xl-0">
											<Link className="nav-link" href="/">
												Home
											</Link>
										</li>
										<li className="nav-item pb-lg-2 me-lg-n2 me-xl-0">
											<Link className="nav-link" href="/">
												About
											</Link>
										</li>
										<li className="nav-item pb-lg-2 me-lg-n2 me-xl-0">
											<Link className="nav-link" href="/">
												Shop
											</Link>
										</li>
										<li className="nav-item pb-lg-2 me-lg-n2 me-xl-0">
											<Link className="nav-link" href="/">
												Contact
											</Link>
										</li>
									</ul>
									<button
										aria-controls="searchBox"
										className="btn btn-outline-secondary justify-content-start w-100 px-3 mb-lg-2 ms-3 d-none d-lg-inline-flex"
										data-bs-target="#searchBox"
										data-bs-toggle="offcanvas"
										style={{
											maxWidth: "240px",
										}}
										type="button"
									>
										<i className="ci-search fs-base ms-n1 me-2" />
										<span className="text-body-tertiary fw-normal">Search</span>
									</button>
								</div>
							</div>
						</div>
						<div className="offcanvas-header border-top px-0 py-3 mt-3 d-md-none">
							<div className="nav nav-justified w-100">
								<Link
									className="nav-link border-end"
									href="account-signin.html"
								>
									<i className="ci-user fs-lg opacity-60 me-2" />
									Account
								</Link>
								<Link className="nav-link" href="#!">
									<i className="ci-heart fs-lg opacity-60 me-2" />
									Wishlist
								</Link>
							</div>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
