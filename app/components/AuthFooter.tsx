import Link from "next/link";
const AuthFooter = () => {
	return (
		<>
			<footer className="mt-auto">
				<div className="nav mb-4">
					<Link
						className="nav-link text-decoration-underline p-0"
						href="help-topics-v1.html"
					>
						Need help?
					</Link>
				</div>
				<p className="fs-xs mb-0">
					© All rights reserved. Made by{" "}
					<span className="animate-underline">
						<Link
							className="animate-target text-dark-emphasis text-decoration-none"
							href="https://createx.studio/"
							target="_blank"
							rel="noreferrer"
						>
							Createx Studio
						</Link>
					</span>
				</p>
			</footer>
		</>
	);
};

export default AuthFooter;
