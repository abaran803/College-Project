import React from 'react'

const Code = ({code}) => {

    // const code = `
    //     // Your First C++ Program

    //     #include <iostream>

    //     int main() {
    //         std::cout << "Hello World!";
    //         return 0;
    //     }
    // `

        console.log(code);

  return (
    <div>
        <pre>
            {code}
        </pre>
    </div>
  )
}

export default Code