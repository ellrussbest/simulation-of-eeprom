# CMAKE generated file: DO NOT EDIT!
# Generated by "MinGW Makefiles" Generator, CMake Version 3.26

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

SHELL = cmd.exe

# The CMake executable.
CMAKE_COMMAND = "C:\Program Files\CMake\bin\cmake.exe"

# The command to remove a file.
RM = "C:\Program Files\CMake\bin\cmake.exe" -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = "C:\Users\Rusell.Odhiambo\Desktop\Developments\Simulation of eeprom"

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = "C:\Users\Rusell.Odhiambo\Desktop\Developments\Simulation of eeprom\build"

# Include any dependencies generated for this target.
include CMakeFiles/simulation.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include CMakeFiles/simulation.dir/compiler_depend.make

# Include the progress variables for this target.
include CMakeFiles/simulation.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/simulation.dir/flags.make

CMakeFiles/simulation.dir/main.cpp.o: CMakeFiles/simulation.dir/flags.make
CMakeFiles/simulation.dir/main.cpp.o: C:/Users/Rusell.Odhiambo/Desktop/Developments/Simulation\ of\ eeprom/main.cpp
CMakeFiles/simulation.dir/main.cpp.o: CMakeFiles/simulation.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir="C:\Users\Rusell.Odhiambo\Desktop\Developments\Simulation of eeprom\build\CMakeFiles" --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/simulation.dir/main.cpp.o"
	C:\Users\Rusell.Odhiambo\Desktop\Developments\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/simulation.dir/main.cpp.o -MF CMakeFiles\simulation.dir\main.cpp.o.d -o CMakeFiles\simulation.dir\main.cpp.o -c "C:\Users\Rusell.Odhiambo\Desktop\Developments\Simulation of eeprom\main.cpp"

CMakeFiles/simulation.dir/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/simulation.dir/main.cpp.i"
	C:\Users\Rusell.Odhiambo\Desktop\Developments\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E "C:\Users\Rusell.Odhiambo\Desktop\Developments\Simulation of eeprom\main.cpp" > CMakeFiles\simulation.dir\main.cpp.i

CMakeFiles/simulation.dir/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/simulation.dir/main.cpp.s"
	C:\Users\Rusell.Odhiambo\Desktop\Developments\emsdk\upstream\emscripten\em++.bat $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S "C:\Users\Rusell.Odhiambo\Desktop\Developments\Simulation of eeprom\main.cpp" -o CMakeFiles\simulation.dir\main.cpp.s

# Object files for target simulation
simulation_OBJECTS = \
"CMakeFiles/simulation.dir/main.cpp.o"

# External object files for target simulation
simulation_EXTERNAL_OBJECTS =

simulation.html: CMakeFiles/simulation.dir/main.cpp.o
simulation.html: CMakeFiles/simulation.dir/build.make
simulation.html: CMakeFiles/simulation.dir/objects1.rsp
simulation.html: CMakeFiles/simulation.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir="C:\Users\Rusell.Odhiambo\Desktop\Developments\Simulation of eeprom\build\CMakeFiles" --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable simulation.html"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles\simulation.dir\link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/simulation.dir/build: simulation.html
.PHONY : CMakeFiles/simulation.dir/build

CMakeFiles/simulation.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles\simulation.dir\cmake_clean.cmake
.PHONY : CMakeFiles/simulation.dir/clean

CMakeFiles/simulation.dir/depend:
	$(CMAKE_COMMAND) -E cmake_depends "MinGW Makefiles" "C:\Users\Rusell.Odhiambo\Desktop\Developments\Simulation of eeprom" "C:\Users\Rusell.Odhiambo\Desktop\Developments\Simulation of eeprom" "C:\Users\Rusell.Odhiambo\Desktop\Developments\Simulation of eeprom\build" "C:\Users\Rusell.Odhiambo\Desktop\Developments\Simulation of eeprom\build" "C:\Users\Rusell.Odhiambo\Desktop\Developments\Simulation of eeprom\build\CMakeFiles\simulation.dir\DependInfo.cmake" --color=$(COLOR)
.PHONY : CMakeFiles/simulation.dir/depend

