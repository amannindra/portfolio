// Content for the Pathfinder research page. Every image or video is a
// `MediaSlot`: until `src` is set, the page renders a dashed placeholder that
// shows `placeholder` (what to add) and `source` (where it lives in the
// research repository). Add the file under /public and set `src` to publish it.

export type MediaSlot = {
  kind: "video" | "image";
  /** Caption shown to visitors under the media. */
  caption: string;
  /** Description of the asset to add; shown only while `src` is unset. */
  placeholder: string;
  /** Location of the source asset in the research repository. */
  source?: string;
  src?: string;
  /** Still frame shown before a video plays. */
  poster?: string;
  /** YouTube URL or video ID; when set, videos embed YouTube instead of a local file. */
  youtube?: string;
};

export type StatusKind = "evaluated" | "partial" | "exploratory" | "reference";

export type Status = { label: string; kind: StatusKind };

export type DataTable = {
  caption?: string;
  columns: string[];
  rows: string[][];
};

export type Experiment = {
  id: string;
  title: string;
  status: Status;
  summary: string;
  why: string;
  implemented: string[];
  media: MediaSlot[];
  evidence?: DataTable;
  wentWrong: string;
  cause: string;
  learned: string;
  details?: { heading: string; items: string[] }[];
};

export type ExperimentGroup = {
  id: string;
  title: string;
  intro: string;
  experiments: Experiment[];
};

export const page = {
  title: "Pathfinder: Autonomous Vehicle",
  subtitle:
    "Investigating how to help an autonomous bicycle reliably stay in its lane using camera-based perception and real-time processing on an NVIDIA Jetson Orin Nano Super.",
  institution: "University of California, Merced",
  lastUpdated: "September 26, 2026",
  /** Set once the poster PDF is located, e.g. "/projects/autonomous-bicycle/poster.pdf". */
  posterPdf: null as string | null,
  /** Date the poster was presented, e.g. "May 2026". */
  posterPresented: null as string | null,
  /** Public repository URL; kept unset until the repository is ready to share. */
  codeUrl: null as string | null,
};

export const team = [
  {
    name: "Aman Nindra",
    contribution:
      "Computer vision, dataset preparation, model training, inference optimization, and perception integration.",
  },
  {
    name: "Rayan",
    contribution:
      "Bicycle robotics and control hardware, including the ESP32-S3 controller, steering feedback, and 250 W motor system.",
  },
];

export const statusNote =
  "This project is unfinished. We have trained lane and object detectors, built TensorRT engines that run on the Jetson, and written ROS 2 perception and visualization nodes. We have not demonstrated reliable, fully integrated lane keeping on the bicycle. Nothing on this page is evidence of safe autonomous operation.";

export const heroMedia: { bicycle: MediaSlot; poster: MediaSlot } = {
  bicycle: {
    kind: "image",
    caption:
      "The Pathfinder bicycle and research poster at a UC Merced presentation.",
    placeholder: "Bicycle and poster photograph.",
    source: "public/projects/autonomous-bicycle/bike-poster.jpg",
    src: "/projects/autonomous-bicycle/bike-poster.jpg",
  },
  poster: {
    kind: "image",
    caption:
      "The UC Merced Honors poster from an earlier stage of the project. Its model and system descriptions predate later experiments documented below.",
    placeholder: "Full-size poster image; no original PDF was found.",
    source: "public/projects/autonomous-bicycle/Poster.png",
    src: "/projects/autonomous-bicycle/Poster.png",
  },
};

export const researchQuestion =
  "How can I build a camera-based perception system that reliably identifies the bicycle’s lane and provides a useful steering target within the Jetson’s real-time compute budget?";

export const researchQuestions = [
  {
    title: "Perception across cameras and roads",
    question:
      "How can lane perception trained on vehicle-camera datasets generalize to a lower bicycle-mounted camera and changing road, lighting, and motion conditions?",
  },
  {
    title: "From markings to the intended lane",
    question:
      "How should a system select the bicycle’s travel corridor when there are multiple markings, a boundary is missing or obscured, or a prediction is ambiguous?",
  },
  {
    title: "Reliable output within the compute budget",
    question:
      "Which combination of model, image processing, and temporal context produces stable, fresh lane geometry while the Jetson runs the rest of the ROS 2 pipeline?",
  },
  {
    title: "Evidence for real-world reliability",
    question:
      "What data, metrics, and failure checks are needed to show that lane predictions are dependable enough to guide the next controlled steering experiment?",
  },
];

export const domainComparison: {
  car: MediaSlot;
  bicycle: MediaSlot;
  caption: string;
} = {
  car: {
    kind: "image",
    caption:
      "CULane training frame with its supplied lane-point annotations drawn on the image.",
    placeholder:
      "One CULane training image with its lane polylines drawn, at the same display size as the bicycle frame.",
    source:
      "CuLaneDataset/driver_37_30frame/05191535_0475.MP4/01235.jpg and .lines.txt",
    src: "/projects/autonomous-bicycle/research/culane-labelled.jpg",
  },
  bicycle: {
    kind: "image",
    caption:
      "Raw frame from the bicycle-mounted camera, before a lane-model overlay.",
    placeholder:
      "One frame from real bicycle footage on a road with visible markings, ideally similar lighting to the CULane frame.",
    source: "LaneATT/jetson_video/bicycle_safe_run_latest.avi, frame 2500",
    src: "/projects/autonomous-bicycle/research/bicycle-road.jpg",
  },
  caption:
    "Visible differences include camera height, pitch, field of view, how much road fills the frame, and marking width after resizing. These are hypotheses for the domain gap; they have not been shown to explain every failure.",
};

export const statusSection = {
  intro:
    "For lane detection, our current model produces a high F1 score (0.79) on the test dataset, but real-world results are less reliable when the camera jitters, its height differs from the training viewpoint, or lane markings are partially faded.",
  videos: [
    {
      kind: "video",
      caption:
        "In this LaneATT example, the model working really good because our model is trained with Data Augmentatios that are suited for low-light data. In addition, the lanes are clearly visible.",
      placeholder: "LaneATT example clip.",
      src: "/projects/autonomous-bicycle/perception-demo.mp4",
      youtube: "https://www.youtube.com/watch?v=hTK0ChvDxII",
    },
    {
      kind: "video",
      caption: "LaneATT on highway video",
      placeholder: "LaneATT on highway video.",
      src: "/projects/autonomous-bicycle/research/highway-LaneATT.mp4",
      youtube: "https://www.youtube.com/watch?v=PgifYz7Gqo4",
    },
    {
      kind: "video",
      caption: "LaneATT on highway video",
      placeholder: "LaneATT on highway video.",
      src: "/projects/autonomous-bicycle/research/laneatt-culane-0013-2.mp4",
      youtube: "https://youtu.be/mpvIum0vE80",
    },
    {
      kind: "video",
      caption: "LaneATT on UC Merced roads",
      placeholder: "LaneATT on UC Merced roads.",
      src: "/projects/autonomous-bicycle/research/laneatt-bdd100k-img5106.mp4",
      youtube: "https://youtu.be/p8TybGj-CdE",
    },
  ] as MediaSlot[],
};

