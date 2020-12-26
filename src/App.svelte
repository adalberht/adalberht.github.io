<main>
	<img src="images/me.jpg" alt="Albertus's Profile" />
	<h1 class="highlight">Albertus Angga Raharja</h1>
	<div class="content">
		<h2>Hello there, welcome to my site!</h2>
		<div class="revamp-text">This site is currently <span class="bold">reworked on and revamped.</span></div>
	</div>
	<div class="contact">
		<div>In the meanwhile, you can reach me out here:</div>
		<ul>
			<li><a href="https://www.twitter.com/adalberht">@adalberht</a> on Twitter</li>
			<li><a href="https://www.linkedin.com/in/albertusangga">My LinkedIn</a></li>
		</ul>
	</div>
</main>

<style>
	.contact {
		margin-top: 1.5rem;
		text-align: left;
		font-size: 1rem;
	}
	.contact > ul {
		margin-top: 0.25rem;
	}
	main {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin: 0 auto;
		font-family: "DM Sans", sans-serif;
	}

	.revamp-text {
		font-size: 1.25rem;
	}

	h1 {
		margin-bottom: 0rem;
	}

	img {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		padding: 8px;
	}

	img::before {
		border-radius: 50%;
		border: solid 1px white;
		width: 200px;
		height: 200px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>