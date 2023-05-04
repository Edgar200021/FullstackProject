export default function ProgressInfo({count, descr}) {
	return <div className="progress-info">
				<span className="progress-info__count">{count}</span>
				<p className="progress-info__descr">
					<span>Courses</span>
					<span>{descr}</span>
				</p>
		   </div>
}