import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const QuestionCard = ({ id, question, author, date, tags, upvotes, views }) => {
    return (
        <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
            <Link to={`/questions/${id}`}>
                <h2>{question}</h2>
            </Link>
            <p>Asked by {author} on {new Date(date).toLocaleDateString()}</p>
            <div>
                {tags.map((tag, index) => (
                    <span key={index} style={{ marginRight: '5px', color: 'blue' }}>{tag}</span>
                ))}
            </div>
            <p>{upvotes} Upvotes | {views} Views</p>
        </div>
    );
};

const Community = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(  () => {
        const fetchData = async ()=>{
            const fetchedQuestions = await axios.get('/api/questions')
           setQuestions(fetchedQuestions.data);
       }
       fetchData();
        }, []);

    return (
        <>
        <h1>Community</h1>
        <h2>Questions</h2>
        {questions.map((question) => (
            <QuestionCard key={question.id} {...question} />
        ))}
        </>
    );
};

export default Community;