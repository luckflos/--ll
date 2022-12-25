import { component$ } from '@builder.io/qwik';




export default component$(() => {
  

  return (
    <header class={"fixed top-0 left-0 w-full flex justify-between items-center p-4 text-white text-xl sm:text-4xl sm:p-8 z-40 bg-slate-900" 
    }>
      <a href="/home">
        <h1>Cierra's App</h1>
      </a>
      <div class="text-xl sm:text-3xl">
        
      </div>
      <script src="/src/components/card.js" defer></script>
      <script src="/src/components/calender.js" defer></script>
      <script src="/src/components/list.js" defer></script>
      <script src="/src/components/firebase.js"></script>

      

    </header>
  );
});
