import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';




export default component$(() => {
  return (
    <div class="absolute top-0 bottom-0 right-0 left-0 flex flex-1 flex-col bg-no-repeat bg-cover bg-[url(https://www.legendkeeper.com/content/images/2022/07/Braden_4k_of_a_globe_world_sphere_planet_in_a_worldbuilding_lab_f9ee8bb9-8ac6-4fb1-8203-c6146188de05.png)]">
      <section class="min-h-screen flex flex-col  relative">
  
      
        
        <a href="/card" class="relative  text-5xl m-0 top-1/3 left-1/4 w-64 -translate-x-1/2  -translate-y-1/2 p-4 px-8 border-2 text-brown border-solid border-white 
      hover:text-slate-900 after:absolute after:bg-white after:right-full after:top-0 after:w-full after:h-full hover:after:translate-x-full 
      after:duration-300 overflow-hidden">
          <h3 class="relative z-20 text-center">Notes</h3>
        </a>

        <a href="/calender" class="relative m-0 top-1/2 left-1/4 w-64 text-5xl -translate-x-1/2  -translate-y-1/2 p-4 px-8 border-2 text-brown border-solid border-white 
      hover:text-slate-900 after:absolute after:bg-white after:right-full after:top-0 after:w-full after:h-full hover:after:translate-x-full 
      after:duration-300 overflow-hidden">
          <h3 class="relative z-20 text-center">Calender</h3>
        </a>

        <a href="/list" class="relative m-0 top-1/4 left-3/4 w-64 text-5xl -translate-x-1/2  -translate-y-1/2 p-4 px-8 border-2 text-brown border-solid border-white 
      hover:text-slate-900 after:absolute after:bg-white after:right-full after:top-0 after:w-full after:h-full hover:after:translate-x-full 
      after:duration-300 overflow-hidden">
          <h3 class="relative z-20 text-center">Task List</h3>
        </a>
      </section>

      
    
    </div>
       
  );
});



export const head: DocumentHead = {
  title: "Cierra's App",
  meta: [
    {
      
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
