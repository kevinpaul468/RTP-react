import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AnswerCard = ({ id, answer, author, date }) => {
    return (
        <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
            <p>{answer}</p>
            <p>Answered by {author} on {new Date(date).toLocaleDateString()}</p>
        </div>
    );
};

const QuestionDetail = () => {
    const { id } = useParams();
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        // Fetch the question details from your API using the ID from the URL
        // For now, we'll use a dummy question
        const fetchedQuestion = {
            id: '123',
            question: 'How to learn React?',
            author: 'John Doe',
            date: '2021-09-01',
            tags: ['React', 'JavaScript'],
            upvotes: 10,
            views: 100,
            answers: [
                { answer: 'You can learn React from the official documentation.', author: 'Jane Doe', date: '2021-09-02' },
                { answer: 'I recommend the React course on Codecademy.', author: 'John Smith', date: '2021-09-03' },
            ],
        };
        setQuestion(fetchedQuestion);
    }, [id]);

    if (!question) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>{question.question}</h2>
            <p>Asked by {question.author} on {new Date(question.date).toLocaleDateString()}</p>
            <div>
                {question.tags.map((tag, index) => (
                    <span key={index} style={{ marginRight: '5px', color: 'blue' }}>{tag}</span>
                ))}
            </div>
            <p>{question.upvotes} Upvotes | {question.views} Views</p>
            {question.answers.map((answer, index) => (
                <AnswerCard key={`${question.id}-${index}`} id={`${question.id}-${index}`} {...answer} />
            ))}
        </div>
    );
};

export default QuestionDetail;