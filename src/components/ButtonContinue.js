export default function ButtonContinue({title, descr}) {
	return <a href="#" className={title === 'continue' ? 'btn__continue' : 'btn__continue btn__continue-bordered'}>
				{descr}
			</a>
}