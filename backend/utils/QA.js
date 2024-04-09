const MongoClient = require("mongodb").MongoClient;
const databaseURL = 'mongodb://localhost:27017';
const database = 'backend_masters';
const client = new MongoClient(databaseURL);

async function addQuestion(question,author,tags){
    try{
        await client.connect();
        const db = client.db(database);
        const questions = db.collection('questions');
        const result = await questions.insertOne({question,author,tags,upvotes:0,views:0,date:new Date()});
        return result;
    }catch(error){
        console.error('Error adding question:',error);
    }
}


async function getQuestions(){
    try{
        await client.connect();
        const db = client.db(database);
        const questions = db.collection('questions');
        const result = await questions.find().toArray();
        return result;
    }catch(error){
        console.error('Error getting questions:',error);
    }
}

async function getQuestionDetails(id){
    try{
        await client.connect();
        const db = client.db(database);
        const questions = db.collection('questions');
        const result = await questions.findOne({id});
        return result;
    }catch(error){
        console.error('Error getting question details:',error);
    }
}

async function upvoteQuestion(id){
    try{
        await client.connect();
        const db = client.db(database);
        const questions = db.collection('questions');
        const result = await questions.updateOne({id},{$inc:{upvotes:1}});
        return result;
    }catch(error){
        console.error('Error upvoting question:',error);
    }
}

async function removeUpvote(id){
    try{
        await client.connect();
        const db = client.db(database);
        const questions = db.collection('questions');
        const result = await questions.updateOne({id},{$inc:{upvotes:-1}});
        return result;
    }catch(error){
        console.error('Error removing upvote:',error);
    }
}

async function viewQuestion(id){
    try{
        await client.connect();
        const db = client.db(database);
        const questions = db.collection('questions');
        const result = await questions.updateOne({id},{$inc:{views:1}});
        return result;
    }catch(error){
        console.error('Error viewing question:',error);
    }
}

async function answerQuesion(id,answer,author){
    try{
        await client.connect();
        const db = client.db(database);
        const questions = db.collection('questions');
        const result = await questions.updateOne({id},{$push:{answers:{answer,author,date:new Date()}}});
        return result;
    }catch(error){
        console.error('Error answering question:',error);
    }
}

