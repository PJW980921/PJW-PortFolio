import './DropdownMenu.scss';
export default function DropdownMenu() {
	return (
		<nav className='dropdown-container'>
			<ul className='dropdown-box'>
				<li className='nav-item_box'>
					<a href='#AboutMe' className='nav-item'>
						About Me
					</a>
				</li>
				<li className='nav-item_box'>
					<a href='#Skills' className='nav-item'>
						Skills
					</a>
				</li>
				<li className='nav-item_box'>
					<a href='#Projects' className='nav-item'>
						Projects
					</a>
				</li>
				<li className='nav-item_box'>
					<a href='#ContactMe' className='nav-item'>
						ContactMe
					</a>
				</li>
			</ul>
		</nav>
	);
}
