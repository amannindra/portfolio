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
    "I am a Computer Science and Engineering major at UC Merced, specializing in full-stack development, mobile development, and machine learning. Currently serving as a Software Engineering Intern at Arrowz, a mental health startup, where I develop cross-platform mobile applications using Flutter/Dart. As a Project Manager for the Machine Learning Club and Social Media Manager at Hotpot.ai, I bring both technical expertise and leadership experience. I'm passionate about building AI-powered applications and mobile solutions that solve real-world problems, from containerised web apps with GPT-4 integration to real-time computer vision systems achieving >90 FPS performance. My experience spans modern web technologies like React and TypeScript, mobile development with Flutter, backend systems with Python and Flask, and cutting-edge machine learning frameworks including PyTorch and OpenCV. I excel at creating innovative solutions that bridge AI research with practical, user-friendly applications, while maintaining focus on performance optimization and seamless user experiences.",

  // Experience
  experience: [
    {
      company: "Arrowz (Mental Health Startup)",
      position: "Software Engineering Intern • Remote",
      duration: "September 2025 – Present",
      description:
        "Developed cross-platform mobile application using Flutter/Dart for emotion tracking and mental wellness, implementing complex UI components and state management across 25+ screens. Engineered reusable UI components including dynamic menu drawers, custom app bars, and responsive layouts, ensuring consistent design patterns and reducing code duplication by 40%.",
      skills: [
        "Flutter/Dart",
        "Cross-platform Development",
        "State Management",
        "UI/UX Design",
        "Mobile Development",
        "Code Optimization",
      ],
    },
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
    languages: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Dart",
      "HTML/CSS",
      "C++",
    ],
    frameworks: [
      "Flutter",
      "React",
      "React Native",
      "Node.js",
      "Flask",
      "Firebase",
      "PyTorch",
      "OpenCV",
    ],
    mobileAndDatabase: [
      "Flutter SDK",
      "Isar Database",
      "Firebase Auth",
      "State Management",
      "Cross-platform Development",
    ],
    tools: ["Git", "GitHub", "Google Cloud", "Docker"],
    certifications: [
      "Getting Started with Flutter & Dart",
      "Introduction to Selenium",
      "Computer Vision and Image Processing Essentials",
      "Facial Expression Recognition with PyTorch",
      "JSE – Certified Entry-Level JavaScript Programmer - OpenEDG",
    ],
    leadership: ["Project Manager for Machine Learning Club"],
  },

  // Projects
  projects: [
    {
      title: "AI-Resume",
      description:
        "Built a containerised full-stack web app that reviews résumés with GPT-4 and returns concise, structured feedback plus matching job listings. Designed a RESTful Flask backend that (i) converts PDFs to text with pdfminer / pdf2image, (ii) queries OpenAI for analysis, (iii) exposes upload and health endpoints secured by CORS. Automated job-listing refresh via APScheduler: every 10 min an Apify crawler scrapes new postings; results are pushed to Firebase Realtime Database for instant UI updates. Developed a responsive React + TypeScript front-end (Vite, Tailwind CSS) that lets users upload résumés, view AI feedback, and browse fresh job matches.",
      technologies: ["Python", "Flask", "React.js", "Tailwind CSS", "Firebase"],
      dateRange: "June 2025 – Present",
      // github: "https://github.com/amannindra/AI-Resume",
    },
    {
      title: "ASL Voice Assistant",
      description:
        "Built an interactive web demo that recognises American Sign Language (A–Z) and carries on a real-time, voice-enabled conversation whose tone adapts to the user's detected emotions. Trained a CNN in PyTorch, exported to ONNX, and ran inference client-side with onnxruntime-web—achieving >90 FPS on desktop without server calls. Streamed webcam frames to Hume AI to extract top-3 emotions every second; injected the results into prompts so the assistant replies empathetically. Leveraged Vapi for full-duplex voice: instant transcription, GPT-4 response delivery, and low-latency TTS playback, all within the browser. Designed a modern UI in Next.js (App Router) with Tailwind CSS and Radix primitives; added animated subtitle track and pulsing voice orb for accessibility.",
      technologies: [
        "Convolutional Neural Networks",
        "Next.js",
        "Tailwind CSS",
        "Python",
        "PyTorch",
        "onnxruntime",
      ],
      dateRange: "June 2025",
    },
    {
      title: "Realtime Image Classifier",
      description:
        "Fine-tuned a ResNet-18on the Kaggle Cats Dogs dataset; reached 98.6% validation accuracy after a single epoch using Cyclic Learning Rate scheduling and data-augmentation. Built a real-time webcam demo—OpenCV streams video frames to a TorchVision preprocessing pipeline and overlays live 'cat'/'dog' predictions at 30 FPS. Packaged reproducible workflows in Jupyter notebooks (catvsdogResnet18.ipynb for training, runcamera.ipynb for live testing) and exported model weights to model.pt for effortless reuse. Published installation script (requirements.txt) enabling one-command setup with torch, torchvision, opencv-python, Pillow, NumPy, Matplotlib, and tqdm.",
      technologies: [
        "Python",
        "PyTorch",
        "CNN",
        "TorchVision",
        "OpenCV",
        "CUDA",
        "Jupyter",
      ],
      dateRange: "June 2025",
      github: "https://github.com/amannindra/CatvsDog_pytorch",
    },

    {
      title: "EdTok Learning Platform",
      description:
        "Created the frontend of EdTok, a platform designed to transform student learning through short-form content and quizzes. EdTok allows teachers to upload educational videos organized by classes, subjects, and chapters, followed by quizzes to test student understanding.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      // link: "https://edtok.example.com",
      // github: "https://github.com/amannindra/edtok",
    },
    {
      title: "AI Chatbot",
      description:
        "Building a free website where users can interact with multiple LLMs, including GPT-4, Claude 3.0, Meta AI, and Gemini. User data is securely stored via Firebase. The platform is funded through Google Ads.",
      technologies: ["React", "Firebase", "LLM Models", "Node.js"],
      // link: "https://aichatbot.example.com",
      // github: "https://github.com/amannindra/ai-chatbot",
    },
  ],

  // Education
  education: {
    degree: "Bachelor of Science",
    major: "Computer Science and Engineering",
    school: "University of California, Merced",
    graduationYear: "2028",
    highSchool: {
      name: "Milpitas High School",
      graduationYear: "2024",
    },
  },
};
