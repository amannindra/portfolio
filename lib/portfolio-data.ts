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
    "I am a Computer Science and Engineering major at UC Merced, specializing in full-stack development, mobile development, and machine learning. Currently serving as a Software Engineering Intern at Arrowz, a mental health startup, where I develop cross-platform mobile applications using Flutter/Dart. As a Project Manager for both the Machine Learning Club and Data Science Society Club, I lead teams building AI-powered tools like Code Companion and Research Copilot. I'm passionate about building AI-powered applications and mobile solutions that solve real-world problems, from containerized web apps with GPT-4 integration to real-time computer vision systems. My experience spans modern web technologies like React and TypeScript, mobile development with Flutter, backend systems with Python and Flask, and cutting-edge machine learning frameworks including PyTorch and OpenCV. I excel at creating innovative solutions that bridge AI research with practical, user-friendly applications, while maintaining focus on performance optimization and seamless user experiences.",

  // Experience
  experience: [
    {
      company: "Arrowz (Mental Health Startup)",
      position: "Software Engineering Intern • Remote",
      duration: "Sep 2025 – Present",
      description:
        "Shipped cross-platform Flutter/Dart app for emotion tracking across 25+ screens; modular UI components cut duplication 40%. Standardized state management and responsive layouts; improved build stability and developer velocity across the team.",
      skills: [
        "Flutter",
        "Dart",
        "Cross-platform Development",
        "State Management",
        "UI/UX Design",
      ],
    },
    {
      company: "UC Merced Machine Learning Club",
      position: "Project Manager, Code Agent • Merced, CA",
      duration: "Nov 2025 – Present",
      description:
        "Scoped and led Code Companion, an AI-powered Python debugging tool that ingests GitHub repos, runs flake8/mypy, and suggests LLM-generated fixes with explanations. Defined MVP, metrics, and phased roadmap for Next.js + FastAPI + pgvector stack, coordinating backend and frontend milestones with the team.",
      skills: [
        "Project Management",
        "Python",
        "LLMs",
        "Next.js",
        "FastAPI",
        "Team Leadership",
      ],
    },
    {
      company: "UC Merced Data Science Society Club",
      position: "Project Manager, Research Copilot • Merced, CA",
      duration: "Nov 2025 – Present",
      description:
        "Managed a RAG-based research assistant that ingests PDFs/arXiv links, runs hybrid BM25 + embedding search, and answers questions with citation-grounded quotes. Designed system architecture (Next.js, FastAPI, Postgres + pgvector) and evaluation plan focusing on answer quality, latency, and pilot user feedback.",
      skills: [
        "RAG",
        "System Architecture",
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "pgvector",
      ],
    },
  ],

  // Skills
  skills: {
    languages: [
      "Python",
      "JavaScript",
      "TypeScript",
      "C++",
      "Dart",
      "HTML/CSS",
    ],
    mlAi: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "OpenCV",
      "NumPy",
      "pandas",
      "YOLO (Ultralytics)",
      "Transformers (Hugging Face)",
    ],
    frameworksCloud: [
      "React",
      "Next.js",
      "React Native",
      "Flask",
      "Firebase",
      "AWS",
      "Vercel",
    ],
    tools: ["Git", "GitHub", "Google Cloud", "Docker"], // Keeping tools as it might be useful, though not explicitly in new resume list
    certifications: [
      "Computer Vision and Image Processing",
      "Supervised Machine Learning: Regression and Classification",
      "JSE – Certified Entry-Level JavaScript Programmer",
    ],
    leadership: [
      "Project Manager for Machine Learning Club",
      "Project Manager for Data Science Society Club",
    ],
  },

  // Projects
  projects: [
    {
      title: "ASL Voice Assistant",
      description:
        "A–Z ASL recognition with emotion-aware voice chat; ONNX Runtime enables client-side inference at 90 FPS. Trained CNN in PyTorch with augmentation and mixed precision; exported to ONNX with dynamic axes. Built Next.js UI (App Router, Tailwind) with accessible components and graceful fallbacks for camera/mic permissions.",
      technologies: [
        "Next.js",
        "PyTorch",
        "ONNX",
        "Hume AI",
        "Vapi",
        "Tailwind CSS",
      ],
      period: "June 2025",
    },
    {
      title: "Real-time Image Classifier",
      description:
        "Fine-tuned ResNet-18 on Cats vs Dogs to 98.6% validation accuracy; used cyclic LR and label smoothing. 30 FPS webcam inference via OpenCV pipeline (resize/normalize, softmax thresholding, class overlay). Reproducible training scripts and Jupyter notebooks; automated environment setup with requirements.txt.",
      technologies: ["Python", "PyTorch", "ResNet-18", "OpenCV", "Jupyter"],
      period: "June - August 2025",
      github: "https://github.com/amannindra/CatvsDog_pytorch",
    },
    {
      title: "AI-Resume Analyzer",
      description:
        "Containerized full-stack app that ingests PDFs and returns structured, role-aligned feedback with job matches. RESTful Flask service: PDF parsing via pdfminer, input validation, rate limiting, and CORS-secured endpoints. Realtime updates to Firebase; typed React UI that highlights skills gaps and exports notes to Markdown.",
      technologies: [
        "Python",
        "Flask",
        "React",
        "TypeScript",
        "Firebase",
        "OpenAI API",
      ],
      period: "June - July 2025",
      // github: "https://github.com/amannindra/AI-Resume",
    },
    {
      title: "UCM Trip AI Agent",
      description:
        "Natural-language trip planning using Gemini + Maps Grounding; parses intent and constraints to build candidate routes. Dynamic stop matching across 7+ routes using Haversine distance and snapping to road geometry for realism. Secure API routes for geocoding and distance matrix; deployed on Vercel with interactive map and ETA breakdowns.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Google Gemini",
        "Google Maps",
        "Vercel",
      ],
      period: "Nov 2025",
    },
  ],

  // Education
  education: {
    degree: "B.S. Computer Science & Engineering",
    major: "Computer Science and Engineering",
    school: "University of California, Merced",
    graduationYear: "Expected May 2027",
    highSchool: {
      name: "Milpitas High School",
      graduationYear: "2024",
    },
  },
};
