import { useEffect, useState } from 'react';
import '../Skills/Skills.scss';
import { IoHammerOutline } from 'react-icons/io5';
interface SkillsProps {
	id: number;
	title: string;
	image: string;
	alt: string;
}

export default function Skills() {
	const [skillList, setSkillList] = useState<SkillsProps[]>([]);

	useEffect(() => {
		fetch('/data/Skills.json')
			.then((res) => res.json())
			.then((data) => {
				setSkillList(data);
			});
	}, []);
	return (
		<section className='skills-container'>
			<h1 id='Skills' className='skills-title'>
				<IoHammerOutline />
				Skills
			</h1>
			<div className='front-end_container'>
				{skillList.map((item) => {
					return (
						<div className='front-end_box' key={item.id}>
							<h1 className='front-end_title'>{item.title}</h1>
							<div className='skills-img_box'>
								<img src={item.image} className='skills-img' alt={item.alt} />
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
