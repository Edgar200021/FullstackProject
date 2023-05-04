import { useEffect, useState } from 'react'

import Course from '../components/Course'
import Sidebar from '../layout/Sidebar'

export default function Actions () {
	
	const [data, setData] = useState()
	const [content, setContent] = useState(1)
	const [imgUrl, setImgUrl] = useState('')
	const [courseName, setCourseName] = useState('')
	const [author, setAuthor] = useState('')
	const [timeByHours, setTimeByHours] = useState(0)
	const [timeByMinutes, setTimeByMinutes] = useState(0)
	const [rating, setRating] = useState(0)
	const [deleteById, setDeleteById] = useState()
	const [changedById, setChangeById] = useState()
	const [changeImgUrl, setChangeImgUrl] = useState('')
    const [changeCourseName, setChangeCourseName] = useState('')
    const [changeAuthor, setChangeAuthor] = useState('')
    const [changeTimeByHours, setChangeTimeByHours] = useState('')
    const [changeTimeByMinutes, setChangeTimeByMinutes] = useState('')
    const [changeRating, setChangeRating] = useState('')

	useEffect(() => {
		fetch('http://localhost:3001/courses')
			.then(res => res.json())
			.then(res => {
				 setData(res)
			})
		},[]
		)

	function handleTab(num) {
		setContent(num)
	}

	function handleAddCourse() {
		fetch('http://localhost:3001/addcourse', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({
			img: imgUrl,
			title: courseName,
			author: author,
			learnTimeByHours: timeByHours,
			learnTimeByMinutes: timeByMinutes,
			rating: rating
		  })
		})
		.then(res => res.json())
		.then(res => {
		  console.log(res)
		  setData([...data, res])
		})
		.catch(err => console.log(err))


		setImgUrl("");
		setCourseName("");
		setAuthor("");
		setTimeByHours(0);
		setTimeByMinutes(0);
		setRating(0);
	  }
	
	  const handleDeleteCourse = () => {
		fetch(`http://localhost:3001/deletecourse/${deleteById}`, {
			method: 'DELETE',
		  })
		  .then(res => res.json())
		  .then(data => {
			setData(data)
		  })
		
	  };

	  const handleUpdate = (id) => {
		const updatedData = {
			img: changeImgUrl,
			title: changeCourseName,
			author: changeAuthor,
			learnTimeByHours: changeTimeByHours,
			learnTimeByMinutes: changeTimeByMinutes,
			rating: changeRating
        };
        fetch(`http://localhost:3001/changecourse/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData)
        })
        .then(response => response.json())
        .then(res => {
			setData([...data.map(course => course.id === id ? updatedData : course)])
		  })
        .catch((error) => {
            console.error('Error:', error);
        });

		setChangeById('')
		setChangeImgUrl('')
		setChangeCourseName('')
		setChangeAuthor('')
		setChangeTimeByHours(0)
		setChangeTimeByMinutes(0)
		setChangeRating(0)
    }
	


	return 	<div className="container">
				<Sidebar/>
				<div className="content" style={{display: 'block'}}>
					<section className="actions">
						<h1 className="first-title actions__title">Actions</h1>	
						<div className="actions__tabs">
							<button className="actions__button" onClick={() => {
								handleTab(1)
							}}>Show courses</button>
							<button className="actions__button" onClick={() => {
								handleTab(2)
							}}>Add course</button>
							<button className="actions__button" onClick={() => {
								handleTab(3)
							}}>Delete course</button>
							<button className="actions__button" onClick={() => {
								handleTab(4)
							}}>Change course</button>
						</div>

						<div className="actions__content">
							<div className={content === 1 ? 'content visible' : 'hidden'}>
							{data?.map(item => {
					return <Course key={item.id} img={item.img} title={item.title} author={item.author} hour={item.learnTimeByHours} minute={item.learnTimeByMinutes} rating={item.rating} />
				})}
							</div>
							<div className={content === 2 ? 'content visible' : 'hidden'}>
								<input type="text" className="actions__input" placeholder='Img URL' value={imgUrl} onChange={(e) => setImgUrl(e.target.value)}  required/>
								<input type="text" className="actions__input" placeholder='Course name'value={courseName} onChange={(e) => setCourseName(e.target.value)} required />
								<input type="text" className="actions__input" placeholder='Author of course'value={author} onChange={(e) => setAuthor(e.target.value)} required />
								<input type="number" className="actions__input" placeholder='Time Learning by hours'
								value={timeByHours} onChange={(e) => setTimeByHours(e.target.value)} required />
								<input type="number" className="actions__input" placeholder='Time Learning by minutes' 
								value={timeByMinutes} onChange={(e) => setTimeByMinutes(e.target.value)}required />
								<input type="number" className="actions__input" placeholder='Course rating'
								value={rating} onChange={(e) => setRating(e.target.value)} required/>
								<button className="actions__button" onClick={handleAddCourse} style={{backgroundColor: 'green', maxWidth: '20rem', animation: 'none'}}>Add</button>
							</div>

							<div className={content === 3 ? 'content visible' : 'hidden'}>
							<input type="text" className="actions__input" placeholder='ID of course' onChange={(e) => {
								setDeleteById(e.target.value)
							}} required />
								<button className="actions__button" onClick = {handleDeleteCourse}style={{backgroundColor: 'red', maxWidth: '20rem', animation: 'none'}}>Delete</button>
							</div>
							
							<div className={content === 4 ? 'content visible' : 'hidden'}>
								<input type="text" className="actions__input" placeholder='ID of course' onChange={(e) => {
									setChangeById(e.target.value)
								}} />
								<input type="text" className="actions__input" placeholder='Img URL' />
								<input type="text" className="actions__input" placeholder='Course name' />
								<input type="text" className="actions__input" placeholder='Author of course' />
								<input type="number" className="actions__input" placeholder='Time Learning by hours' />
								<input type="number" className="actions__input" placeholder='Time Learning by minutes' />
								<input type="number" className="actions__input" placeholder='Course rating' />
								<button className="actions__button" onClick={() => {
									handleUpdate(changedById)
								}} style={{backgroundColor: 'green', maxWidth: '20rem', }}>Change</button>
							</div>
							
						</div>
					</section>
				</div>

			</div>
}