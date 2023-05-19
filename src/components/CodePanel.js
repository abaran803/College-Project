import React, { useEffect, useState } from 'react'
import Code from './Code';
import { getCodes } from '../services/api';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const CodePanel = () => {

  const {name} = useParams();

  // const [code, setCode] = useState();
    const [selectedCode, setSelectedCode] = useState();
    const [selectedLang, setSelectedLang] = useState();

    // Will fetch from backend
    // const codes = {
    //   'Java': `
    //     s1
    //         // Your First C++ Program

    //         #include <iostream>

    //         int main() {
    //             std::cout << "Hello World!";
    //             return 0;
    //         }
    //     `,
    //   'C++': `
    //     s2
    //         // Your First C++ Program

    //         #include <iostream>

    //         int main() {
    //             std::cout << "Hello World!";
    //             return 0;
    //         }
    //     `,
    //   'Python': `
    //     s3
    //         // Your First C++ Program

    //         #include <iostream>

    //         int main() {
    //             std::cout << "Hello World!";
    //             return 0;
    //         }
    //     `
    // }

    // const getAlgoCode = (lang) => {
    //   console.log(lang);
    //   return 'abc';
    //   // return await getCodes(lang);
    // }
  
    // Later, will take from store
    const availableLanguage = ['Java', 'C++', 'Python'];

    useEffect(() => {
      setSelectedLang('C++');
    }, [name])

    useEffect(() => {
      const selectedCode = async () => {
        const code = await getCodes(selectedLang || 'C++', name);
        setSelectedCode(code);
      }
      selectedCode();
    }, [selectedLang, name])

    const setSelectedLangHandler = (e) => {
      setSelectedLang(e.target.value);
    }

  return (
    <div className='code-panel'>
        <div className='code-panel__lang-switcher'>
        <select onChange={setSelectedLangHandler}>
            {availableLanguage.map((language, ind) => <option selected={language === selectedLang} value={language} key={ind}>{language}</option>)}
        </select>
        </div>
        <div className='code-panel__code'>
            <Code code={selectedCode} />
        </div>
    </div>
  )
}

export default CodePanel