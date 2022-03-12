import supabase from '$lib/db';

export const post = async ({ request }) => {
	const res = await request.formData();
	const email = await res.get('email');
	const password = await res.get('password');

	const { session, error } = await supabase.auth.signIn({
		email,
		password
	});

	if (error) {
		return {
			status: error.status,
			body: error.message
		};
	}

	return {
		status: 200,
		body: 'success',
		headers: {
			'set-cookie': `session=${
				session.user.email
			}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${new Date(
				session.expires_at * 1000
			).toUTCString()}; Max-Age=1000`,
			Location: '/index'
		}
	};
};
