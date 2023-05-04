import {useState,useEffect,Fragment} from 'react'


import Course from '../components/Course'







export default function Tabs() {
	const [active, setActive] = useState(1)
	const [data, setData] = useState()
	const [filteredByNewest, setFilteredByNewest] = useState();
	const [filteredByRating, setFilteredByRating] = useState();
	const [filteredByPopularity, setFilteredByPopularity] = useState();

	useEffect(() => {
		fetch('http://localhost:3001/courses')
			.then(res => res.json())
			.then(res => {
				 setData(res)
			})
		},[]
		)

		useEffect(() => {
			if (data) {
				setFilteredByNewest(data.filter(item => item.rating <= 4.7));
				setFilteredByRating(data.filter(item => item.rating >= 4.7));
				setFilteredByPopularity(data.filter(item => item.rating >= 4.8));
			}
		}, [data]);



	const toggleTab = (index) => {
		setActive(index)
	}

	return <Fragment>
			<div className="courses__tab-box tabs">
				<button className={active === 1 ? 'tabs__btn tabs__btn-active' : 'tabs__btn'} onClick={() => {toggleTab(1)}}>All Courses</button>
				<button className={active === 2 ? 'tabs__btn tabs__btn-active' : 'tabs__btn'} onClick={() => {toggleTab(2)}}>The Newest</button>
				<button className={active === 3 ? 'tabs__btn tabs__btn-active' : 'tabs__btn'} onClick={() => {toggleTab(3)}}>Top Rated</button>
				<button className={active === 4 ? 'tabs__btn tabs__btn-active' : 'tabs__btn'} onClick={() => {toggleTab(4)}}>Most Popular</button>
			</div>

			<div className={active === 1 ? "courses__content courses__content-active" : 'courses__content'}>
				{data?.map(item => {
					return <Course key={item.id} img={item.img} title={item.title} author={item.author} hour={item.learnTimeByHours} minute={item.learnTimeByMinutes} rating={item.rating} />
				})}
				
			</div>

			<div className={active === 2 ? "courses__content courses__content-active" : 'courses__content'}>
			{filteredByNewest?.map(item => {
					return <Course key={item.id} img={item.img} title={item.title} author={item.author} hour={item.learnTimeByHours} minute={item.learnTimeByMinutes} rating={item.rating} />
				})}
			</div>

			<div className={active === 3 ? "courses__content courses__content-active" : 'courses__content'}>
			{filteredByRating?.map(item => {
					return <Course key={item.id} img={item.img} title={item.title} author={item.author} hour={item.learnTimeByHours} minute={item.learnTimeByMinutes} rating={item.rating} />
				})}
			</div>

			<div className={active === 4 ? "courses__content courses__content-active" : 'courses__content'}>
			{filteredByPopularity?.map(item => {
					return <Course key={item.id} img={item.img} title={item.title} author={item.author} hour={item.learnTimeByHours} minute={item.learnTimeByMinutes} rating={item.rating} />
				})}
			</div>
		   </Fragment>
}