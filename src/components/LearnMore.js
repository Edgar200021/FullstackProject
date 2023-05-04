import Button from './ButtonContinue'

import img from '../assets/icons/learn-more.svg'

export default function LearnMore() {
	return <article className="learn-more">
				<div className="learn-more__content">
					<h2 className="learn-more__title second-title">Learn even more!</h2>
					<p className="learn-more__text">Unlock premium features only for $9.99 per month.</p>
					<Button title='continue' descr='Go Premium'/>
				</div>
		   </article>
}