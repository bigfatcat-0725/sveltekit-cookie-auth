<script context="module">
	export async function load({ session }) {
		return {
			status: 302,
			redirect: session ? '/' : '/auth',
			props: {
				session
			}
		};
	}
</script>

<h1>YOU SHOULD NOT SEE ME!</h1>
