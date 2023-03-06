#include <emscripten/bind.h>
#include <iostream>

using namespace emscripten;

long int serial_number(long int number)
{
    return number;
}

std::string mac_address(std::string addr)
{
    return addr;
}

EMSCRIPTEN_BINDINGS(my_module)
{
    function("serial_number", &serial_number);
    function("mac_address", &mac_address);
}