export const questionSection = {
  intro: [
    "To investigate this problem, we tested several fundamentally different perception approaches, ranging from semantic segmentation and multi-task perception networks to anchor-based lane detection.",
    "Some models performed extremely well on benchmark and offline test data, but failed to reproduce those results on footage captured from the bicycle. This turned what initially looked like a lane-detection problem into a much larger set of research questions spanning perception, geometry, domain shift, embedded inference, and control.",
  ],
  subQuestionsLabel: "Questions we had to answer",
  subQuestions: [
    "Is there enough compute on the Jetson Orin Nano Super to run the perception system in real time?",
    "How do we determine which detected boundaries belong to the bicycle's current lane?",
    "What should the system do when only one lane boundary, or no lane markings at all, are visible?",
    "How can road segmentation provide guidance when explicit lane detection fails?",
    "Does the difference in camera height and viewpoint between the training dataset and bicycle camera create a significant domain gap?",
    "What data augmentation best reproduces real conditions such as glare, shadows, motion blur, exposure changes, and camera vibration?",
    "How can the model be optimized with ONNX, TensorRT, and FP16 without changing its predictions?",
    "How do we convert perception output into stable lane geometry and steering commands while keeping predictions synchronized with the correct camera frame?",
  ],
  outro: [
    "These experiments exposed an important distinction between offline accuracy and real-world reliability. A model could produce convincing results on a test dataset while still failing once mounted on the bicycle.",
    "The failure could occur at several different stages of the pipeline: the model might not recognize the markings, postprocessing might select the wrong boundaries, useful predictions might disappear when only one boundary is visible, frames might become stale before reaching the controller, or coordinates might become inconsistent between the model input, camera frame, and steering system.",
    "This meant that improving benchmark accuracy alone was not enough. The actual problem was determining how perception, postprocessing, temporal consistency, embedded inference, and control could work together reliably enough to keep the bicycle on the road.",
  ],
};

export const projectStatus = [
  {
    area: "Lane detection",
    progress:
      "LaneATT model is trained on new Data Augmentations that are specfic for Daylight whether.",
    question: "Even with this new Data",
    href: "#laneatt",
  },
  {
    area: "Embedded inference",
    progress: "ONNX and TensorRT deployment benchmarks",
    question: "How much latency remains across the complete pipeline?",
    href: "#jetson",
  },
  {
    area: "Lane selection",
    progress: "Boundary pairing and center-path extraction",
    question: "When does postprocessing discard or misassign predictions?",
    href: "#failure-selector",
  },
  {
    area: "ROS 2 integration",
    progress: "Perception and visualization nodes",
    question: "Are predictions fresh and associated with the correct frame?",
    href: "#failure-stale",
  },
  {
    area: "Lane keeping",
    progress: "Steering-estimation and integration work",
    question:
      "Can the complete system demonstrate reliable closed-loop behavior?",
    href: "#steering",
  },
];

const evaluated = (label = "Evaluated"): Status => ({
  label,
  kind: "evaluated",
});
const partial = (label = "Partially implemented"): Status => ({
  label,
  kind: "partial",
});
const exploratory = (label = "Exploratory"): Status => ({
  label,
  kind: "exploratory",
});

