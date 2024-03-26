# To-Do List App

This React application is a simple to-do list that allows users to create tasks with deadlines.

**Features**

* Add new tasks with title and due date.
* Marks tasks as complete with a checkbox.
* Animated task entry upon creation.

**Unimplemented Features**

* Task memory via `localStorage`.
* CSS Animation to trigger on task completion.
* Warning when current date is a given task's due date.

**Explanation**

All logic is handled by a single component: `App.jsx`.

* **Dependencies**
    * `useState`: Manages component state for user input and tasks.
    * `useEffect`: Runs side effects after state changes (animation).
    * `useRef`: Creates a mutable reference object to store DOM element references.
    * `crypto.randomUUID()`: Generates unique IDs for tasks (requires modern browser support).

* **State Variables**
    * `textEntry`: Stores the user-entered task title.
    * `dateEntry`: Stores the user-entered due date.
    * `tasks`: An array of objects representing individual tasks (includes ID, title, date, and completion status).
    * `listItemRefs`: A reference object holding references to each task in the state array. These pseudo-elements make animations easier to time and trigger.

* **`useEffect` Hook**
    * Triggers when the `tasks` state changes.
    * Loops through the `listItemRefs` and adds a CSS animation with a bezier curve to pop elements into view.

* **`doSubmit` Function**
    * Handles form submission.
    * Checks if both title and date fields are filled.
    * Updates `tasks` state by adding a new task object with a unique ID, title, and date.
    * Resets input fields after successful submission.

* **`toggleComplete` Function**
    * Removes from `tasks` state array by filtering out the completed task by taking the ID passed by its checkbox.

This application demonstrates basic React knowledge like state management and conditional rendering to create a functional to-do list with a touch of CSS animation.
