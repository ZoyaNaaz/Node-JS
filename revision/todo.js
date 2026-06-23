const fs = require("fs");
const filePath = "./tasks.json";

const loadTask = () => {
try {
  const dataBuffer = fs.readFileSync(filePath)
  return JSON.parse(dataBuffer.toString())
} catch (error) {
  return []
}
}

const saveTask = (tasks) => {
  const dataJSON = JSON.stringify(tasks)
  fs.writeFileSync(filePath, dataJSON)
  console.log("task Added: ", tasks)
}

const addTask = (task) => {
  const tasks = loadTask()
  tasks.push({task})
  saveTask(tasks)
}

const listTasks = () => {
  const tasks = loadTask();

  tasks.forEach((task,index) => {
    console.log(`${index+1} - ${task.task}`)
  });
}

const removeTask = (taskId) => {
  let tasks = loadTask();
 tasks = tasks.filter((_, index) => index !== taskId-1)
 saveTask(tasks)
}
let command = process.argv[2]
let argument = process.argv[3]

if (command === "add") {
  addTask(argument)
} else if (command === "list") {
  listTasks()
} else if (command === "remove") {
  removeTask(parseInt(argument))
}