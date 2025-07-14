"use client";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		document.body.setAttribute("data-bs-theme", theme);
	}, [theme]);

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
					<i
						className={`ci-sun  ${theme === "light" ? "d-block" : "d-none"}`}
					/>
					<i
						className={`ci-moon  ${theme === "dark" ? "d-block" : "d-none"}`}
					/>
					<i
						className={`ci-auto  ${theme === "auto" ? "d-block" : "d-none"}`}
					/>
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
						aria-pressed={theme === "light" ? "true" : "false"}
						className={`dropdown-item ${theme === "light" && "active"}`}
						data-bs-theme-value={theme}
						type="button"
						onClick={() => setTheme("light")}
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
						aria-pressed={theme === "dark" ? "true" : "false"}
						className={`dropdown-item ${theme === "dark" && "active"}`}
						data-bs-theme-value={theme}
						type="button"
						onClick={() => setTheme("dark")}
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
						aria-pressed={theme === "auto" ? "true" : "false"}
						className={`dropdown-item ${theme === "auto" && "active"}`}
						data-bs-theme-value={theme}
						type="button"
						onClick={() => setTheme("auto")}
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
