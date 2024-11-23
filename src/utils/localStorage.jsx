const employees= [
      {
        "id": 1,
        "name": "John Doe",
        "email": "employee1@example.com",
        "password": "123",
        "taskCounts": 3,
        "accepted": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0,
        "tasks": [
          {
            "title": "Prepare Report",
            "description": "Create a financial summary report for Q1.",
            "date": "2024-11-20",
            "category": "Finance",
            "accepted": true,
            "newTask": false,
            "completed": false,
            "failed": false
            
          },
          {
            "title": "Team Meeting",
            "description": "Attend the weekly team sync.",
            "date": "2024-11-18",
            "category": "Meetings",
            "accepted": false,
            "newTask": true,
            "completed": false,
            "failed": false
            
          },
          {
            "title": "Project Review",
            "description": "Review the project requirements document.",
            "date": "2024-11-22",
            "category": "Documentation",
            "accepted": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": 3,
        "accepted": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0,
        "tasks": [
          {
            "title": "Client Follow-up",
            "description": "Call and follow up with the client for feedback.",
            "date": "2024-11-19",
            "category": "Client Relations",
            "accepted": true,
            "newTask": false,
            "completed": false,
            "failed": false
            
          },
          {
            "title": "Update Inventory",
            "description": "Update the inventory records in the system.",
            "date": "2024-11-21",
            "category": "Operations",
            "accepted": false,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Prepare Presentation",
            "description": "Work on the presentation slides for the upcoming workshop.",
            "date": "2024-11-23",
            "category": "Workshops",
            "accepted": false,
            "newTask": false,
            "completed": true,
            "failed": true
          }
        ]
      },
      {
        "id": 3,
        "name": "Bob Johnson",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": 3,
        "accepted": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0,
        "tasks": [
          {
            "title": "Data Analysis",
            "description": "Analyze the latest market trends data.",
            "date": "2024-11-20",
            "category": "Analysis",
            "accepted": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Draft Email Campaign",
            "description": "Draft the new email campaign for product launch.",
            "date": "2024-11-25",
            "category": "Marketing",
            "accepted": false,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "System Maintenance",
            "description": "Perform routine checks on server health.",
            "date": "2024-11-21",
            "category": "IT",
            "accepted": false,
            "newTask": false,
            "completed": true,
            "failed": true
          }
        ]
      },
      {
        "id": 4,
        "name": "Alice Williams",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": 3,
        "accepted": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0,
        "tasks": [
          {
            "title": "Schedule Appointments",
            "description": "Arrange appointments for next week.",
            "date": "2024-11-18",
            "category": "Scheduling",
            "accepted": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Feedback Collection",
            "description": "Collect feedback from recent training sessions.",
            "date": "2024-11-24",
            "category": "HR",
            "accepted": false,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Product Testing",
            "description": "Conduct testing of the new software feature.",
            "date": "2024-11-22",
            "category": "Development",
            "accepted": false,
            "newTask": false,
            "completed": true,
            "failed": true
          }
        ]
      },
      {
        "id": 5,
        "name": "Charlie Brown",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": 3,
        "accepted": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0,
        "tasks": [
          {
            "title": "Budget Planning",
            "description": "Plan the budget for the next quarter.",
            "date": "2024-11-26",
            "category": "Finance",
            "accepted": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Website Update",
            "description": "Update the company website with new content.",
            "date": "2024-11-19",
            "category": "IT",
            "accepted": false,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Training Preparation",
            "description": "Prepare materials for the upcoming training program.",
            "date": "2024-11-23",
            "category": "Training",
            "accepted": false,
            "newTask": false,
            "completed": true,
            "failed": true
          }
        ]
      }
    ]
    const admin=[{
      "id": 1,
      "name": "Admin",
      "email": "admin@example.com"
    }
]

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  
  const  employees= JSON.parse(localStorage.getItem('employees'));
   const admin = JSON.parse(localStorage.getItem('admin'));

   return {employees, admin}
};
  