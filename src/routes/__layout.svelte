<script context="module">
	export async function load({ session }) {
		return {
			props: {
				session
			}
		};
	}
</script>

<script>
	export let session;
</script>

<nav>
	<a href="/">index {session ? '👍' : '🔒'}</a>
	<a href="/auth">auth {session ? '🔒' : '👍'}</a>
	<a href="/redirect">redirect 🔒</a>
	<a href="/open">open 👍</a>
</nav>
<main>
	<slot />
</main>

<pre>
	session = {JSON.stringify(session, null, 2)}
</pre>
