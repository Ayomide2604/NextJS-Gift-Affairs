import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useLogout() {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const logout = async (e: React.MouseEvent) => {
		setLoading(true);
		e.preventDefault();
		await signOut({ redirect: false });
		router.push("/login");
		setLoading(false);
		toast.success("Logout successful");
	};

	return { logout, loading };
}
