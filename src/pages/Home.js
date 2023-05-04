import { useEffect, useState } from 'react'

import Sidebar from '../layout/Sidebar'

import Greetings from '../components/Greetings'
import ProgressSlider from '../components/Progress'
import Tabs from '../components/Tabs'
import Search from '../components/Search'
import Notification from '../components/Notification'
import User from '../components/User'
import ProgressInfo from '../components/ProgressInfo'
import Select from '../components/Select'
import Chart from '../components/Chart'
import LearnMore from '../components/LearnMore'






export default function Home() {

	const [data, setData] = useState([]);
	const [chartData, setChartData ] = useState({
		labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
		datasets: [{
			backgroundColor: '#0C0B0B',
			backgroundWidth: '50px',
			borderColor: '#0C0B0B',

		}],
		options: {
			responsive: true,
			plugins: {
			  legend: {
				display: false
			  },
			},
			animations: {
				y: {
				  easing: 'easeInOutElastic',
				  from: (ctx) => {
					if (ctx.type === 'data') {
					  if (ctx.mode === 'default' && !ctx.dropped) {
						ctx.dropped = true;
						return 0;
					  }
					}
				  }
				}
			  }
		  }
		}
	)

	useEffect(() => {
        fetch('http://localhost:3001/courses')
            .then(res => res.json())
            .then(jsondata => setData(jsondata));
    }, []);

	useEffect(() => {
        setChartData({
            labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
            datasets: [{
                data: data?.map(item => item.learnTimeByHours),
                backgroundColor: '#0C0B0B',
                backgroundWidth: '50px',
                borderColor: '#0C0B0B',
            }],
            options: {
                responsive: true,
                plugins: {
                  legend: {	display: false
                  },
                },
                animations: {
                    y: {
                      easing: 'easeInOutElastic',
                      from: (ctx) => {
                        if (ctx.type === 'data') {
                          if (ctx.mode === 'default' && !ctx.dropped) {
                            ctx.dropped = true;
                            return 0;
                          }
                        }
                      }
                    }
                  }
              }
        })
    }, [data]);

	function changeValue(e) {
		if	(e.target.value === 'Monthly') {
			setChartData(prev => {
				return { ...prev,
						labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']	}
				})
			}
		
		if	(e.target.value === 'Yearly') {
			setChartData(prev => {
				return {...prev, labels: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]}
			})
		}

		if (e.target.value === 'Weekly') {
			setChartData(prev => {
				return {...prev, labels: ['mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
			})
		}
		}


	return <div className='container'>
				<Sidebar/>
				<div className="content">
					<div className="col-1">
						<Greetings />
						<ProgressSlider />
						<section className="courses">
							<h2 className="courses__title second-title mb-16">Courses</h2>
							<Tabs/>
						</section>
					</div>
					<div className="col-2 right-to-left">
						<div className="user-interface">
							<Search/>
							<Notification />
							<User/>
						</div>

						<div className="progress-info__box">
							<ProgressInfo count = '11' descr='completed'/>
							<ProgressInfo count = '4' descr='in progress'/>
						</div>

						<section className="statistics">
							<h2 className="statistics__title second-title">Your statistics</h2>
							<div className="statistics__action">
								<button className="statistics__action-btn statistics__action-btn--active">Learning Hours</button>
								<button className="statistics__action-btn">My Courses</button>
								<Select changeValue = {changeValue}/>
							</div>
							<Chart data={chartData} options={chartData.options}/>
						</section>
						<LearnMore/>
					</div>
				</div>
			</div>
}
 