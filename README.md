# OpenGL Solar System Simulation

## Description
This project is a 3D solar system simulation developed using OpenGL. It features the Sun, Earth, and Moon orbiting in space with a skybox background. The simulation demonstrates basic OpenGL concepts including shaders, textures, and 3D transformations.

This is the final project for IT356 course.

## Features
- 3D rendering of celestial bodies (Sun, Earth, Moon)
- Texture mapping for realistic appearance
- Shader programs for lighting and effects
- Skybox for immersive background
- Camera controls for navigation

## Dependencies
- OpenGL
- GLFW (for window and input handling)
- GLM (for mathematics)
- GLAD (for OpenGL function loading)
- SOIL or STBI (for texture loading)

## Build Instructions
1. Ensure you have CMake installed.
2. Clone the repository:
   ```
   git clone https://github.com/AuuSuphanat/Opengl-solar-system.git
   ```
3. Navigate to the project directory:
   ```
   cd Opengl-solar-system
   ```
4. Create a build directory:
   ```
   mkdir build
   cd build
   ```
5. Generate build files:
   ```
   cmake ..
   ```
6. Build the project:
   ```
   cmake --build .
   ```

## Usage
Run the generated executable to start the simulation. Use mouse and keyboard controls to navigate the camera and observe the solar system.

## Project Structure
- `source/`: Main source code
- `shader/`: GLSL shader files
- `resources/`: Textures and other assets
- `include/`: Header files
- `cmake/`: CMake find modules

## License
This project is for educational purposes.