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
    "I am a Computer Science and Engineering major at UC Merced, specializing in full-stack development and machine learning. As a Project Manager for the Machine Learning Club and Social Media Manager at Hotpot.ai, I bring both technical expertise and leadership experience. I'm passionate about building AI-powered applications that solve real-world problems, from containerized web apps with GPT-4 integration to real-time computer vision systems. My work spans across modern web technologies like React and TypeScript, backend systems with Python and Flask, and machine learning frameworks including PyTorch and OpenCV.",

  // Experience
  experience: [
    {
      company: "Hotpot.ai",
      position: "Social Media Manager • Online",
      duration: "June 2023 – Present",
      description:
        "Managed and curated content on Twitter and Reddit to boost user engagement. Conducted analysis on trending stocks to optimize social media strategy and increase viewer engagement. Experimented with various posting formats and times, identifying patterns that increased views significantly. Collaborated with a team to strategically integrate quotes and financial analysis, enhancing content quality.",
      skills: [
        "Social Media Marketing",
        "Content Creation",
        "Data Analysis",
        "Engagement Optimization",
        "Team Collaboration",
      ],
    },
  ],

  // Skills
  skills: {
    languages: ["Python", "JavaScript", "HTML/CSS", "TypeScript"],
    frameworks: [
      "React",
      "React Native",
      "Node.js",
      "Flask",
      "Firebase",
      "Tailwind CSS",
      "PyTorch",
      "OpenCV",
      "Jupyter Notebook",
    ],
    tools: ["Git", "GitHub", "Google Cloud", "Docker"],
    certifications: [
      "Facial Classification with PyTorch",
      "Certified Entry-Level JavaScript Programmer",
      "Introduction to Computer Vision and Image Processing",
    ],
    leadership: ["Project Manager for Machine Learning Club"],
  },

  // Projects
  projects: [
    {
      title: "Real-time Image Classifier",
      description:
        "Fine-tuned a ResNet-18 on the Kaggle Cats vs Dogs dataset, reaching 98.6% validation accuracy after a single epoch using Cyclic Learning Rate scheduling and data augmentation. Built a real-time webcam demo with OpenCV that overlays live predictions at 30 FPS. Packaged in reproducible Jupyter notebooks.",
      technologies: [
        "Python",
        "PyTorch",
        "CNN",
        "TorchVision",
        "OpenCV",
        "CUDA",
        "Jupyter",
      ],
      github: "https://github.com/amannindra/catvsdog",
    },
    {
      title: "Realtime Image Classifier",
      description:
        "Fine-tuned a ResNet-18 on the Kaggle Cats Dogs dataset, reaching 98.6% validation accuracy after a single epoch using Cyclic Learning Rate scheduling and data-augmentation. Built a real-time webcam demo with OpenCV that overlays live predictions at 30 FPS. Packaged in reproducible Jupyter notebooks.",
      technologies: [
        "Python",
        "PyTorch",
        "CNN",
        "TorchVision",
        "OpenCV",
        "CUDA",
        "Jupyter",
      ],
      github: "https://github.com/amannindra/catvsdog",
      period: "June 2025",
    },
    {
      title: "AI-Resume",
      description:
        "Built a containerized full-stack web app that reviews résumés with GPT-4 and returns concise, structured feedback plus matching job listings. Features a RESTful Flask backend that converts PDFs to text, queries OpenAI for analysis, and exposes secured endpoints. Automated job-listing refresh via APScheduler with Apify crawler integration.",
      technologies: [
        "Python",
        "Flask",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Firebase",
        "Docker",
      ],
    },
    {
      title: "ASL Voice Assistant",
      description:
        "Built an interactive web demo that recognizes American Sign Language (A–Z) and carries on a real-time, voice-enabled conversation whose tone adapts to the user's detected emotions. Trained a Convolutional Neural Network (CNN) in PyTorch, exported to ONNX, achieving >90 FPS on desktop. Integrated Hume AI for emotion detection and Vapi for full-duplex voice communication.",
      technologies: [
        "CNN",
        "Next.js",
        "Tailwind CSS",
        "PyTorch",
        "ONNX",
        "Hume AI",
        "Vapi",
      ],
    },


    {
      title: "EdTok Learning Platform",
      description:
        "Created the frontend of EdTok, a platform designed to transform student learning through short-form content and quizzes. EdTok allows teachers to upload educational videos organized by classes, subjects, and chapters, followed by quizzes to test student understanding.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "AI Chatbot",
      description:
        "Building a free website where users can interact with multiple LLMs, including GPT-4, Claude 3.0, Meta AI, and Gemini. User data is securely stored via Firebase. The platform is funded through Google Ads.",
      technologies: ["React", "Firebase", "LLM Models", "Node.js"],
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
