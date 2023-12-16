# "Book a room" application

- [Challenge](#challenge)
- [Requirements](#requirements)
- [Project Setup](#project-setup)
- [Implementation](#implementation)
- [Future Enhancements](#future-enhancements)

### Challenge

Based on the provided design mockups, build a client-side application that shows how many available seats there are
for each of the meeting rooms in our office.

### Requirements

- As a user I want to be able to visit http://localhost:3000/rooms in my browser, and see all the rooms from the
  provided mock API.

- As a user I want to see how many remaining spots are available for each room. We’ll leave it up to you what the user
  should see after they click on the “Book!” button.

- The site should be fully responsive.

- Use a SPA framework such as React or VueJS, or a server-side framework such as NextJS.

### Project Setup

Install dependencies

### `npm install`

Run the project

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000/rooms](http://localhost:3000/rooms) to view it in the browser.

Build the project

### `npm run build`

Launch the test runner in the interactive watch mode

### `npm test`

### Implementation

**Base Setup**: React + TypeScript

**Tailwind CSS**: I chose to use Tailwind CSS because of its utility-first approach, which allows for quick development
and straightforward style maintenance. This decision is in line with the project's time constraints, as Tailwind CSS
offers a set of powerful tools that facilitate efficient development.

**Data Fetching**: With the limited time available, I went for the Fetch API because it has a user-friendly setup and
works well across different platforms. This way, I avoided bringing in extra dependencies.

**Tests**: Shared components within the application are tested using React Testing Library.

### Future Enhancements

Considering the tight schedule for implementation, I wasn't able to include some features. Here are areas where I could
make things even better:

1. Design a separate Home page instead of duplicating pages for `/` and `/rooms` paths.
2. Consider implementing a more user-friendly approach for the loading state: replace loader with skeletons for the room
   cards.
3. Extend the functionality of some shared components (`Button`, `Placeholder`, etc.) and make them more generic.
4. Replace dummy action when clicking on the "Book!" button with real logic (API support needed).
5. Introduce a proper notification system for a better user experience (e.g. notify the user when something goes wrong
   during booking).
6. Optimize images by rendering different resolutions for various screen sizes to improve performance, page load and
   user experience.
7. Improve accessibility to ensure the application is usable for every user.
8. Implement a theming system to allow for easy customization and consistency in the application's appearance.
9. Improve page styling and polish styles for the page elements.
10. Increase test coverage and introduce end-to-end (E2E) testing to ensure that the entire page works correctly from
    the user's perspective.
