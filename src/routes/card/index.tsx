import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';




export default component$(() => {
  

  return (
    <div class="relative flex flex-1 flex-col text-blue-600 ">
      
      
      <section id="products" class="absolute left-0 right-0 min-h-screen p-4 bg-cover bg-no-repeat bg-[url(https://www.howtogeek.com/wp-content/uploads/2022/08/MidJourney-wizard-hall.jpg?height=200p&trim=2,2,2,2&crop=16:9)]">
        
        <div class="flex flex-col gap-4 flex-wrap">
          
            <div class="absolute m-0 top-20 left-10 bottom-10 right-10">
                <div id="app">
                    <button class="add-note" type="button">+</button>
                </div>
        
            </div>
        
        </div>
      </section>
    </div>
    
  );
});

export const head: DocumentHead = {
  title: "Cierra's App",
  
  
};