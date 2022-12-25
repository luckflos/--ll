import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {
  

  return (
    
    <div class="absolute top-0 bottom-0 right-0 left-0 flex flex-1 flex-col bg-no-repeat bg-cover bg-[url(https://i3.wp.com/video-images.vice.com/articles/62fa8db3ecf922009470b07a/lede/1660587444136-shoon-header.jpeg?resize=780,470)]">
        <section class="greeting relative top-48 left-1/4">
			<h2 class="title">
				What's up, <input type="text" id="name" placeholder="Name here" />
			</h2>
        </section>
		
		<section class="create-todo relative top-1/4 left-1/4 w-5/12">
			<h3>CREATE A TODO</h3>
			<form id="new-todo-form">
				<h4>What's on your todo?</h4>
				<input 
					type="text" 
					placeholder="e.g. Get some milk"
					name="content"
					id="content" />
				
				<h4>Pick a category</h4>
				<div class="options">
					<label>
						<input type="radio" name="category" id="category1" value="business" /> 
						<span class="bubble business "></span>
						<div>Business</div>
					</label>
					<label>
						<input type="radio" name="category" id="category2" value="personal" />
						<span class="bubble personal"></span>
						<div>Personal</div>
					</label>
				</div>

				<input type="submit" value="Add todo"/>
			</form>
		</section>
		
		<section class="todo-list relative top-1/4 left-1/4 w-5/12">
			<h3>TODO LIST</h3>
			<div class="list" id="todo-list"></div>
		</section>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Flower',
};