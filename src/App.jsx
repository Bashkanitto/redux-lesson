// import './App.css'

import { useDispatch } from 'react-redux';
import { setAvatar } from './store/avatarSlice';

function App() {
	const dispatch = useDispatch();
	return (
		<div className='bg-slate-200 h-[100vh]'>
			<header className='w-full h-[10vh] bg-white flex justify-between items-center p-10'>
				<h1 className='text-3xl font-bold '>Losos</h1>
				<nav className='hidden md:flex gap-5 '>
					<a href='#'>Main</a>
					<a href='#'>About</a>
					<a href='#'>Contact</a>
				</nav>
				<button className='flex bg-black text-white p-5 md:hidden'>Menu</button>
			</header>
			<div className='flex'>
				<aside className='hidden sm:flex sidebar w-[130px] h-[90vh] bg-slate-600 flex-col items-center justify-between p-5'>
					<nav className='text-white flex flex-col gap-5'>
						<a href='#'>Main</a>
						<a href='#'>About</a>
						<a href='#'>Contact</a>
					</nav>
					<button className='bg-blue-400 text-white p-2 h-[40px]'>
						Subscribe
					</button>
				</aside>

				<section className='image h-[90vh]'>
					<button onClick={() => dispatch(setAvatar('boy.png'))}>
						<img src='boy.png' className='' alt='' />
					</button>
					<button onClick={() => dispatch(setAvatar('girl.png'))}>
						<img src='girl.png' alt='' />
					</button>
				</section>
			</div>
		</div>
	);
}

export default App;
