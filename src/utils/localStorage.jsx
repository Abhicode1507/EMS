// localStorage.clear(); // Clear local storage for testing purposes
const employees = [
  {
    id: 1,
    email: "employee1@wase.com",
    password: "123",
    name: "Aarav Mehta",
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "SEO Optimization",
        description: "Follow up with stakeholders for updates.",
        date: "2025-04-04",
        category: "SEO"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Fix UI Bugs",
        description: "Follow up with stakeholders for updates.",
        date: "2025-04-05",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Team Meeting Setup",
        description: "Follow up with stakeholders for updates.",
        date: "2025-03-24",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Launch Landing Page",
        description: "Document the outcomes and learnings.",
        date: "2025-03-27",
        category: "Reports"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Deploy Feature",
        description: "Document the outcomes and learnings.",
        date: "2025-03-25",
        category: "SEO"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Campaign Reporting",
        description: "Document the outcomes and learnings.",
        date: "2025-03-20",
        category: "SEO"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix UI Bugs",
        description: "Ensure data accuracy and timely completion.",
        date: "2025-04-13",
        category: "Social Media"
      }
    ],
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 2,
      failed: 1
    }
  },
  {
    id: 2,
    email: "employee2@wase.com",
    password: "123",
    name: "Rahul Sharma",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Client Onboarding",
        description: "Document the outcomes and learnings.",
        date: "2025-04-10",
        category: "Client Management"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Schedule Workshops",
        description: "Follow up with stakeholders for updates.",
        date: "2025-03-22",
        category: "Analytics"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Social Media Audit",
        description: "Follow up with stakeholders for updates.",
        date: "2025-04-10",
        category: "Client Management"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Update Resume Bank",
        description: "Follow up with stakeholders for updates.",
        date: "2025-03-18",
        category: "Analytics"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Fix UI Bugs",
        description: "Follow up with stakeholders for updates.",
        date: "2025-04-01",
        category: "Procurement"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create Promo Plan",
        description: "Ensure data accuracy and timely completion.",
        date: "2025-03-25",
        category: "Development"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "New Hire Orientation",
        description: "Document the outcomes and learnings.",
        date: "2025-04-10",
        category: "Inventory"
      }
    ],
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 2,
      failed: 1
    }
  },
  {
    id: 3,
    email: "employee3@wase.com",
    password: "123",
    name: "Vikram Singh",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Vendor Follow-up",
        description: "Document the outcomes and learnings.",
        date: "2025-03-21",
        category: "Finance"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Team Meeting Setup",
        description: "Ensure data accuracy and timely completion.",
        date: "2025-03-24",
        category: "Training"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Compliance Check",
        description: "Document the outcomes and learnings.",
        date: "2025-03-22",
        category: "SEO"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix UI Bugs",
        description: "Coordinate with other teams as required.",
        date: "2025-03-30",
        category: "Reports"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Prepare Q1 Report",
        description: "Document the outcomes and learnings.",
        date: "2025-04-06",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Create Promo Plan",
        description: "Ensure data accuracy and timely completion.",
        date: "2025-04-02",
        category: "Development"
      }
    ],
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    }
  },
  {
    id: 4,
    email: "employee4@wase.com",
    password: "123",
    name: "Priya Kapoor",
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Survey Analysis",
        description: "Complete the assigned task as per instructions.",
        date: "2025-04-02",
        category: "Reports"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Schedule Workshops",
        description: "Coordinate with other teams as required.",
        date: "2025-04-07",
        category: "Training"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Conduct Interviews",
        description: "Document the outcomes and learnings.",
        date: "2025-03-27",
        category: "Hiring"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "SEO Optimization",
        description: "Follow up with stakeholders for updates.",
        date: "2025-03-19",
        category: "SEO"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Fix UI Bugs",
        description: "Document the outcomes and learnings.",
        date: "2025-03-26",
        category: "Bug Fixing"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Presentation",
        description: "Coordinate with other teams as required.",
        date: "2025-03-20",
        category: "Research"
      }
    ],
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 5,
    email: "employee5@wase.com",
    password: "123",
    name: "Neha Gupta",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Data Cleanup",
        description: "Document the outcomes and learnings.",
        date: "2025-03-20",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Launch Landing Page",
        description: "Document the outcomes and learnings.",
        date: "2025-03-26",
        category: "Design"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Schedule Workshops",
        description: "Document the outcomes and learnings.",
        date: "2025-03-22",
        category: "Training"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Fix UI Bugs",
        description: "Document the outcomes and learnings.",
        date: "2025-03-30",
        category: "Bug Fixing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Design Newsletter",
        description: "Ensure data accuracy and timely completion.",
        date: "2025-04-03",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Vendor Follow-up",
        description: "Follow up with stakeholders for updates.",
        date: "2025-03-24",
        category: "Procurement"
      }
    ],
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    }
  }
];

  


const admin = [
    {
        "id": 100,
        "email": "admin@wase.com",
        "password": "123",
        "name": "Admin",
    }
]

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    // console.log(employees, admin);
    return { employees, admin };
}

