# To-Do List App

This React application is a simple to-do list that allows users to create tasks with deadlines.

**Features:**

* Add new tasks with title and due date.
* Marks tasks as complete with a checkbox.
* Animated task entry upon creation.

**Explanation:**

* **Imports:**
    * `useState`: Manages component state for user input and tasks.
    * `useEffect`: Runs side effects after state changes (animation).
    * `useRef`: Creates a mutable reference object to store DOM element references.
    * `crypto.randomUUID()`: Generates unique IDs for tasks (requires modern browser support).

* **State Variables:**
    * `textEntry`: Stores the user-entered task title.
    * `dateEntry`: Stores the user-entered due date.
    * `tasks`: An array of objects representing individual tasks (includes ID, title, date, and completion status).
    * `listItemRefs`: A reference object holding references to each task list item element.

* **`useEffect` Hook:**
    * Triggers after `tasks` state changes.
    * Loops through the `listItemRefs` and adds a CSS class (`show`) to each task element with a 100ms delay, creating an animation effect.

* **`doSubmit` Function:**
    * Handles form submission.
    * Prevents default form behavior.
    * Checks if both title and date fields are filled.
    * Updates `tasks` state by adding a new task object with a unique ID, title, date, and default completion status (incomplete).
    * Resets input fields after successful submission.

* **`toggleComplete` Function:**
    * Updates `tasks` state by filtering out the completed task based on its ID.

* **JSX Structure:**
    * A form for adding new tasks with title and date input fields.
    * A heading displaying "To-Do ".
    * An unordered list displaying existing tasks.
    * Each task item includes:
        * Title displayed in a paragraph.
        * Checkbox to mark the task as complete, linked to the `toggleComplete` function.
        * Due date displayed in a paragraph.

This application demonstrates basic React concepts like state management, form handling, and conditional rendering to create a functional to-do list with a touch of animation.
