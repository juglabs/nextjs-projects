This nextjs-projects repo contains different Next.js projects

1. # todoapp
    This is a **FULLY FUNCTIONAL TODO** app from scratch. Features include
             - Adding task
             - Editing task
             - Ticking off a task
             - Deleting a task
   
     So basically, its a perfectly **CRUD** (Create, Read, Update & Delete) or CRED(Create, Read, Edit & Delete) App.
        For the backend database, I chose **Supabase** free tier version. A DB table need to be created in the Admin dashboard.
        You can use Supabase provided client to manage the DB operations. 
        The App updates almost instantly for any Add, Edit, Delete operations.

Just ignore the newsarticles folder in the app folder as it's just a quick check to test working of a Free API.

the **components/SingleTask.tsx** is the heart of the todoapp. All the logic related to a particular task like editing, checking off, deleting
is handled by the SingleTask.tsx component. It's basically a **CLIENT COMPONENT** which maintains the state of a particular task, houses event handlers
related to task events. The event handlers in turn call the function related to Database operations like Updating a task completion, editing, deleting etc

The **components/server-components** contain the server-components meant to display the Current tasks, completed tasks and Add Task. They are designed as 
Server Components because they deal with backend. They DON'T contain any event handlers nor state. 

**KEY LEARNINGs**
 - **REVALIDATEPATH** thing. Every time a task is updated/deleted, ensure the COMPONENT responsible to render that Particular task
    is revalidated to reflect the latest change and not show the cached data. 
 - **useState is ASYNCHRONOUS**. So don't use state variables directly for any logical operations. Retrieve the state data and store it in a local let variable
 - Form action works with Server Actions 
 - By default all components or files are server components or run on the server. 
 - If you want to manage STATE or use callbacks or event handlers, then make that component a CLIENT COMPONENT using 'use client'

## MISC
The **utils/dbUtils** contain all the logic facing the Database 
