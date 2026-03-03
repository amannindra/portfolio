export const portfolioData = {
  // Personal Information
  personal: {
    name: "Aman Nindra",
    email: "amannindra@gmail.com",
    // phone: "+1 925-605-9936",
    // location: "1431 N Hillview Dr, Milpitas, CA 94035",
    profileImage: "/main.jpeg", // Replace with your actual profile image
    linkedinUrl: "https://www.linkedin.com/in/aman-nindra-1b3634270/",
    githubUrl: "https://github.com/amannindra",
  },

  // About Section
  about:
    "I'm a CS & Engineering student at UC Merced building things at the intersection of AI and real-world hardware. Right now I'm deep in two projects: a self-hosted distributed AI training platform that lets anyone upload datasets and train models through a web UI, and an autonomous electric bicycle running ROS 2 on a Jetson Nano Super. I lead project teams at the ML Club and Data Science Society, where we're shipping an AI debugging tool and a RAG-based research assistant. I care about systems that actually work — GPU scheduling, edge inference, low-latency voice — not just demos.",
  currentFocus: [
    {
      label: "Distributed AI Training",
      detail: "Self-hosted platform with GPU-aware Kubernetes scheduling",
    },
    {
      label: "Autonomous Robotics",
      detail: "ROS 2 perception & control on Jetson Nano Super",
    },
    {
      label: "AI Club Projects",
      detail: "Leading Code Companion & Research Copilot teams",
    },
  ],

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
      "Docker",
    ],
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
      title: "Self-Hosted Distributed AI Training Platform",
      description:
        "Designing and building a self-hosted AI training platform to enable users worldwide to upload datasets (S3-style), configure hyperparameters, and train models through a web interface. Implementing GPU-aware job scheduling via Kubernetes to dynamically allocate workloads across multiple Linux machines based on real-time VRAM and compute availability. Deploying a Raspberry Pi as a lightweight control node to host the site, manage job queues, and persist datasets to attached external storage.",
      technologies: ["PyTorch", "Kubernetes", "FastAPI", "React.js", "Linux"],
      period: "Feb 2026 – Present",
    },
    {
      title: "Autonomous Bicycle",
      description:
        "Developing an autonomous electric bicycle capable of navigating real-world terrain without human control. Integrating ROS 2 on a Jetson Nano Super (edge AI GPU) for perception, localization, and control.",
      technologies: ["ROS 2", "Python", "Jetson Nano"],
      period: "Feb 2026 – Present",
    },
    {
      title: "SafeCall: Emergency Dispatch Simulator",
      description:
        "Real-time voice simulator for emergency dispatch training powered by the ElevenLabs Conversational AI API over low-latency WebRTC. Dynamic evaluation engine parses live STT transcripts to score dispatchers across 5 critical criteria and compute a final performance grade. Integrated @vis.gl/react-google-maps for an interactive location-guessing system using Haversine distance scoring.",
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "WebRTC",
        "ElevenLabs API",
      ],
      period: "Mar 2026",
      github: "https://github.com/amannindra/Safe-call",
    },
    {
      title: "AI Emotion Intelligence Engine",
      description:
        "Fine-tuned BERT-base for 28-class multi-label emotion detection; achieved Macro F1: 0.64–0.70 and Jaccard (samples): 0.59–0.67. Built per-emotion threshold calibration (0.01–0.99 grid search per label), replacing a single global cutoff and improving minority-emotion performance. Benchmarked against GoEmotions baselines (Macro F1 ~0.49) and achieved Macro F1 ~0.64, Precision ~0.52, and Recall ~0.84 in 15 epochs.",
      technologies: [
        "PyTorch",
        "Transformers",
        "Scikit-learn",
        "AWS SageMaker",
      ],
      period: "Jan 2026",
      github: "https://github.com/amannindra/GoEmotions-pytorch",
    },
    {
      title: "Wildlife Camera Trap Classification",
      description:
        "Achieved Top 4 ranking (log loss: 0.6695) using EVA-Large (300M parameters) Vision Transformer on 16.5K camera trap images across 8 species. Engineered a production-grade training pipeline with DistributedDataParallel (DDP) across 4 Tesla V100 GPUs on AWS SageMaker with mixed-precision training, gradient clipping, and class-weighted loss. Optimized generalization to a -0.64% train-val gap (91.27% val accuracy); outperformed baseline ResNet18 by 3.1%.",
      technologies: ["PyTorch", "Vision Transformers", "AWS SageMaker"],
      period: "Jan 2026",
      github: "https://github.com/amannindra/DSS-Image-Classification",
    },
    {
      title: "ASL Voice Assistant",
      description:
        "A–Z ASL recognition with emotion-aware voice chat; ONNX Runtime enables client-side inference at 90 FPS. Trained CNN in PyTorch with augmentation and mixed precision; exported to ONNX with dynamic axes. Built Next.js UI (App Router, Tailwind) with accessible components and graceful fallbacks for camera and mic permissions.",
      technologies: ["Next.js", "PyTorch", "ONNX", "Hume AI", "Vapi"],
      period: "June 2025",
      github: "https://github.com/Shhreya-Anand/Berkeley25",
    },
    {
      title: "AI-Resume Analyzer",
      description:
        "Containerized full-stack app that ingests PDFs and returns resume recommendations, job matches, and a personalized dashboard to manage saved listings. Engineered a Firebase Realtime Database caching layer for job queries, reducing redundant Apify API calls and improving frontend response times. Designed a daily background cron scheduler (APScheduler) with MD5 signature hashing to auto-refresh listings and prevent duplicate database entries.",
      technologies: [
        "Python",
        "Flask",
        "React.js",
        "TypeScript",
        "AWS",
        "OpenAI API",
      ],
      period: "June - July 2025",
      github: "https://github.com/amannindra/ML-Resume",
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
