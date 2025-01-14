Skip to content
Product
Solutions
Open Source
Pricing
Search
Sign in
Sign up
maneesha249
/
todonode
Public
Code
Issues
Pull requests
Actions
Projects
Security
Insights
todonode/index.js /
@maneesha249
maneesha249 Create index.js
Latest commit 09c938e 3 days ago
 History
 1 contributor
108 lines (94 sloc)  3.05 KB

const todoList = () => {
    all = []
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
        let overduee=[]
        for(let i=0;i<all.length;i++){
            if(all[i].dueDate <today && all[i].completed==false){
                overduee.push(all[i]);
            }
        }
        return overduee;
    }
  
    const dueToday = () => {
        let due=[]
        for (let i=0;i<all.length;i++){
            if(all[i].dueDate==today){
                due.push(all[i]);
            }
        }
        return due;
    }
  
    const dueLater = () => {
        let due=[]
        for (let i=0;i<all.length;i++){
            if(all[i].dueDate>today && all[i].completed==false){
                due.push(all[i]);
            }
        }
        return due;
    }
  
    const toDisplayableList = (list) => {
        let string="";
        for(let i=0;i<list.length;i++){
            if(list[i].dueDate==today){
                if(list[i].completed==true){
                string=string+"[x] "+list[i].title;
                }
                else{
                    string=string+"[ ] "+list[i].title;  
                }
            }
            else{
                string=string+"[ ] "+list[i].title+" " +list[i].dueDate;
            }
            if(i==list.length-1){
                return string
            }
            string=string+"\n";

        }
        return string;
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
todonode/index.js at main · maneesha249/todonode · GitHub
