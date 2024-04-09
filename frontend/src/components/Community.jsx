import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

    useEffect(() => {
        // Fetch the questions from your API
        // For now, we'll use a dummy array of questions
        const fetchedQuestions = [
            {
                id: '123',
                question: 'How to learn React?',
                author: 'John Doe',
                date: '2021-09-01',
                tags: ['React', 'JavaScript'],
                upvotes: 10,
                views: 100,
            },
            // Add more questions here...
        ];
        setQuestions(fetchedQuestions);
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