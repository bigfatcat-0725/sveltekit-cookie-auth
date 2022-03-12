<script context="module">
	export const load = async ({ session }) => {
		if (session) {
			return {
				status: 302,
				redirect: '/'
			};
		}
		return {};
	};
</script>

<script>
	// @ts-nocheck
	async function signUp(e) {
		const response = await fetch('/api/signup', {
			method: 'post',
			body: new FormData(e.target)
		});
		if (response.ok) window.location = '/';
		else alert(await response.text());
	}

	async function signIn(e) {
		const response = await fetch('/api/signin', {
			method: 'post',
			body: new FormData(e.target)
		});
		if (response.ok) window.location = '/';
		else alert(await response.text());
	}
</script>

<h1>auth here</h1>

<!-- window.location 문제 해결 못함 ㅠㅠ 기존의 방식대로 진행 -->
<!-- 이 방식대로하면 그냥 api 파일로 넘어가버림. 어떻게 돌아갈까..? -->
<!-- <form action="/api/signup" method="POST">
	<input type="email" name="email" />
	<input type="password" name="password" />
	<input type="submit" />
</form>

<form action="/api/signin" method="POST">
	<input type="email" name="email" />
	<input type="password" name="password" />
	<input type="submit" />
</form> -->

<!-- 기존 방식 -->
<h2>Sign up!</h2>
<form on:submit|preventDefault={signUp}>
	<input name="email" type="email" />
	<input name="password" type="password" />
	<button>Sign Up</button>
</form>

<h2>Sign in!</h2>
<form on:submit|preventDefault={signIn}>
	<input name="email" type="email" />
	<input name="password" type="password" />
	<button>Login</button>
</form>
