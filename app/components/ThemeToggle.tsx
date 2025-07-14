import React from "react";

const ThemeToggle = () => {
	return (
		<div className="dropdown">
			<button
				aria-expanded="false"
				aria-label="Toggle theme (light)"
				className="theme-switcher btn btn-icon btn-lg btn-outline-secondary fs-lg border-0 rounded-circle animate-scale"
				data-bs-toggle="dropdown"
				type="button"
			>
				<span className="theme-icon-active d-flex animate-target">
					<i className="ci-sun" />
				</span>
			</button>
			<ul
				className="dropdown-menu"
				// style={{
				// 	"--cz-dropdown-min-width": "9rem",
				// }}
			>
				<li>
					<button
						aria-pressed="true"
						className="dropdown-item active"
						data-bs-theme-value="light"
						type="button"
					>
						<span className="theme-icon d-flex fs-base me-2">
							<i className="ci-sun" />
						</span>
						<span className="theme-label">Light</span>
						<i className="item-active-indicator ci-check ms-auto" />
					</button>
				</li>
				<li>
					<button
						aria-pressed="false"
						className="dropdown-item"
						data-bs-theme-value="dark"
						type="button"
					>
						<span className="theme-icon d-flex fs-base me-2">
							<i className="ci-moon" />
						</span>
						<span className="theme-label">Dark</span>
						<i className="item-active-indicator ci-check ms-auto" />
					</button>
				</li>
				<li>
					<button
						aria-pressed="false"
						className="dropdown-item"
						data-bs-theme-value="auto"
						type="button"
					>
						<span className="theme-icon d-flex fs-base me-2">
							<i className="ci-auto" />
						</span>
						<span className="theme-label">Auto</span>
						<i className="item-active-indicator ci-check ms-auto" />
					</button>
				</li>
			</ul>
		</div>
	);
};

export default ThemeToggle;
