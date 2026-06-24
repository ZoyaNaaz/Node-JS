const fs = require("fs");
const filePath = "./tasks.json";

const loadTasks = () => {
  try {
    return JSON.parse(fs.readFileSync(filePath).toString());
  } catch (error) {
    return [];
  }
};
const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, tasks);
  console.log(`Task Added: ${dataJSON}`);
};
const addTask = (task) => {
  const tasks = loadTasks();
  tasks.push({ task });
  saveTasks(tasks);
};

const listTasks = () => {
  const tasks = loadTasks();
  tasks.forEach((task, index) => {
    console.log(`${index + 1} - ${task.task}`);
  });
};

const removeTask = (taskId) => {
  const tasks = loadTasks();
  tasks = tasks.filter((_, index) => index !== taskId - 1);
};

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("Command not found!");
}
