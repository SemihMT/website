// Projects data — edit this array to add/remove projects
const PROJECTS = [
  {
    title: "Cadmium - Cross Platform Game Engine",
    link: "./project-pages/cadmium.html",
    mediaSrc: "./assets/images/Cadmium/Cadmium-main.png",
    tags: ["C++", "CMake", "CI/CD", "Engine dev", "WIP"],
    description: "A cross-platform game engine, built from scratch in C++ for the web."
  },
  {
    title: "NexusLib",
    link: "./project-pages/nexuslib.html",
    mediaSrc: "./assets/images/nexuslib/NexusLogo.png",
    tags: ["C++", "CMake", "School", "CI/CD",],
    description: "Cross-platform networking library for C++ designed for simplicity and performance."
  },
  {
    title: "Voxel Editor",
    link: "./project-pages/voxelgame.html",
    mediaSrc: "./assets/images/Voxelgame/voxelgame.webm",
    tags: ["C++", "Vulkan", "CMake", "School"],
    description: "A procedural voxel world generator and editor built with Vulkan."
  },
  {
    title: "Voice of the Ocean",
    link: "./project-pages/voiceoftheocean.html",
    mediaSrc: "./assets/images/VOTO/header.jpg",
    tags: ["C++", "UE5", "School", "Group"],
    description: "A single-player action-adventure game with unique mechanics using the player's voice."
  },
  {
    title: "P4Engine — Bubble Bobble",
    link: "./project-pages/p4engine.html",
    mediaSrc: "./assets/images/BubbleBobble/BubbleBobble.jpg",
    tags: ["C++", "GPP", "School"],
    description: "A game engine & game made from scratch for the programming 4 course."
  },
  // {
  //   title: "DevFlow - Unity Editor Tool Suite",
  //   link: "./project-pages/DevFlow.html",
  //   mediaSrc: "./assets/images/DevFlow/main.png",
  //   tags: ["C#", "Editor Tooling"],
  //   description: "A suite of five editor tools built to eliminate the small frustrations that slow down development."
  // },
  {
    title: "Modulus - Internship @ Happy Volcano",
    link: "./project-pages/Modulus.html",
    mediaSrc: "./assets/images/Modulus/Keyart-Logo.png",
    tags: ["C#", "Internship", "Editor Tooling"],
    description: "A zen factory automation game I worked on as gameplay and tool developer during my internship."
  },
  {
    title: "Dual Rasterizer",
    link: "./project-pages/rasterizer.html",
    mediaSrc: "./assets/images/Rasterizer/DualRasterizer_DirectX.png",
    tags: ["C++", "DX11", "School"],
    description: "A combination rasterizer — software and hardware — built with DirectX 11."
  },
  {
    title: "Raytracer",
    link: "./project-pages/raytracer.html",
    mediaSrc: "./assets/images/Raytracer/Raytracer.webm",
    tags: ["C++", "School"],
    description: "A software ray tracer with BVH acceleration structure."
  },
  {
    title: "PPMEdit",
    link: "./project-pages/ppmedit.html",
    mediaSrc: "./assets/images/PPMEdit/ColorPicker.webm",
    tags: ["Python", "TKinter"],
    description: "A custom level editor for my custom engine. Inspired by PICO-8's P8PNG cartridge format."
  },
  {
    title: "SemihTeke.com",
    link: "./project-pages/semihteke-com.html",
    mediaSrc: "./assets/images/Website/preview.png",
    tags: ["CI/CD"],
    description: "The site you're on right now. Built from scratch in plain HTML, CSS and JS with automated deployment."
  },

  {
    title: "BoomBastic",
    link: "./project-pages/boombastic.html",
    mediaSrc: "./assets/images/Boombastic/Boombastic.webm",
    tags: ["C#", "Unity", "Group", "School"],
    description: "Co-op game with mechanics based on hot potato. Multiplayer chaos for up to 4 players."
  },

];


// ── Archive ──────────────────────────────────────────────────
// Projects here won't appear in the main grid.
// Same fields as PROJECTS but no mediaSrc needed.
// ─────────────────────────────────────────────────────────────
const ARCHIVED_PROJECTS = [
  // Example — uncomment and fill in to add an archived project:


];
