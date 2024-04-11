import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
        const fetchData = async () => {
        const fetchedQuestion = await axios.get(`/api/questions/${id}`, { id });
        setQuestion(fetchedQuestion.data);
        }
        fetchData();
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