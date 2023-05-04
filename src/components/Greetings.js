import greeting from '../assets/icons/greeting.svg'

export default function Greeting() {
	return <section className="greeting">
	 	<div className="greeting__inner">
			<h1 className="greeting__title first-title">
			Hello Josh!
			</h1>
			<p className="greeting__text">It’s good to see you again.</p>
		</div>
	</section>
}