export const portfolioData = {
  // Personal Information
  personal: {
    name: "Aman Nindra",
    email: "amannindra@gmail.com",
    // phone: "+1 925-605-9936",
    // location: "1431 N Hillview Dr, Milpitas, CA 94035",
    profileImage: "/profile.jpg", // Replace with your actual profile image
    linkedinUrl: "https://www.linkedin.com/in/aman-nindra-1b3634270/",
    githubUrl: "https://github.com/amannindra",
  },

  // About Section
  about:
    "I am a Computer Science and Engineering major at UC Merced, specializing in web development and machine learning. Passionate about leveraging AI to address real-world challenges, I aspire to develop AI-related websites in areas such as healthcare, education, and social impact, where technology can enhance accessibility.",

  // Experience
  experience: [
    {
      company: "Hotpot.ai",
      position: "Social Media Intern • Online",
      duration: "May 2024 - Present",
      description:
        "Managed the company's social media presence, with a focus on Twitter. Contributed to brand awareness and customer engagement. Increased sales by showcasing the capabilities of Hotpot AI's image generation tool.",
      skills: [
        "Social Media Marketing",
        "Content Creation",
        "Brand Management",
      ],
    },
  ],

  // Skills
  skills: {
    languages: ["HTML", "CSS", "JavaScript", "React", "Python", "Firebase"],
    frameworks: ["React", "Next.js", "Express.js", "TensorFlow", "PyTorch"],
    tools: ["Git", "GitHub", "Google Services", "Google API", "AWS", "Docker"],
  },

  // Projects
  projects: [
    {
      title: "EdTok Learning Platform",
      description:
        "Created the Frontend of EdTok, a platform designed to transform student learning through short-form content and quizzes. EdTok allows teachers to upload educational videos organized by classes, subjects, and chapters, followed by quizzes to test student understanding.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      link: "https://edtok.example.com",
      github: "https://github.com/amannindra/edtok",
    },
    {
      title: "AI Chatbot",
      description:
        "Building a free website where users can interact with multiple LLMs, including GPT-4, Claude 3.0, Meta AI, and Gemini. User data is securely stored via Firebase. The platform is funded through Google Ads.",
      technologies: ["React", "Firebase", "TensorFlow", "Node.js"],
      link: "https://aichatbot.example.com",
      github: "https://github.com/amannindra/ai-chatbot",
    },
    {
      title: "TensorFlow Photo Categorization",
      description:
        "Developed a website and AI model that allows donors to upload photos of donation items. The AI uses TensorFlow and integrated into the backend, automatically detects and categorizes items, simplifying inventory sorting for organizations.",
      technologies: ["Python", "TensorFlow", "React", "Firebase"],
      github: "https://github.com/amannindra/photo-categorization",
    },
  ],

  // Education
  education: {
    degree: "Bachelor of Engineering",
    major: "Computer Science and Engineering",
    school: "University of California, Merced",
    graduationYear: "2028",
    highSchool: {
      name: "Milpitas High School",
      graduationYear: "2024",
    },
  },
};
