Task Saver webApp uses only Express and Node.js (no MongoDB), it likely stores data in a local file (like a .json file or .txt) or in-memory (temporarily, until server restarts).

🧾 Project Description

✅ 

What It Is:
Your Task Saver WebApp is a full-stack application built with Node.js and Express that allows users to:

Add new tasks
View a list of tasks
Read full task details with a “Read More” feature
Edit existing tasks
Delete tasks permanently

⚙️

How It Works (Internals)
📁

File Storage:
Instead of using a database like MongoDB, the app uses Node’s fs module.

Tasks are stored in a file such as:
tasks.txt
data.txt
Each time a task is added/edited/deleted, the file is read, updated, and saved again.

🛠️ 

Tech Stack:
Backend: Node.js, Express
Frontend: EJS (or HTML templates), Tailwind CSS
Storage: File system using Node’s fs module (e.g., fs.readFile, fs.writeFile).
