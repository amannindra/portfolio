export const portfolioData = {
  // Personal Information
  personal: {
    name: "Aman Nindra",
    email: "amannindra@gmail.com",
    profileImage: "/main.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/aman-nindra-1b3634270/",
    githubUrl: "https://github.com/amannindra",
  },

  // Hero / left panel
  hero: {
    role: "ML Systems • Robotics • AI Infrastructure",
    summary:
      "Computer Science & Engineering student at UC Merced building autonomous robotics, computer vision, and shared GPU training systems.",
  },

  // Resume — change the PDF here (file must be in /public)
  resume: {
    pdfPath: "/Aman_Resume_full.pdf",
  },

  // About Section
  about: `I’m Aman Nindra, a Computer Science & Engineering student at UC Merced. I’m interested in building machine learning systems that do something in the real world, not just models that run in a notebook.

My current work is focused on two systems: an autonomous bicycle and a self-hosted distributed AI training platform. The autonomous bicycle project combines ROS 2, Jetson edge inference, computer vision, road/lane segmentation, and steering control. The training platform focuses on shared GPU workloads, job queues, VRAM-aware scheduling, and multi-user training isolation.

I like the engineering side of machine learning: how models are trained, deployed, monitored, optimized, and connected to real products or hardware. For me, the most interesting problems are usually not just “which model should I use?” but “how do I make this system reliable, fast, and usable?”

At UC Merced, I manage AI projects through the Machine Learning Club and Data Science Society. I’ve helped lead Code Companion, an AI-powered Python debugging tool, and Research Copilot, a RAG-based assistant for searching papers and answering questions with citations.

My project work spans computer vision, NLP, robotics, and full-stack AI applications. I’ve trained Vision Transformers for wildlife image classification, fine-tuned BERT for multi-label emotion detection, built an ASL voice assistant, and developed AI products that connect models with real user interfaces.

I’m looking for ML engineering, robotics, computer vision, and AI infrastructure opportunities. I enjoy learning from hard technical problems and working with teams that care about building systems that actually work.`,
  currentFocus: [
    {
      label: "Autonomous Robotics",
      detail:
        "Building a low-speed autonomous bicycle stack using ROS 2, Jetson edge inference, road/lane segmentation, and steering control.",
    },
    {
      label: "Distributed AI Training",
      detail:
        "Designing a self-hosted platform for shared GPU training jobs, queue management, job isolation, and VRAM-aware scheduling.",
    },
    {
      label: "Applied ML Systems",
      detail:
        "Working on computer vision, NLP, and infrastructure projects using PyTorch, FastAPI, AWS, and Linux-based deployment workflows.",
    },
  ],

  // Contact Section
  contactDescription:
    "I'm looking for ML engineering, robotics, computer vision, and AI infrastructure internships or research collaborations.",

  // Experience
  experience: [
    {
      company: "Arrowz (Mental Health Startup)",
      position: "Software Engineering Intern • Remote",
      duration: "Sep 2025 – Present",
      description:
        "Shipped a cross-platform Flutter/Dart app for emotion tracking across 25+ screens. Built modular UI components, standardized state management, improved responsive layouts, and reduced duplicated UI code by about 40%.",
      skills: ["Flutter", "Dart", "State Management", "UI/UX Design"],
    },
    {
      company: "UC Merced Machine Learning Club",
      position: "Project Manager, Code Agent • Merced, CA",
      duration: "Nov 2025 – Present",
      description:
        "Scoped and led Code Companion, an AI-powered Python debugging tool that ingests GitHub repositories, runs flake8/mypy checks, and suggests LLM-generated fixes with explanations. Defined MVP scope, metrics, and the roadmap for a Next.js, FastAPI, and pgvector stack.",
      skills: ["Project Management", "Python", "LLMs", "Next.js", "FastAPI"],
    },
    {
      company: "UC Merced Data Science Society Club",
      position: "Project Manager, Research Copilot • Merced, CA",
      duration: "Nov 2025 – Present",
      description:
        "Managed Research Copilot, a RAG-based assistant that ingests PDFs and arXiv links, retrieves relevant passages with hybrid search, and answers questions with citation-grounded responses. Designed the system architecture and evaluation plan around answer quality, latency, and pilot feedback.",
      skills: [
        "RAG",
        "System Architecture",
        "FastAPI",
        "PostgreSQL",
        "pgvector",
      ],
    },
  ],

  // Skills — grouped by capability
  skills: {
    mlSystems: [
      "PyTorch",
      "Transformers",
      "OpenCV",
      "ONNX Runtime",
      "scikit-learn",
      "NumPy",
      "pandas",
    ],
    roboticsVision: [
      "ROS 2",
      "Jetson",
      "Computer Vision",
      "Lane / Road Segmentation",
      "YOLO (Ultralytics)",
    ],
    backendInfra: [
      "FastAPI",
      "Flask",
      "Docker",
      "Kubernetes",
      "Linux",
      "AWS",
      "Firebase",
    ],
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter"],
    languages: ["Python", "TypeScript", "JavaScript", "C++", "Dart"],
  },

  // Featured Projects — shown prominently at top of projects section
  featuredProjects: [
    {
      title: "Autonomous Bicycle",
      tagline:
        "Embedded lane-keeping and steer-by-wire platform for low-speed self-driving — UC Merced Honors Program research.",
      description:
        "Building a street-legal autonomous bicycle as a low-speed self-driving research platform. A Jetson Nano Super runs YOLOv8 road/lane segmentation to compute a drivable area and target heading, which an ESP32-S3 control hub verifies against IMU data and executes through a custom steer-by-wire actuator and 250W motor. Hard-wired brake relays act as a failsafe that instantly returns control to the rider.",
      technologies: [
        "ROS 2",
        "Python",
        "Jetson",
        "YOLOv8",
        "ESP32-S3",
        "Computer Vision",
      ],
      period: "Feb 2026 – Present",
      github: "https://github.com/Duck1405/Autonomous-Bicycle" as string | null,
      link: null as string | null,
      images: [
        {
          src: "/projects/autonomous-bicycle/bike-poster.jpg",
          alt: "Autonomous bicycle prototype with Jetson Nano Super and steer-by-wire hardware in front of the UC Merced Honors Program research poster",
          caption:
            "The bike and research poster at the UC Merced Honors Program showcase",
        },
        {
          src: "/projects/autonomous-bicycle/team-presentation.jpg",
          alt: "The team presenting the autonomous bicycle at the UC Merced research poster session",
          caption: "Presenting at the research showcase",
        },
      ] as Array<{ src: string; alt: string; caption?: string }>,
      caseStudy: null as {
        problem: string;
        architecture: string;
        pipeline: string;
        metrics: string;
        improvements: string;
      } | null,
    },
    {
      title: "Self-Hosted Distributed AI Training Platform",
      tagline:
        "Web platform for launching PyTorch jobs across shared GPU machines.",
      description:
        "Building a web platform for launching PyTorch training jobs on shared GPU machines. The system uses FastAPI, React, Kubernetes, and GPU-aware scheduling to route workloads based on available VRAM and compute. Current focus: job isolation, queue management, logs, and failure handling for multi-user training.",
      technologies: ["PyTorch", "Kubernetes", "FastAPI", "React", "Linux"],
      period: "Feb 2026 – Present",
      github: null as string | null,
      link: null as string | null,
      images: [] as Array<{ src: string; alt: string; caption?: string }>,
      caseStudy: null as {
        problem: string;
        architecture: string;
        pipeline: string;
        metrics: string;
        improvements: string;
      } | null,
    },
    {
      title: "Wildlife Camera Trap Classification",
      tagline: "Top 4 finish — Vision Transformer on 16.5K camera-trap images.",
      description:
        "Ranked Top 4 in a wildlife image classification competition across 8 species and 16.5K camera-trap images. Trained Vision Transformer models with mixed precision, class-weighted loss, and DistributedDataParallel on AWS SageMaker. Achieved about 91% validation accuracy and outperformed a ResNet18 baseline.",
      technologies: ["PyTorch", "Vision Transformers", "DDP", "AWS SageMaker"],
      period: "Jan 2026",
      github: "https://github.com/amannindra/DSS-Image-Classification",
      link: "https://www.drivendata.org/competitions/87/competition-image-classification-wildlife-conservation/leaderboard/" as string | null,
      images: [
        {
          src: "/projects/wildlife-classification/leaderboard.png",
          alt: "Competition leaderboard showing amannindra ranked #4 with a log loss of 0.6695",
          caption: "Final leaderboard — ranked #4 with 3 submissions",
        },
      ] as Array<{ src: string; alt: string; caption?: string }>,
      caseStudy: null as {
        problem: string;
        architecture: string;
        pipeline: string;
        metrics: string;
        improvements: string;
      } | null,
    },
    {
      title: "AI Emotion Intelligence Engine",
      tagline:
        "BERT fine-tuned for 28-label emotion classification on GoEmotions.",
      description:
        "Fine-tuned BERT-base for 28-label emotion classification on GoEmotions. Improved multi-label performance using per-emotion threshold calibration instead of a single global cutoff. Achieved macro F1 around 0.64–0.70, with stronger recall on minority emotion classes.",
      technologies: [
        "PyTorch",
        "Transformers",
        "scikit-learn",
        "AWS SageMaker",
      ],
      period: "Jan 2026",
      github: "https://github.com/amannindra/GoEmotions-pytorch",
      link: null as string | null,
      images: [] as Array<{ src: string; alt: string; caption?: string }>,
      caseStudy: null as {
        problem: string;
        architecture: string;
        pipeline: string;
        metrics: string;
        improvements: string;
      } | null,
    },
  ],

  // Other Projects
  projects: [
    {
      title: "SafeCall: Emergency Dispatch Simulator",
      tagline: "Real-time voice simulator for emergency dispatch training.",
      description:
        "Built a real-time voice simulator for emergency dispatch training using the ElevenLabs Conversational AI API over low-latency WebRTC. Added live transcript scoring across critical dispatcher criteria and an interactive location-guessing system using Google Maps.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "WebRTC",
        "ElevenLabs API",
      ],
      period: "Mar 2026",
      github: "https://github.com/amannindra/Safe-call",
      link: null as string | null,
      images: [] as Array<{ src: string; alt: string; caption?: string }>,
    },
    {
      title: "ASL Voice Assistant",
      tagline: "A–Z ASL recognition with emotion-aware voice chat.",
      description:
        "Built an A–Z ASL recognition and emotion-aware voice assistant. Trained a CNN in PyTorch, exported it to ONNX, and ran client-side inference through a Next.js interface with camera and microphone fallbacks.",
      technologies: ["Next.js", "PyTorch", "ONNX", "Hume AI", "Vapi"],
      period: "Jun 2025",
      github: "https://github.com/Shhreya-Anand/Berkeley25",
      link: null as string | null,
      images: [] as Array<{ src: string; alt: string; caption?: string }>,
    },
    {
      title: "AI-Resume Analyzer",
      tagline:
        "Full-stack resume analysis with job matching and Firebase caching.",
      description:
        "Built a full-stack resume analysis app that ingests PDFs, recommends improvements, matches jobs, and manages saved listings. Added Firebase caching and scheduled background refreshes to reduce redundant API calls and prevent duplicate database entries.",
      technologies: [
        "Python",
        "Flask",
        "React",
        "TypeScript",
        "Firebase",
        "OpenAI API",
      ],
      period: "Jun – Jul 2025",
      github: "https://github.com/amannindra/ML-Resume",
      link: null as string | null,
      images: [] as Array<{ src: string; alt: string; caption?: string }>,
    },
  ],

  // Education
  education: {
    degree: "B.S. Computer Science & Engineering",
    school: "University of California, Merced",
    graduationYear: "Expected May 2027",
  },
};