export const experimentGroups: ExperimentGroup[] = [
  {
    id: "lane-detection",
    title: "Lane detection",
    intro:
      "The core question: can a model recover the bicycle’s lane boundaries from its own camera? The approaches run roughly in the order I tried them.",
    experiments: [
      // {
      //   id: "classical",
      //   title: "Classical image processing",
      //   status: exploratory(),
      //   summary:
      //     "Edges, gradients, and Hough lines as a first test of how much lane structure simple image operations can recover.",
      //   why: "Before training networks, I wanted to see what edge and gradient operators could find on road images, and whether segmented regions could be turned into lines.",
      //   implemented: [
      //     "Gaussian smoothing, Canny edges, Laplacian filtering, horizontal and vertical Sobel gradients, and combined gradient responses.",
      //     "Canny plus probabilistic Hough lines on segmentation-related imagery (HybridNets automation.ipynb).",
      //   ],
      //   media: [
      //     {
      //       kind: "image",
      //       caption:
      //         "The same road frame as original, Canny edges, combined Sobel gradient, and Hough lines. Markings respond, but so do shadows, curbs, and vehicle edges.",
      //       placeholder:
      //         "2×2 grid of one road frame: original, Canny, combined Sobel, Hough lines drawn over the frame. Pick a frame with a shadow or curb so non-lane edges are visible.",
      //       source: "practice.ipynb, HybridNets automation.ipynb",
      //     },
      //   ],
      //   wentWrong:
      //     "These experiments stayed exploratory. I did not build a complete classical lane-keeping baseline or measure its accuracy on bicycle footage.",
      //   cause:
      //     "An edge detector finds contrast changes. It cannot tell a lane marking from a shadow, crack, curb, vehicle edge, or roadside texture, so every later step has to supply that distinction.",
      //   learned:
      //     "Detecting contrast is not the hard part. Deciding which pixels form the bicycle’s lane boundaries is, and that question comes back in every later approach.",
      // },
      {
        id: "lanenet",
        title: "LaneNet and H-Net",
        status: evaluated("Evaluated offline"),
        summary:
          "Segment lane pixels, cluster them into lanes, fit curves, then pick the ego lane.",
        why: "LaneNet splits the problem into which pixels are lane markings (binary segmentation) and which lane each pixel belongs to (instance embeddings), so it handles a varying number of lanes. H-Net learns a transformation that makes lane points easier to fit with a polynomial.",
        implemented: [
          "ENet-based LaneNet with binary-segmentation thresholds, mean-shift-style clustering of embeddings, minimum cluster size and distance settings, and a cap on retained lanes.",
          "Raw versus sigmoid-transformed embeddings.",
          "Polynomial fitting, left/right ego-lane selection, temporal smoothing, and holding previous estimates with decay and jump rejection.",
          "Separate H-Net training on TuSimple lane points with third-order fitting, and inference with and without H-Net.",
          "Later CULane loaders: LaneNet (image, binary mask, instance mask rasterized from .lines.txt) and H-Net (lane-point supervision).",
        ],
        media: [
          {
            kind: "video",
            caption:
              "LaneNet + H-Net on bicycle footage. In one frame the right fitted curve bends away from the visible boundary; in another it is missing. This shows instability; it is not a measured failure rate.",
            placeholder:
              "5–10 s clip from IMG_5105_lanenet_hnet.mp4 around the frames where the right-hand curve bends away and then disappears. Optionally slow it down or add arrows on those frames.",
            source: "LaneNet outputVideos/IMG_5105_lanenet_hnet.mp4",
          },
        ],
        wentWrong:
          "I could not get stable, correctly assigned ego-lane boundaries. Cluster identities and fitted curves changed between frames, so a boundary could bend away or vanish while the marking was still visible. The notebook also records two implementation failures: checkpoint keys that did not match the instantiated architecture, and H-Net receiving unsigned-byte input where float tensors were required.",
        cause:
          "The pipeline chains segmentation, clustering, curve fitting, and temporal association; a change at any stage changes the final boundary. A lane-shaped cluster is not automatically the left or right ego boundary. Applying a sigmoid changes distances in the embedding space the instance loss was trained on, which can alter clustering. The checkpoint and dtype errors are compatibility problems, separate from predictive quality.",
        learned:
          "Every stage between the network and the boundary is another place for the answer to change. This pushed me toward a model that predicts lane geometry directly. A learned perspective transform still depends on correct preprocessing and reliable detected points; it does not fix camera-domain differences.",
        details: [
          {
            heading: "Recorded configurations and videos",
            items: [
              "Configurations: inference_runs.json",
              "output_hnet_original.mp4, output_hnet_fixed_raw.mp4, no_hnet.mp4",
              "ego_hold_decy_085.mp4, ego_no_max_line.mp4",
              "ego_f=embedding_activation_raw.mp4 vs. ego_f=embedding_activation_sigmoid.mp4",
              "debug_raw_epoche030.mp4, LaneNetandHnet.mp4",
              "Notebook: LaneNet inference.ipynb",
            ],
          },
          {
            heading: "Scope notes",
            items: [
              "Archived implementation: Autonomous-Bicycle/Useless/lanenet-lane-detection-pytorch/",
              "CULane masks are rasterized from .lines.txt at original resolution and are not necessarily identical to the distributed CULane segmentation PNGs.",
              "The CULane loaders exist, but I have not trained and deployed a new CULane LaneNet/H-Net model with them.",
            ],
          },
        ],
      },
      {
        id: "laneatt",
        title: "LaneATT",
        status: evaluated("Evaluated on CULane · main approach"),
        summary:
          "An anchor-based model that predicts lane geometry directly. It became my main lane detector.",
        why: "LaneATT removes LaneNet’s clustering stage. It samples backbone features along predefined lane anchors, uses attention across anchors, and predicts lane confidence plus geometric corrections to each anchor, followed by lane-specific non-maximum suppression.",
        implemented: [
          "CULane training through the shared loader (culane.py → lane_dataset_loader.py → lane_dataset.py), transforming the image and lane points together.",
          "Standard configuration: 640 × 360 input, 72 vertical sample positions, 1,000 anchors, raw output of about (1, 1000, 77).",
          "Backbone comparisons from ResNet18 to ResNet152. Comparable training metrics exist for ResNet18/34/50; the larger variants have saved inference outputs only.",
          "Training on UC Merced’s Slurm GPUs (current scripts request L40S; saved benchmark notes include A100 runs) and AWS SageMaker experiments.",
          "Offline tools for replaying video, comparing checkpoints, and frame-level debugging (inference.py, fastLane.py, lib/video.py, LaneATT_debug.ipynb).",
        ],
        media: [
          {
            kind: "video",
            caption:
              "Recorded LaneATT inference on bicycle-camera video; this is a qualitative excerpt, not a coverage evaluation.",
            placeholder:
              "Side-by-side clip: LaneATT predictions on CULane-style imagery next to predictions on real bicycle footage, same checkpoint. Include moments where markings are visible but no boundary is drawn.",
            source:
              "LaneATT/jetson_video/bicycle_safe_run_latest_laneatt_conf_0.1.mp4",
            src: "/projects/autonomous-bicycle/research/laneatt-test.mp4",
            poster: "/projects/autonomous-bicycle/research/laneatt-sample.jpg",
            youtube: "https://www.youtube.com/watch?v=h9gjBP_L2Uc",
          },
        ],
        evidence: {
          caption:
            "CULane results. Best validation F1 and end-of-run test F1 are separate recorded evaluations; the test column is not necessarily the best-validation checkpoint. ResNet34 Aug2’s best validation checkpoint was epoch 13.",
          columns: ["Experiment", "Best validation F1", "End-of-run test F1"],
          rows: [
            ["ResNet18 Aug2", "0.7770", "0.7549"],
            ["ResNet34 Aug2", "0.7852", "0.7682"],
            ["ResNet50 Aug2", "0.7807", "0.7402"],
            ["ResNet34 (Sept 10)", "0.7779", "0.7430"],
          ],
        },
        wentWrong:
          "Strong CULane numbers did not carry over to the bicycle. My field estimate is that LaneATT produced usable left and right boundaries in fewer than about 25% of bicycle-camera frames, even when markings were visible. That figure comes from reviewing footage, not from a labeled evaluation.",
        cause:
          "Camera-domain shift is my strongest hypothesis: lower mounting height, different pitch and field of view, vibration and roll, different surfaces and markings, shadows, glare, motion blur, and thin distant markings after resizing. It has not been isolated. Differences between preprocessing paths, ego-lane selection after inference, and stale visualization could also contribute (see failure analysis).",
        learned:
          "A 0.785 validation F1 on CULane says little about bicycle footage. A bigger backbone did not help either: ResNet50 did not surpass ResNet34 in my runs.",
        details: [
          {
            heading: "What the training path taught me",
            items: [
              "A .lines.txt file is the training target, not a substitute for the image.",
              "Only the configured annotation path is read; extra copies of annotation folders are ignored.",
              "Geometric augmentation must move the lane points with the image.",
              "Preprocessing must match the checkpoint. This pipeline keeps OpenCV BGR order rather than converting to RGB.",
              "The ~0.79 F1 often quoted for this project is the best CULane validation result (ResNet34 Aug2), not bicycle accuracy.",
            ],
          },
          {
            heading: "Files",
            items: [
              "LaneATT/lib/datasets/culane.py, lane_dataset_loader.py, lane_dataset.py",
              "LaneATT/lib/config.py, runner.py, models/laneatt.py",
              "Predictions: LaneATT/all_video_output/, image_inference/",
            ],
          },
        ],
      },
      {
        id: "augmentation",
        title: "Augmentation and image-composition experiments",
        status: exploratory(),
        summary:
          "Trying to make training imagery look more like what the bicycle camera sees.",
        why: "If the gap between car and bicycle cameras is the problem, augmentation is the cheapest lever to try before collecting new labels.",
        implemented: [
          "Rotation, translation, scaling, random perspective, horizontal flips, brightness/contrast, gamma, shadows, sun flare, motion blur, Gaussian noise, compression, and coarse dropout.",
        ],
        media: [
          {
            kind: "image",
            caption:
              "Original frame and augmented versions used during training.",
            placeholder:
              "The existing original-versus-augmented comparison image, or a strip showing 4–5 augmentations of one frame (perspective, shadow, flare, blur).",
            source: "LaneATT/all_video_output/augmented.jpg",
          },
          {
            kind: "video",
            caption:
              "Padding experiment: the bicycle frame shrunk onto a larger black canvas before inference, shown next to the direct resize.",
            placeholder:
              "Short 3840 × 960 side-by-side clip from the padding experiment. Crop or scale so both halves are readable on a laptop screen.",
            source: "Output of LaneATT/lib/video.py padding mode",
          },
        ],
        wentWrong:
          "While, the LaneATT did perform better in the real-world test data, it isn't enough for reliable Lane Detection",
        cause:
          "The Model is too weak for real-world data even if you use specific data augmentatin techniques for video. Need a stronger model, not just retraining but with better data augmentation",
        learned:
          "Data Augmentation can help, but isn't usefull for overall effectiveness",
      },
      // {
      //   id: "bdd-lanes",
      //   title: "Adapting LaneATT to BDD100K",
      //   status: partial("Implemented · poor results"),
      //   summary:
      //     "Writing a BDD100K adapter for LaneATT to train on more varied imagery.",
      //   why: "BDD100K covers more varied driving conditions and includes lane-type labels. Its per-image JSON cannot be treated as CULane .lines.txt files, so it needed its own adapter.",
      //   implemented: [
      //     "LaneATT/lib/datasets/bdd100k.py on the shared LaneDatasetLoader: separate image and annotation roots, per-image JSON, lane/ annotation selection.",
      //     "Sampling line and cubic Bézier segments, filtering invalid coordinates, and ordering points for LaneATT’s representation.",
      //     "Prediction export and geometric evaluation with CULane-style polyline IoU (not the official BDD100K benchmark).",
      //   ],
      //   media: [
      //     {
      //       kind: "image",
      //       caption:
      //         "BDD100K annotates many separate marking segments (left); CULane annotates a few lane polylines (right).",
      //       placeholder:
      //         "Side-by-side: a BDD100K frame with every lane annotation drawn in a distinct color (include a crosswalk or double yellow), next to a CULane frame with its 2–4 polylines.",
      //       source: "Bdd100Test.ipynb, model/CuLane.ipynb",
      //     },
      //   ],
      //   evidence: {
      //     caption:
      //       "Logged geometric F1 for the binary BDD run. The log repeats metric records, so these are not one clean series.",
      //     columns: ["Point in log", "Geometric F1"],
      //     rows: [
      //       ["Early entries", "≈ 0.1931, 0.2054"],
      //       ["Later entries", "≈ 0.1103, 0.0631"],
      //     ],
      //   },
      //   wentWrong: "The binary BDD run performed poorly and got worse in later log entries.",
      //   cause:
      //     "Several configuration concerns, none proven as the cause. BDD’s many marking segments meet a small inference cap; CULane anchor-frequency priors were reused; augmentation was aggressive; training on BDD and testing on CULane measures cross-dataset transfer. The scheduler is also mismatched: CosineAnnealingLR with T_max 4,375 steps every batch, which at 70,000 images and batch size 16 is about one epoch, so a 20-epoch run never gets a single cosine decay.",
      //   learned:
      //     "Dataset semantics and configuration must be checked against the training loop. topk_anchors (anchors the model uses), max_lanes (annotation capacity, 42 here, not 42 physical lanes), and nms_topk (predictions kept after selection) are three different settings.",
      // },
      // {
      //   id: "lane-attributes",
      //   title: "Semantic lane attributes",
      //   status: partial("Implemented · not trained or validated"),
      //   summary:
      //     "An optional LaneATT head that predicts marking type and style alongside geometry.",
      //   why: "Geometry alone is ambiguous. For example, a yellow boundary on one side with no visible opposite marking means something different from a white dashed line.",
      //   implemented: [
      //     "Nine sigmoid outputs: seven categories (single/double white, yellow, other; road curb) and two styles (solid, dashed), trained with masked binary cross-entropy. Decoding picks one category and one style.",
      //   ],
      //   media: [
      //     {
      //       kind: "image",
      //       caption:
      //         "Target output: each lane labeled with a category and style. Illustration only; no trained attribute checkpoint exists yet.",
      //       placeholder:
      //         "Annotated BDD100K frame with each lane labeled by its ground-truth attribute (e.g. “double yellow · solid”, “single white · dashed”, “road curb”).",
      //       source: "Bdd100Test.ipynb (class-indexed annotation view)",
      //     },
      //   ],
      //   wentWrong: "",
      //   // "There is no trained, validated attribute checkpoint. The supplied BDD YAML files set multilabel: false (including one whose filename says true), the raw ONNX exporter rejects attribute mode, TensorRT/ROS 2 lane messages carry geometry only, and the BDD evaluator measures geometry, not lane-type accuracy.",
      //   cause: "",
      //   // "The infrastructure is ahead of training and deployment. Separately, a predicted yellow marking is not automatically the left ego boundary: image_side metadata describes position in the image, not the lane’s legal or geometric role.",
      //   learned: "",
      //   // "This is research infrastructure, not a deployed lane-type detector. Adding semantics also means updating export, messages, and evaluation.",
      // },
      // {
      //   id: "lanetca",
      //   title: "LaneTCA (temporal lane detection)",
      //   status: exploratory(),
      //   summary: "Using video context to stabilize lanes across frames.",
      //   why: "Single-frame detectors flicker. A temporal model could carry lane information through frames where markings are faint or occluded.",
      //   implemented: [
      //     "Explored the research implementation and its preprocessing for VIL-100 and OpenLane-V: lane-point sampling, lane representations, SVD-based coefficients, and video sequences.",
      //   ],
      //   media: [
      //     {
      //       kind: "image",
      //       caption:
      //         "Motivation: consecutive frames where a single-frame detector’s boundary appears, disappears, and reappears.",
      //       placeholder:
      //         "Strip of 4–6 consecutive LaneATT frames from bicycle footage where one boundary flickers on and off while the marking stays visible.",
      //       source: "LaneATT/LaneATT_debug.ipynb frame exports",
      //     },
      //   ],
      //   wentWrong:
      //     "In my assessment the evaluated approach did not fit our deployment requirements. I have no reproducible bicycle-specific checkpoint or Jetson timing record to quantify that, so I make no FPS claim.",
      //   cause:
      //     "Integration is much larger than swapping in a single-frame model, and the upstream environment targets older Python, PyTorch, and CUDA versions.",
      //   learned:
      //     "Deployment suitability is unresolved, not disproven. Temporal stability may be achievable more cheaply in postprocessing first.",
      // },
    ],
  },
  {
    id: "road-segmentation",
    title: "Road and lane segmentation",
    intro:
      "A parallel direction: segment the drivable road and derive a travel corridor from it, which might work even when individual markings are unreliable.",
    experiments: [
      {
        id: "hybridnets",
        title: "HybridNets",
        status: evaluated("Evaluated offline · field FPS reported"),
        summary:
          "Joint road and lane segmentation, plus a geometric pipeline that turns the road mask into a steering target.",
        why: "HybridNets combines road-scene tasks in one network. A drivable-area mask could supply a path when individual markings are faint.",
        implemented: [
          "Training, validation, video and camera inference, and deployment experiments. Some recorded runs froze the detection branch and trained segmentation only.",
        ],
        media: [
          {
            kind: "video",
            caption:
              "Road-guidance output: road mask, extracted corridor, fitted center path, and computed steering value on recorded footage.",
            placeholder:
              "The existing road-guidance demo clip. If possible, include a segment at an intersection or wide road where the corridor spans more than one lane.",
            source: "public/projects/autonomous-bicycle/perception-demo.mp4",
            src: "", // "/projects/autonomous-bicycle/perception-demo.mp4"
            poster: "/projects/autonomous-bicycle/bike_image1.jpg",
          },
        ],
        evidence: {
          caption:
            "Saved validation records (background / road / lane classes). Road is far easier than thin lane markings; lane recall is high but precision is low, meaning many false-positive lane pixels.",
          columns: [
            "Record",
            "Road IoU",
            "Lane IoU",
            "Lane precision",
            "Lane recall",
          ],
          rows: [
            ["metrics.jsonl, epoch 19", "0.8401", "0.2552", "0.2666", "0.7001"],
            ["meter2.jsonl, epoch 29", "0.8388", "0.2611", "0.2715", "0.7028"],
          ],
        },
        wentWrong:
          "Lane quality was much weaker than road quality. In my field measurement HybridNets ran at about 12 FPS after TensorRT optimization, leaving too little headroom for the rest of the pipeline. The archived deployment path also does not currently reproduce: a notebook shows “CUDA error: no kernel image is available for execution on the device”, and ExportOnnxRuntime.py has an unclosed parenthesis.",
        cause:
          "The core limit is semantic: the center of the visible road is not the center of the bicycle’s lane. At intersections, wide roads, turn pockets, and multi-lane sections the road mask describes several possible corridors. The 12 FPS figure has incomplete configuration records (no matching benchmark artifact for device settings, input size, or timing scope).",
        learned:
          "A road mask does not identify the current lane, and a convincing road overlay can hide weak lane-boundary performance.",
        details: [
          {
            heading: "Notebooks",
            items: [
              "HybridNets automation.ipynb: mask overlays, Hough lines, row-boundary extraction, polynomial center paths",
              "HybridNets Sage2.ipynb: per-epoch metrics, confusion matrices, confidence, resource use",
              "HybridNets package.ipynb, data_analysis.ipynb, SageHybridNets.ipynb, stanley.ipynb",
            ],
          },
        ],
      },
      {
        id: "deeplab",
        title: "DeepLab",
        status: partial("Partially evaluated"),
        summary: "Semantic segmentation with different BDD100K label schemes.",
        why: "A well-understood segmentation baseline let me test which label definitions were worth predicting.",
        implemented: [
          "DeepLabV3-style segmentation with ResNet50 backbones and atrous spatial pyramid pooling.",
          "BDD100K processing with configurable category selection and merging: drivable only, separate lane-border classes, and a merged lane-marking + curb class.",
          "Training/validation metrics, image, webcam, and video inference, and SageMaker training.",
        ],
        media: [
          {
            kind: "image",
            caption:
              "One frame under the three label schemes: drivable area, separate lane-border classes, and merged markings + curbs.",
            placeholder:
              "Three-panel image of the same frame segmented with each label scheme.",
            source: "InferDeepLabVideo.py / test_model_outputs.py outputs",
          },
        ],
        wentWrong:
          "During testing the model, I found out this model is not well suited for real-time detection as it takes far too MS in order to compute one frame.",
        cause:
          "This model is designed for accuracy and not real-time inference.",
        learned:
          "The highest accuracy scores often lead to the longest inference time.",
      },
      {
        id: "ddrnet",
        title: "DDRNet",
        status: evaluated("Checkpoint-validated on CPU"),
        summary:
          "Efficient road segmentation; the main work was confirming the right weights were loaded.",
        why: "DDRNet keeps interacting low- and high-resolution branches to balance detail and computation, which suits an embedded budget.",
        implemented: [
          "DDRNet-23-slim and DDRNet-23 segmentation checks (DDRNet-39 definitions are present but not a completed experiment).",
          "Separated ImageNet classification checkpoints from Cityscapes segmentation checkpoints, matched each to its architecture, and verified strict loading, handling training-only keys explicitly.",
          "Decoding: 19-class logits, resize, argmax, standard Cityscapes road train ID.",
          "Validation over 180 consecutive frames and nine samples spread across the video: finite outputs, checkpoint compatibility, and a decodable comparison video.",
        ],
        media: [
          {
            kind: "video",
            caption:
              "DDRNet road masks. They are plausible, but the road region often covers more than the bicycle’s lane.",
            placeholder:
              "Clip from road_comparison.mp4, ideally a section where the mask spans adjacent lanes.",
            source:
              "DDRNet/segmentation/output/checkpoint_validation/road_comparison.mp4",
            src: "/projects/autonomous-bicycle/research/ddrnet-test.mp4",
            poster: "/projects/autonomous-bicycle/research/ddrnet-sample.jpg",
          },
        ],
        wentWrong:
          "Nothing failed outright. The masks are plausible, but they do not isolate the travel lane, and this was CPU validation only: no Jetson FPS and no labeled bicycle accuracy.",
        cause: "Cityscapes “road” is the whole road surface, not the ego lane.",
        learned:
          "Check checkpoint identity before judging a model: classification weights have no trained segmentation head. DDRNet’s usefulness for lane keeping is unresolved, not disproven.",
        details: [
          {
            heading: "Validation artifacts",
            items: [
              "DDRNet/segmentation/MODEL_VALIDATION.md, validate_models.py",
              "output/checkpoint_validation/report.json",
              "Sample images and raw label masks; DDRNet test_video.ipynb",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "datasets",
    title: "Dataset adaptation",
    intro:
      "Much of the work was understanding and converting annotations, not just downloading datasets.",
    experiments: [
      {
        id: "dataset-work",
        title: "CULane, TuSimple, BDD100K, and OpenLane",
        status: evaluated("Implemented"),
        summary:
          "Loaders, converters, and annotation viewers for datasets that describe lanes in different ways.",
        why: "No public dataset uses a bicycle-mounted camera. I needed to know what each dataset actually labels before training on it.",
        implemented: [
          "Annotation viewers for TuSimple, CULane, BDD100K, OpenLane, and OpenLane-V2 (model/TuSimple.ipynb, model/CuLane.ipynb, Bdd100Test.ipynb, OpenLane*.ipynb).",
          "CULane and TuSimple loaders for LaneATT and LaneNet/H-Net; the BDD100K LaneATT adapter; semantic lane-attribute support.",
          "COCO and BDD100K conversions for object detection (see YOLO11 below).",
        ],
        media: [
          {
            kind: "image",
            caption:
              "Four annotation formats: CULane polylines, TuSimple lane points, BDD100K marking segments, and a segmentation mask.",
            placeholder:
              "Four-panel figure: one annotated frame from each of CULane, TuSimple, BDD100K, and a road/lane segmentation mask.",
            source: "Dataset notebooks listed above",
          },
        ],
        evidence: {
          columns: ["Dataset", "How I used it", "Limitation"],
          rows: [
            [
              "CULane",
              "Main LaneATT training and evaluation; LaneNet/H-Net loaders",
              "Vehicle-camera imagery; does not establish bicycle reliability",
            ],
            [
              "TuSimple",
              "Early exploration, LaneNet infrastructure, H-Net training",
              "Constrained highway imagery",
            ],
            [
              "BDD100K",
              "Segmentation, LaneATT adaptation, lane attributes, object-detection prep",
              "Different annotation semantics; conversion choices matter",
            ],
            [
              "COCO 2017",
              "YOLO11 fine-tuning on road-relevant classes",
              "No lane geometry or distance",
            ],
            [
              "OpenLane / OpenLane-V2",
              "Annotation and multi-camera topology exploration",
              "No completed bicycle model trained from it",
            ],
            [
              "Cityscapes DDRNet checkpoints",
              "Road-segmentation experiments",
              "A road mask is not the travel lane",
            ],
            [
              "Virtual KITTI metric depth",
              "Metric-depth proof of concept",
              "Meters unvalidated on our camera",
            ],
            [
              "Recorded road and bicycle video",
              "Offline comparison, debugging, failure analysis",
              "Mostly unlabeled",
            ],
          ],
        },
        wentWrong:
          "Most of our own bicycle recordings have no complete manual labels, so every bicycle-camera result on this page is qualitative or a field estimate.",
        cause:
          "Public datasets come from car cameras, and each labels something different: CULane lane polylines, BDD100K marking segments and boundary objects, segmentation masks, and object boxes.",
        learned:
          "Dataset semantics are part of the model. The biggest missing dataset is a small, labeled set from our own camera.",
        details: [
          {
            heading: "Scope notes",
            items: [
              "Local folders: CuLaneDataset/, TUSimple/, 100k_images/, 100k_json/, Bdd100Final/, Bdd100Final2/, OpenLane/",
              "bddModels/ is an upstream reference collection of BDD100K task implementations; I did not train every model in it.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "supporting",
    title: "Supporting investigations",
    intro:
      "Work tied to the project’s broader goals of obstacle detection, distance estimation, and collision avoidance. My immediate focus has since narrowed to lane keeping.",
    experiments: [
      {
        id: "yolo",
        title: "YOLO11 object detection",
        status: evaluated("Evaluated on COCO · runs in ROS 2"),
        summary:
          "A two-class road-object detector exported to TensorRT and run as a ROS 2 node.",
        why: "Obstacle awareness needs object locations alongside. Easist object detection model to implement.",
        implemented: [
          "COCO conversion to four classes (person; vehicle = car)",
          "Nano, small, and medium models; PyTorch, ONNX, embedded-NMS export, TensorRT, and ROS 2 inference returning (1, 300, 6) boxes.",
        ],
        media: [
          {
            kind: "video",
            caption:
              "LaneATT and YOLO11 overlays on bicycle footage (offline). Detections are boxes and classes only; no distance or braking decision.",
            placeholder:
              "Clip of combined lane + YOLO overlays from a section where the overlay updates correctly. Do not use done4.mp4 here; it is used as the stale-overlay failure.",
            source:
              "LaneATT/all_video_output/bicycle_safe_run_laneatt_yolo_done2.mp4",
          },
        ],
        evidence: {
          caption:
            "COCO validation metrics, not obstacle-avoidance performance on the bicycle.",
          columns: ["Run", "Best val mAP50–95", "mAP50 at same epoch"],
          rows: [
            ["yolo11n_coco45", "0.46546", "0.65025"],
            ["yolo11s_coco43", "0.51845", "0.71005"],
            ["yolo11m_coco43", "0.54285", "0.73225"],
          ],
        },
        wentWrong:
          "Nothing in the detector itself. This model worked perfected fine in everything.",
        cause: "",
        learned: "",
      },
      {
        id: "depth",
        title: "Depth Anything V2 (monocular depth)",
        status: exploratory("Proof of concept"),
        summary:
          "Relative and metric monocular depth as a first step toward obstacle distance.",
        why: "Distance and closing speed would be needed for any stopping decision.",
        implemented: [
          "Depth Anything V2 Small wrapper, image/video inference, ONNX export and checks (518 × 518 input), and TensorRT inference in the combined benchmark.",
          "Metric-depth test with the Virtual-KITTI Small checkpoint, saving depth_meters_frame100.npy and metric_frame100.png.",
        ],
        media: [
          {
            kind: "video",
            caption:
              "Relative depth on recorded footage. Colors are normalized per frame and do not show a consistent physical scale.",
            placeholder: "The existing depth demo clip.",
            source: "public/projects/autonomous-bicycle/depth-demo.mp4",
            src: "/projects/autonomous-bicycle/depth-demo.mp4",
            poster: "/projects/autonomous-bicycle/depth-poster.jpg",
            youtube: "https://youtu.be/4ELsehwtmr4",
          },
          {
            kind: "image",
            caption:
              "Metric-depth output for one frame. The model produced numbers in meters; their accuracy on our camera is unvalidated.",
            placeholder:
              "metric_frame100.png, ideally with a color bar in meters and one or two probe points labeled with predicted distance.",
            source: "Depth-Anything-V2/Try/metric_frame100.png",
          },
        ],
        wentWrong:
          "The standard model outputs relative depth, which is ordering, not meters. The metric variant ran and produced numbers, but nothing validates those distances on the bicycle camera.",
        cause:
          "A metric model trained on Virtual KITTI still needs camera and domain validation. An 80 m output range says nothing about accuracy at 80 m, and differentiating noisy distances gives very noisy closing-speed estimates.",
        learned:
          "Relative depth cannot support stopping decisions. The models in depthandspeedestimationresearch.md are researched options, not implemented ones.",
      },
      {
        id: "stereo",
        title: "Stereo depth with NVIDIA VPI",
        status: partial(),
        summary: "Geometric depth from the IMX219 stereo pair as a ROS 2 node.",
        why: "Stereo gives depth from geometry rather than learned appearance.",
        implemented: [
          "Approximately synchronized left/right topics, grayscale, 640 × 360, VPI disparity, fixed-point to pixel conversion, Z = fB / disparity, and published depth plus a disparity visualization.",
        ],
        media: [
          {
            kind: "image",
            caption:
              "Left image, VPI disparity, and estimated depth from the stereo node.",
            placeholder:
              "Three-panel capture from the stereo_depth node: left camera image, disparity visualization, depth image.",
            source: "ros2_ws stereo_depth node output",
          },
        ],
        wentWrong:
          "Calibration and integration are unresolved. The node uses an assumed 60 mm baseline and a focal length from approximate sensor specs rather than a calibrated CameraInfo, and it is not a full rectified stereo pipeline. Topic names do not match the rest of the system, and the depth image is smaller than the source image the detection boxes come from.",
        cause:
          "It subscribes to /left/image_raw and /right/image_raw while other nodes use /stereo/left/image_raw, and it publishes /stereo/depth_image while the object controller expects /stereo/depth. The controller does not rescale boxes before indexing the smaller depth map.",
        learned:
          "An implemented depth node is not usable depth until calibration, topic wiring, and coordinate scaling are verified.",
      },
      {
        id: "simulation",
        title: "Simulation and hardware",
        status: partial(),
        summary: "Gazebo path-following tests and ESP32-S3 firmware.",
        why: "Simulation tests path-following logic with a known path; the firmware is what ultimately moves the steering.",
        implemented: [
          "Older ROS 2 workspace: Xacro/URDF robot, Gazebo straight and curved road worlds, generated road/boundary/centerline meshes, manual control, and a Stanley node following a CSV centerline from odometry.",
          "ESP32-S3 firmware on the origin/S3-code branch: AS5600 steering-angle feedback, proportional steering, throttle PWM, brake logic, manual/remote modes, I2C and serial angle commands.",
        ],
        media: [
          {
            kind: "video",
            caption:
              "Gazebo: the Stanley node following a predefined centerline on a generated curved road. The path is given, not perceived.",
            placeholder:
              "Screen recording of the Gazebo curved-road world with the robot following the centerline, or a centerline plot generated from the CSV.",
            source: "ros2_ws_old/ (make_roads.py, Stanley node)",
          },
        ],
        wentWrong:
          "The simulated robot is a simplified wheeled platform, not a validated bicycle dynamics model. The firmware exists, but there is no verified bridge from current ROS 2 perception to physical steering and braking.",
        cause:
          "Path following with a known path and recovering that path from a camera are separate problems; the simulation only covers the first.",
        learned:
          "Controller logic can be tested independently of perception, but the connection between them is where the project currently stops.",
      },
    ],
  },
];

export type FailureCase = {
  id: string;
  title: string;
  media: MediaSlot;
  expected: string;
  observed: string;
  suspectedCause: string;
  verified: string;
  related: { label: string; href: string }[];
};

export const failureCases: FailureCase[] = [
  {
    id: "failure-boundaries",
    title: "Missing or incorrectly fitted lane boundaries",
    media: {
      kind: "video",
      caption:
        "LaneNet + H-Net: the right fitted curve bends away from the visible boundary, then disappears.",
      placeholder:
        "Annotated frames or short clip from IMG_5105_lanenet_hnet.mp4. Mark the visible right boundary in one color and the fitted curve in another.",
      source: "IMG_5105_lanenet_hnet.mp4",
      src: "/projects/autonomous-bicycle/research/lanenet-test.mp4",
      poster: "/projects/autonomous-bicycle/research/lanenet-sample.jpg",
      youtube: "https://youtu.be/xtJIIPJfDj8",
    },
    expected:
      "Both boundaries of the bicycle’s lane are drawn whenever the markings are visible.",
    observed:
      "The right curve bends away in one frame and is missing in another. Separately, LaneATT gave usable left/right boundaries in fewer than ~25% of bicycle frames (field estimate).",
    suspectedCause:
      "Unstable clustering and curve fitting for LaneNet; camera-domain shift for LaneATT.",
    verified:
      "The instability is observed in inspected frames. Neither cause has been isolated, and there is no whole-video failure rate.",
    related: [
      { label: "LaneNet and H-Net", href: "#lanenet" },
      { label: "LaneATT", href: "#laneatt" },
    ],
  },
  {
    id: "failure-road-mask",
    title: "A road mask covering more than the intended lane",
    media: {
      kind: "video",
      caption:
        "DDRNet road mask spanning adjacent lanes. Any corridor derived from it has more than one valid answer.",
      placeholder:
        "Clip or annotated frame from road_comparison.mp4 where the mask covers adjacent lanes or an intersection. Outline the actual ego lane for comparison.",
      source:
        "DDRNet/segmentation/output/checkpoint_validation/road_comparison.mp4",
      src: "/projects/autonomous-bicycle/research/ddrnet-test.mp4",
      poster: "/projects/autonomous-bicycle/research/ddrnet-sample.jpg",
      youtube: "https://youtu.be/2I7xSCpphwU",
    },
    expected:
      "The corridor used for steering matches the bicycle’s current lane.",
    observed:
      "The road mask covers adjacent lanes, turn pockets, and intersections.",
    suspectedCause:
      "The “road” class describes the whole drivable surface, not a lane.",
    verified:
      "Yes, by definition of the class. How often corridor extraction then picks the wrong corridor has not been measured.",
    related: [
      { label: "HybridNets", href: "#hybridnets" },
      { label: "DDRNet", href: "#ddrnet" },
    ],
  },
  {
    id: "failure-selector",
    title: "Valid predictions discarded during ego-lane selection",
    media: {
      kind: "image",
      caption:
        "A valid left/right pair plus an unrelated third lane with no vertical overlap. The selector returns no lanes.",
      placeholder:
        "Diagram of three predicted lanes in image space: a valid left/right pair spanning most of the height, and a short third lane that does not overlap them vertically. Shade the “common vertical interval” to show it is empty. Optionally a second panel with only one boundary.",
      source:
        "Small reproducible test of get_ego_lanes2 (ROS 2 laneatt2 package)",
    },
    expected:
      "The selector returns the left/right pair (and a centerline) whenever the model predicts it, and still returns something useful with one boundary.",
    observed:
      "A valid pair returns two boundaries and a centerline. Adding an unrelated third lane with no vertical overlap makes the same function return no lanes. A single boundary also returns no lanes.",
    suspectedCause:
      "get_ego_lanes2 first computes a vertical interval common to all predicted lanes, and only then chooses the closest left/right candidates. One unrelated lane can empty that interval.",
    verified:
      "Yes, reproduced in a small test. How often this happens on real bicycle footage has not been measured. Confidence hysteresis and lane-width-based boundary synthesis exist elsewhere in the repository but are not active in this selector.",
    related: [
      { label: "LaneATT", href: "#laneatt" },
      { label: "Perception to steering", href: "#steering" },
    ],
  },
  // {
  //   id: "failure-stale",
  //   title: "Old predictions remaining over a changing camera image",
  //   media: {
  //     kind: "image",
  //     caption:
  //       "Frames 4000 and 6800 of the same run: substantially different road scenes, identical overlay geometry.",
  //     placeholder:
  //       "Side-by-side of frames 4000 and 6800 from bicycle_safe_run_laneatt_yolo_done4.mp4, with the identical overlay lines highlighted.",
  //     source:
  //       "LaneATT/all_video_output/bicycle_safe_run_laneatt_yolo_done4.mp4, frames 4000 and 6800",
  //     src: "/projects/autonomous-bicycle/research/stale-overlay-pair.jpg",
  //   },
  //   expected:
  //     "Overlays show predictions for the frame they are drawn on, or disappear when predictions stop.",
  //   observed:
  //     "The same lane geometry stays on screen while the road scene changes.",
  //   suspectedCause:
  //     "The visualizer draws the latest received lanes and detections on every incoming image, with no prediction-age timeout, and the flattened detection messages carry no source-image timestamp. If a producer stops publishing, the old overlay persists.",
  //   verified:
  //     "The stale overlay is verified in those frames. Why the producer stopped is not, and I cannot say every historical freeze had the same cause. “Visualizer Loop FPS” counts incoming images, not fresh predictions.",
  //   related: [
  //     { label: "Jetson inference", href: "#jetson" },
  //     { label: "ROS 2 integration", href: "#steering" },
  //   ],
  // },
];

export const benchmarks: DataTable = {
  columns: [
    "Model",
    "Runtime",
    "Precision",
    "Input",
    "Power mode",
    "Throughput",
    "Timing includes",
  ],
  rows: [
    [
      "LaneATT",
      "ONNX Runtime",
      "FP32",
      "640 × 360",
      "MAXN_SUPER",
      "7.33 FPS",
      "Video read + preprocess + engine",
    ],
    [
      "LaneATT",
      "TensorRT",
      "FP16",
      "640 × 360",
      "MAXN_SUPER",
      "27.32 FPS",
      "Same scope as above",
    ],
    [
      "YOLO11n",
      "ONNX Runtime",
      "FP32",
      "640 × 640",
      "MAXN_SUPER",
      "26.98 FPS",
      "Single-model benchmark",
    ],
    [
      "YOLO11n",
      "TensorRT",
      "FP16",
      "640 × 640",
      "MAXN_SUPER",
      "39.94 FPS",
      "Single-model benchmark",
    ],
    [
      "LaneATT + YOLO + depth",
      "TensorRT, sequential",
      "See record",
      "Per model",
      "15 W",
      "9.88 FPS",
      "Separate three-model experiment",
    ],
    [
      "LaneATT + YOLO + depth",
      "TensorRT, sequential",
      "See record",
      "Per model",
      "MAXN_SUPER",
      "18.95 FPS",
      "Same experiment",
    ],
  ],
  caption:
    "Recorded Jetson Orin Nano Super benchmarks. Input sizes are each model’s standard exported input. None of these is a camera-to-actuator ROS 2 measurement.",
};

export const frameBudget: DataTable = {
  caption:
    "Benchmark_6.json: where one frame’s time went in a measured two-engine pipeline (8.72 FPS overall). An engine-only headline would hide the rest.",
  columns: ["Stage", "Time per frame"],
  rows: [
    ["Reading the video", "≈ 40.9 ms"],
    ["Two TensorRT engines", "≈ 42.8 ms"],
    ["Rendering", "≈ 24.3 ms"],
  ],
};

export const fieldMeasurements = [
  "HybridNets at ≈ 12 FPS after TensorRT is my field measurement. No matching benchmark record exists for its device configuration, input size, or timing scope.",
  "LaneATT producing usable boundaries in fewer than ≈ 25% of bicycle frames is a field estimate, pending a labeled evaluation.",
  "Separate concurrent processes reached ≈ 35.75 LaneATT FPS and ≈ 43.07 YOLO FPS. These cannot be added: independent processes may be working on different frames, so this is not synchronized perception at the combined rate.",
  "Some sweeps in the benchmark documentation are incomplete. Pending results remain pending.",
];

export const deploymentNotes = [
  "Torch-free inference: a CUDA-runtime wrapper around TensorRT 10.3 manages GPU buffers directly, so PyTorch is not needed on the Jetson.",
  "Parity checks compare TensorRT and ONNX outputs numerically.",
  "LaneATT exports raw proposals; confidence filtering, lane NMS, decoding, and ego-lane selection run afterward. YOLO exports with NMS embedded. A running engine is not a correct final output.",
  "Engines are built for their target: an engine built on an A100 is not a Jetson artifact.",
  "The Orin Nano has no DLA, so designs that split models between DLA and GPU do not apply. Advertised TOPS is not measured application throughput.",
];

export type PipelineStage = {
  title: string;
  detail: string;
  status: "offline" | "jetson" | "integration";
};

export const pipeline: PipelineStage[] = [
  {
    title: "Camera input",
    detail:
      "IMX219 stereo driver (1280 × 720, 60 FPS requested), USB cameras, or recorded-video replay",
    status: "jetson",
  },
  {
    title: "Model predictions",
    detail: "LaneATT TensorRT raw proposals; YOLO11 boxes",
    status: "jetson",
  },
  {
    title: "Lane selection",
    detail: "Confidence 0.2, lane NMS 50, top 4, then get_ego_lanes2",
    status: "jetson",
  },
  {
    title: "Path geometry",
    detail:
      "Center path, heading, and cross-track error (angle.py, road_guidance.py)",
    status: "offline",
  },
  {
    title: "Steering",
    detail: "Stanley-style estimate → ESP32-S3 steering and throttle",
    status: "integration",
  },
];

export const pipelineStatusLabels: Record<PipelineStage["status"], string> = {
  offline: "Tested offline",
  jetson: "Runs on the Jetson",
  integration: "Needs integration and validation",
};

export const rosNodes: DataTable = {
  columns: ["Package", "Purpose", "Current state"],
  rows: [
    [
      "imx219_83_jetson_driver",
      "Stereo capture",
      "C++/GStreamer left/right images and CameraInfo",
    ],
    [
      "frame_publisher",
      "Recorded-video replay",
      "Publishes to /stereo/left/image_raw; loops at EOF",
    ],
    [
      "laneatt2",
      "TensorRT lane perception",
      "Publishes normalized left, right, and middle lane points; uses the Sept ResNet34 engine",
    ],
    [
      "yolov112",
      "TensorRT YOLO11",
      "Letterboxed 640 × 640, BGR→RGB, confidence 0.7; publishes flattened detections",
    ],
    [
      "lane_visualizer / yolo_visualizer / combined_visualizer",
      "Display",
      "Draw the latest received outputs; no age timeout",
    ],
    ["stereo_depth", "VPI stereo depth", "Topic names differ from other nodes"],
    [
      "object_tracker_controller",
      "Distance-based speed command",
      "Median depth in the box; < 8 ft slow, 8–10 hold, > 10 speed up",
    ],
    ["center_lane", "Center-lane controller", "Incomplete stub"],
    [
      "video_test",
      "Camera/debug display",
      "Image conversion and callback timing",
    ],
  ],
};

export const integrationGaps = [
  {
    title: "Timestamps and freshness",
    body: "Lane and detection messages are consumed as “latest received”. Detection messages carry no source-image timestamp, and nothing rejects stale outputs.",
  },
  {
    title: "Coordinate conversion",
    body: "LaneATT publishes normalized points from a 640 × 360 input; YOLO letterboxes to 640 × 640; stereo depth is smaller than the source image. Each consumer must convert consistently, and the object controller does not rescale boxes before indexing depth.",
  },
  {
    title: "Missing boundaries",
    body: "With one visible boundary the active selector returns nothing. Lane-width-based synthesis exists in other code but is not active here.",
  },
  {
    title: "Preprocessing mismatch",
    body: "Offline video inference can pad frames onto a larger canvas; the ROS 2 node resizes directly. Results from one path do not transfer automatically to the other.",
  },
  {
    title: "Steering assumptions",
    body: "angle.py assumes a 90° horizontal field of view, a 3.7 m lane width, and a fallback speed. These are assumptions, not calibration or measured telemetry.",
  },
  {
    title: "Undefined fallback",
    body: "object_tracker_controller defaults to “speed up” when no valid distance is available. Behavior when lanes or distances disappear still has to be defined.",
  },
  {
    title: "Launch files",
    body: "full_system.launch.py currently launches USB camera nodes only, despite its name. Requested camera rates (60 or 30 FPS) are not measured delivery rates.",
  },
];

export const lessons = [
  {
    lesson:
      "Strong dataset results do not establish bicycle-camera reliability.",
    evidence:
      "LaneATT reached 0.785 CULane validation F1 but gave usable boundaries in fewer than ~25% of bicycle frames (field estimate).",
    href: "#laneatt",
  },
  {
    lesson: "A road mask does not necessarily identify the current lane.",
    evidence:
      "HybridNets road IoU ≈ 0.84 vs. lane IoU ≈ 0.26; DDRNet masks span adjacent lanes.",
    href: "#failure-road-mask",
  },
  {
    lesson: "Postprocessing can lose useful model predictions.",
    evidence:
      "An unrelated third lane makes get_ego_lanes2 reject a valid left/right pair.",
    href: "#failure-selector",
  },
  {
    lesson: "Fast inference does not establish fresh, synchronized output.",
    evidence:
      "The same overlay persisted from frame 4000 to 6800; video reading and rendering took more time than the engines in Benchmark_6.",
    href: "#failure-stale",
  },
  {
    lesson: "Relative depth does not provide validated stopping distances.",
    evidence:
      "Depth Anything V2 relative output is ordering only; the metric variant’s meters are unvalidated on our camera.",
    href: "#depth",
  },
  {
    lesson: "Preprocessing and configuration are part of the model.",
    evidence:
      "BGR order, padding vs. resize, checkpoint identity (DDRNet), and a scheduler that decays once per epoch instead of once per run (BDD100K).",
    href: "#bdd-lanes",
  },
];

export const nextExperiment = {
  summary:
    "Replay a fixed set of labeled bicycle frames through the exact deployed pipeline and measure where useful lane information is lost.",
  steps: [
    "Label the ego-lane boundaries on a small, fixed set of bicycle-camera frames covering straight roads, curves, shadows, one-sided markings, and intersections.",
    "Run them through the same preprocessing and engine as the ROS 2 node.",
    "Record the result at each stage: raw proposals, after confidence filtering and NMS, after ego-lane selection, the published ROS 2 message (with source timestamp), and the drawn overlay.",
    "Report, per stage, how often a correct boundary survives, so model errors, selection errors, and delivery errors are measured separately.",
  ],
  questions: [
    "Should this diagnosis come before any further model changes or retraining?",
    "What evidence would justify the next controlled lane-keeping test on the bicycle, for example a minimum per-stage boundary rate, an end-to-end latency bound, and stale-output rejection?",
    "Is a simpler geometry approach, such as tracking one reliable boundary with a lane-width offset, a reasonable target at bicycle speeds?",
  ],
};

export const materials = [
  {
    heading: "Experiment logs and records",
    items: [
      "LaneATT training logs (Aug2 and Sept 10 runs); BDD100K run log",
      "HybridNets metrics.jsonl, meter2.jsonl",
      "LaneNet inference_runs.json",
      "Jetson benchmark JSON records (e.g. Benchmark_6.json) and benchmark documentation",
      "DDRNet MODEL_VALIDATION.md and report.json",
      "YOLO11 training results (yolo11n_coco45, yolo11s_coco43, yolo11m_coco43)",
    ],
  },
  {
    heading: "Additional videos",
    items: [
      "LaneATT: Sept15Latest.mp4, Sept15Latest2.mp4, video_output_2/",
      "LaneATT + YOLO: bicycle_safe_run_laneatt_yolo_done2.mp4, done4.mp4 (stale-overlay case)",
      "LaneNet/H-Net: outputVideos/, IMG_5105_lanenet_hnet.mp4",
      "DDRNet: road_comparison.mp4",
    ],
  },
  {
    heading: "Methods I trained, ran, or deployed",
    items: [
      "LaneATT, LaneNet/H-Net, HybridNets, DeepLabV3, DDRNet (checkpoint validation), YOLO11, Depth Anything V2",
    ],
  },
  {
    heading: "Reference material only",
    items: [
      "openpilot (upstream checkout; not ported to the bicycle)",
      "OpenLane-V2 devkit; LaneTCA upstream code",
      "RONELDv2 lane tracking",
      "Intelligent Driver Model survey, a car-following control reference",
      "Metric-depth and speed-estimation survey",
      "bddModels/ upstream BDD100K implementations; an earlier YOLOPv2 reference",
    ],
  },
];
