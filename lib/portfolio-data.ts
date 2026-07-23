export const autonomousBicycleResearch = {
  title: "Autonomous Bicycle",
  subtitle: "Embedded lane-keeping and steer-by-wire research platform",
  institution: "University of California, Merced",
  role: "Undergraduate Researcher",
  period: "May 2026 – Present",
  href: "/projects/autonomous-bicycle",
  // Keep the public repository link disabled until tracked credentials are
  // rotated and removed from Git history.
  github: null as string | null,
  summary:
    "An embedded perception and steering research prototype for low-speed autonomous bicycle navigation, combining lane and road understanding, object detection, depth estimation, and Stanley-style steering guidance in an offline video pipeline.",
  description: [
    "Built a real-time ego-lane detection pipeline for autonomous vehicles using LaneATT trained on the CULane dataset, achieving 0.79 F1 (0.84 precision, 0.75 recall) on the validation set, trained on a SLURM-managed NVIDIA H100 cluster.",
    "Engineered a COCO preprocessing pipeline distilling 80 classes down to the 4 relevant to driving (person, vehicle, traffic light, stop sign) to train a YOLOv11 obstacle/traffic-control detector.",
    "Integrated lane detection and object detection into a single video-inference script with frame pre/post-processing, producing annotated driving footage for qualitative model evaluation.",
    "Applied this perception stack to a street-legal autonomous bicycle research platform: a Jetson Nano Super runs the lane/object detection models to compute a drivable area and target heading, which an ESP32-S3 control hub verifies against IMU data and executes through a custom steer-by-wire actuator and 250W motor, with hard-wired brake relays as a rider-override failsafe.",
  ],
  technologies: [
    "PyTorch",
    "LaneATT",
    "YOLOv11",
    "SLURM",
    "ROS 2",
    "Jetson Nano Super",
    "ESP32-S3",
    "Computer Vision",
  ],
  highlights: [
    { value: "0.79", label: "CULane validation F1" },
    { value: "4", label: "Driving-relevant object classes" },
    { value: "250W", label: "Street-legal drive motor" },
  ],
  measuredResults: [
    { value: "78.52%", label: "LaneATT best validation F1" },
    { value: "73.23%", label: "YOLOv11 mAP@50" },
    { value: "83.88%", label: "HybridNets road IoU" },
  ],
  researchTechnologies: [
    "LaneATT",
    "YOLOv11",
    "HybridNets",
    "Depth Anything V2",
    "PyTorch",
    "ONNX Runtime",
    "TensorRT",
    "ROS 2",
  ],
  systemFlow: [
    {
      label: "01",
      title: "Vision & perception",
      detail:
        "LaneATT and HybridNets identify lane and road structure while YOLOv11 detects four driving-relevant object classes.",
    },
    {
      label: "02",
      title: "Path extraction",
      detail:
        "Temporal confidence, ego-lane pairing, missing-edge recovery, and road-center fitting produce a stable path estimate.",
    },
    {
      label: "03",
      title: "Steering guidance",
      detail:
        "Path-heading and cross-track errors feed a Stanley-style controller to produce an offline steering estimate.",
    },
    {
      label: "04",
      title: "Deployment research",
      detail:
        "ONNX Runtime and TensorRT tooling target Jetson-class inference, with ROS 2 and Gazebo used for path-following experiments.",
    },
  ],
  images: [
    {
      src: "/projects/autonomous-bicycle/bike-poster.jpg",
      alt: "Autonomous bicycle prototype with exposed perception and control hardware displayed in front of its research poster",
      caption:
        "Figure 1. The integrated autonomous bicycle prototype presented with its embedded lane-keeping research poster.",
    },
    {
      src: "/projects/autonomous-bicycle/team-presentation.jpg",
      alt: "Four people standing with the autonomous bicycle at a University of California, Merced poster presentation",
      caption:
        "Figure 2. The autonomous bicycle at the UC Merced project presentation.",
    },
  ],
  systemEvidence: {
    perception: {
      src: "/projects/autonomous-bicycle/perception-demo.mp4",
      poster: "/projects/autonomous-bicycle/bike_image1.jpg",
      alt: "Roadway inference output showing lane boundaries, detected vehicles, target heading, steering angle, lateral offset, and confidence",
      caption:
        "Lane and object inference with live target-heading, steering, lateral-offset, and confidence overlays.",
    },
    video: {
      src: "/projects/autonomous-bicycle/depth-demo.mp4",
      poster: "/projects/autonomous-bicycle/depth-poster.jpg",
      caption:
        "Monocular depth-estimation output separates nearby roadway structure and vehicles from the distant scene.",
    },
  },
};

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
      "Data Science student at UCSD building autonomous vehicle perception, computer vision, and shared GPU training systems.",
  },

  // Resume — change the PDF here (file must be in /public)
  resume: {
    pdfPath: "/Aman_Nindra_UCSD.pdf",
  },

  // About Section — wrap any phrase in **double asterisks** to make it bold.
  // Separate paragraphs with a blank line.
  aboutHeadings: {
    about: "About",
    currentFocus: "Currently Working On",
    education: "Education",
  },
  about: `I'm Aman Nindra. Data Science, UCSD. I build machine learning systems and try to make them survive outside the notebook they were trained in.

Right now that's two things. A **lane detection model for autonomous vehicles** that hits 0.79 F1 on CULane, and a **Kubernetes platform** that lets 40+ professors and 50+ PhD researchers run their own training jobs without fighting over a GPU. I also spent last fall rebuilding a mental health startup's Flutter app, because their 24,000-line codebase had six different versions of the same onboarding screen.

I care more about whether a system holds up than whether the model is state of the art. Beyond that, I've trained Vision Transformers for wildlife image classification, fine-tuned BERT for multi-label emotion detection, and built an ASL voice assistant, mostly because I like seeing a model connected to something a person can actually use.
`,
  currentFocus: [
    {
      label: "Autonomous Vehicle Perception",
      detail:
        "Building real-time ego-lane detection (LaneATT/CULane) and YOLOv11-based obstacle detection for autonomous vehicles, trained on a SLURM-managed H100 cluster.",
    },
    {
      label: "Shared ML Training Infrastructure",
      detail:
        "Architecting a 3-node Kubernetes ML training platform with Terraform-provisioned workspaces for 40+ professors and 50+ PhD researchers.",
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
  contactDescription:"",
  // Experience
  experience: [
    {
      company: "UCM",
      position: "Undergraduate Researcher • Merced, CA",
      duration: autonomousBicycleResearch.period,
      description: autonomousBicycleResearch.description,
      skills: autonomousBicycleResearch.technologies,
      github: autonomousBicycleResearch.github as string | null,
      detailHref: autonomousBicycleResearch.href as string | null,
      link: null as string | null,
      images: [
        {
          src: "/projects/autonomous-bicycle/bike-with-ross.jpg",
          alt: "Autonomous bicycle prototype with Jetson Nano Super and steer-by-wire hardware in front of the UCM Honors Program research poster",
          caption:
            "The bike and research poster at the UCM Honors Program showcase",
        },
      ] as Array<{ src: string; alt: string; caption?: string }>,
    },
    {
      company: "Valley Institute for Sustainability, Technology & Agriculture",
      position: "Software Engineering Intern",
      duration: "May 2026 – Present",
      description: [
        "Architected a machine learning training platform on a 3-node Kubernetes cluster, including a control-plane node managing orchestration, PostgreSQL user data, and 5TB of persistent storage, plus 2 GPU worker nodes.",
        "Enabled 40+ professors and 50+ PhD researchers to train computer vision and NLP models on the platform.",
        "Built Terraform workspace templates for custom PyTorch/TensorFlow/Conda environments with configurable CPU, RAM, and up to 2x NVIDIA A30 GPUs per job.",
        "Each configuration provisions a dedicated dev environment via browser-based code-server or the Coder VS Code extension.",
      ],
      skills: ["Kubernetes", "Terraform", "PostgreSQL", "AWS", "Linux"],
    },
    {
      company: "Arrowz (Mental Health Startup)",
      position: "Software Engineering Intern • Remote",
      duration: "Aug 2025 – Jan 2026",
      description: [
        "Restructured a 24,000-line offline-first Flutter/Dart codebase into feature-based modules, eliminating duplicated legacy screens and consolidating navigation into a single reusable drawer shared by 6 core screens.",
        "Built the app's complete first-run experience: a 10-step onboarding questionnaire with Isar local persistence, Firebase-authenticated routing, and an interactive ShowcaseView walkthrough with database-backed progress tracking across 5+ screens.",
        "Shipped a goals-tracking feature end-to-end (Isar data model, Provider state management, home-screen UI) and built 4 custom date-range selector widgets for the emotion-analytics dashboard.",
      ],
      skills: ["Flutter", "Dart", "Isar", "Firebase", "State Management"],
    },
    {
      company: "UCM Machine Learning Club",
      position: "Project Manager, Code Agent • Merced, CA",
      duration: "Nov 2025 – Present",
      description: [
        "Scoped and led Code Companion, an AI-powered Python debugging tool that ingests GitHub repositories, runs flake8/mypy checks, and suggests LLM-generated fixes with explanations.",
        "Defined MVP scope, metrics, and the roadmap for a Next.js, FastAPI, and pgvector stack.",
      ],
      skills: ["Project Management", "Python", "LLMs", "Next.js", "FastAPI"],
    },
    {
      company: "UCM Data Science Society Club",
      position: "Project Manager, Research Copilot • Merced, CA",
      duration: "Nov 2025 – Present",
      description: [
        "Managed Research Copilot, a RAG-based assistant that ingests PDFs and arXiv links, retrieves relevant passages with hybrid search, and answers questions with citation-grounded responses.",
        "Designed the system architecture and evaluation plan around answer quality, latency, and pilot feedback.",
      ],
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
      "Terraform",
      "SLURM",
      "PostgreSQL",
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
      title: "Wildlife Camera Trap Classification",
      tagline: "Top 4 finish — Vision Transformer on 16.5K camera-trap images.",
      description: [
        "Ranked Top 4 in a wildlife image classification competition across 8 species and 16.5K camera-trap images.",
        "Trained Vision Transformer models with mixed precision, class-weighted loss, and DistributedDataParallel on AWS SageMaker.",
        "Achieved about 91% validation accuracy and outperformed a ResNet18 baseline.",
      ],
      technologies: ["PyTorch", "Vision Transformers", "DDP", "AWS SageMaker"],
      period: "Jan 2026",
      github: "https://github.com/amannindra/DSS-Image-Classification",
      link: "https://www.drivendata.org/competitions/87/competition-image-classification-wildlife-conservation/leaderboard/" as
        | string
        | null,
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
      title: "Self-Hosted Distributed AI Training Platform",
      tagline:
        "Web platform for launching PyTorch jobs across shared GPU machines.",
      description: [
        "Building a web platform for launching PyTorch training jobs on shared GPU machines.",
        "The system uses FastAPI, React, Kubernetes, and GPU-aware scheduling to route workloads based on available VRAM and compute.",
        "Current focus: job isolation, queue management, logs, and failure handling for multi-user training.",
      ],
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
      title: "AI Emotion Intelligence Engine",
      tagline:
        "BERT fine-tuned for 28-label emotion classification on GoEmotions.",
      description: [
        "Fine-tuned BERT-base for 28-label emotion classification on GoEmotions.",
        "Improved multi-label performance using per-emotion threshold calibration instead of a single global cutoff.",
        "Achieved macro F1 around 0.64–0.70, with stronger recall on minority emotion classes.",
      ],
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
      description: [
        "Built a real-time voice simulator for emergency dispatch training using the ElevenLabs Conversational AI API over low-latency WebRTC.",
        "Added live transcript scoring across critical dispatcher criteria and an interactive location-guessing system using Google Maps.",
      ],
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
      description: [
        "Built an A–Z ASL recognition and emotion-aware voice assistant.",
        "Trained a CNN in PyTorch, exported it to ONNX, and ran client-side inference through a Next.js interface with camera and microphone fallbacks.",
      ],
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
      description: [
        "Built a full-stack resume analysis app that ingests PDFs, recommends improvements, matches jobs, and manages saved listings.",
        "Added Firebase caching and scheduled background refreshes to reduce redundant API calls and prevent duplicate database entries.",
      ],
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
    degree: "B.S. Data Science",
    school: "University of California, San Diego",
    graduationYear: "Expected Spring 2028",
  },
};
