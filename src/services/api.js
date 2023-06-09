// import algoCode from '../data/algoCode';
// import algoData from '../data/algoData';
// import javaCode from '../data/codes/java';

import { algo1, algo2, algo3 } from '../data/codes/cpp/algos';
import { algo1 as javaAlgo1, algo2 as javaAlgo2, algo3 as javaAlgo3 } from '../data/codes/java/algos';
import { algo1 as pythonAlgo1, algo2 as pythonAlgo2, algo3 as pythonAlgo3 } from '../data/codes/python/algos';
// import pythonCode from '../data/codes/python';

// Code to be shown based on language
export const getCodes = async (lang, algo) => {
    if(lang === 'C++') {
        return algo === 'algo1' ? algo1() : algo === 'algo2' ? algo2() : algo3();
    } else if(lang === 'Java') {
        return algo === 'algo1' ? javaAlgo1() : algo === 'algo2' ? javaAlgo2() : javaAlgo3();
    } else if(lang === 'Python') {
        return algo === 'algo1' ? pythonAlgo1() : algo === 'algo2' ? pythonAlgo2() : pythonAlgo3();
    }
}

// Code to be used for algo working, only in JS
export const getAlgoCodes = async (algo) => {

}

// Contents and structuring of algo like input field, buttons etc.
export const getAlgoData = async (algo) => {

}

// Poster of the algo
export const getPoster = async (algo) => {
    if(algo === 'algo1') {

    } else if(algo === 'algo2') {

    } else if(algo === 'algo3') {

    }
}