import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {


  return (
    <div class="absolute bottom-0 left-0 right-0 top-0 flex flex-1 flex-col text-blue-600 bg-cover bg-no-repeat bg-[url(https://imgv3.fotor.com/images/slider-image/an-oil-painting-dog-photo.jpg)]">
        
        <div id="container" class="absolute top-10 left-20">
            <div id="header">
                <div id="monthDisplay"></div>
                <div>
                <button id="backButton">Back</button>
                <button id="nextButton">Next</button>
                </div>
            </div>

            <div id="weekdays">
                <div>Sunday</div>
                <div>Monday</div>
                <div>Tuesday</div>
                <div>Wednesday</div>
                <div>Thursday</div>
                <div>Friday</div>
                <div>Saturday</div>
            </div>

            <div id="calendar"></div>
            </div>

            <div id="newEventModal">
            <h2>New Event</h2>

            <input id="eventTitleInput" placeholder="Event Title" />

            <button id="saveButton">Save</button>
            <button id="cancelButton">Cancel</button>
            </div>

            <div id="deleteEventModal">
            <h2>Event</h2>

            <p id="eventText"></p>

            <button id="deleteButton">Delete</button>
            <button id="closeButton">Close</button>
        </div>

            <div id="modalBackDrop"></div>

            <script src="/.netlify/edge-functions/index.js" defer></script>

    </div>
)});

export const head: DocumentHead = {
  title: 'Calender',
};