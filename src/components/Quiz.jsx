import styled from 'styled-components'
import React, { useRef, useState } from 'react'
import { DataQuiz } from '../../data/dataQuiz'


const Quiz = () => {
    let [index,setIndex] = useState(0)
    let [question,setQuestion] = useState(DataQuiz[index])
    let [lock,setLock] = useState(false)
    let [score,setScore] = useState(0)
    let [result,setResult] = useState(false)

    let Option1 = useRef(null)
    let Option2 = useRef(null)
    let Option3 = useRef(null)
    let Option4 = useRef(null)

    let option_array = [Option1,Option2,Option3,Option4]

    const checkAns = (e,ans) => {
        if (lock === false){
            if(question.ans===ans){
                e.target.classList.add("correct")
                setLock(true)
                setScore(prev=>prev+1)
            }else{
                e.target.classList.add("wrong")
                setLock(true)
                option_array[question.ans-1].current.classList.add("correct")
            }
        }
    }

    const next = () => {
        if(lock===true){
            if(index === DataQuiz.length - 1){
                setResult(true)
                return 0
            }
            setIndex(++index)
            setQuestion(DataQuiz[index])
            setLock(false)
            option_array.map((option) => {
                option.current.classList.remove("wrong")
                option.current.classList.remove("correct")
                return null
            })
        }
    }

    const reset = () => {
        setIndex(0)
        setQuestion(DataQuiz[0])
        setScore(0)
        setLock(false)
        setResult(false)
    }



    return (
    <Container>
        <h1>Quiz app</h1>
        <hr />
        {result?<></>:<>
            <h2>{index+1}. {question.question}</h2>
        <ul>
            <li ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
            <li ref={Option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
            <li ref={Option3}  onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
            <li ref={Option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
        </ul>
        <button onClick={next}>Next</button>
        <Index>{index+1} of {DataQuiz.length}</Index>
        </>}
        {result?<><h2>You scored {score} out of {DataQuiz.length}</h2>
        <button onClick={reset}>Reiniciar</button></>:<></>}
    </Container>
    )
}

export default Quiz
const Container = styled.div`
    font-family: 'Poppins', sans-serif;
    width: 540px;
    margin: auto;
    margin-top: 80px;
    background: white;
    color: #262626;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 10px;
    padding: 40px 50px;

    hr {
        height: 2px;
        border: none;
        background-color: #ffc107;
    }

    h2 {
        font-size: 27px;
        font-weight: 500;
    }

    ul li {
        display: flex;
        align-items: center;
        height: 70px;
        padding-left: 15px;
        border: 1px solid #686868;
        border-radius: 8px;
        margin-bottom: 20px;
        font-size: 20px;
        cursor: pointer;
    }

    button {
        margin: auto;
        width: 250px;
        height: 65px;
        background: #34a853;
        color: #fff;
        font-size: 25px;
        font-weight: 500;
        border-radius: 8px;
        cursor: pointer;
    }

    .correct {
        background: #dffff2;
        border-color: #00d397;
    }

    .wrong {
        background: #ffebeb;
        border-color: #ff4a4a;
    }

    /* Responsividade */
    @media (max-width: 768px) {
        width: 90%; /* Ajusta o tamanho em telas menores */
        margin-top: 60px;
        padding: 30px 20px;

        h2 {
            font-size: 24px;
        }

        ul li {
            height: 60px;
            font-size: 18px;
        }

        button {
            width: 200px;
            height: 55px;
            font-size: 20px;
        }
    }

    @media (max-width: 480px) {
        margin-top: 40px;
        padding: 20px 15px;

        h2 {
            font-size: 20px;
        }

        ul li {
            height: 50px;
            font-size: 16px;
        }

        button {
            width: 180px;
            height: 50px;
            font-size: 18px;
        }
    }
`;

const Index = styled.div`
    margin: auto;
    font-size: 18px;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;
