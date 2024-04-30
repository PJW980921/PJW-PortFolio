import { useEffect, useState } from 'react';
import '../Projects/Projects.scss';
import { LuFolderSearch2 } from 'react-icons/lu';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';
interface ProjectsProps {
	id: number;
	image: string;
	title: string;
	description: string;
	github: string;
	site: string;
}
export default function Projects() {
	const [projectList, setProjectList] = useState<ProjectsProps[]>([]);

	useEffect(() => {
		fetch('/data/Projects.json')
			.then((res) => res.json())
			.then((data) => {
				setProjectList(data);
			});
	}, []);

	return (
		<section id='Projects' className='projects-container'>
			<h1 id='Projects' className='projects-title'>
				<LuFolderSearch2 />
				Projects
			</h1>
			<article className='projects-article'>
				{projectList.map((item) => {
					return (
						<div className='projects-box' key={item.id}>
							<div className='projects-box_img_box'>
								<h1 className='projects-box_title'>{item.title}</h1>
								<img src={item.image} alt='프로젝트 이미지' className='projects-box_img' width={200} height={200} />
							</div>

							<div className='projects-description_container'>
								<div className='projects-box_description_box'>
									<p className='projects-box_description'>{item.description}</p>
								</div>
								<div className='projects-links'>
									<div className='projects-box_github_box'>
										<a
											href={item.github}
											target='_blank'
											rel='noopener noreferrer'
											className='projects-box_github'
											aria-label='Project GitHub'
										>
											<FaGithubSquare />
										</a>
									</div>
									<div className='projects-box_site_box'>
										<a
											href={item.site}
											target='_blank'
											rel='noopener noreferrer'
											className='projects-box_site'
											aria-label='Project Link'
										>
											<FaLink />
										</a>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</article>
		</section>
	);
}
