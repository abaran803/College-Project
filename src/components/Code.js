import React from 'react'
import './Code.css';

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
    <div className='code'>
        <pre>
            {code}
        </pre>
    </div>
  )
}

export default Code