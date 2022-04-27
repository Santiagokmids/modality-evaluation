import questions from "../../../util/questions";

export default async function handlerInsert(req, res) {
    const { method, body } = req;

    console.log(body);

    if(method === "POST"){
        questions.push({
            id: body.id,
            question: body.question,
            answerA: body.answerA,
            answerB: body.answerB,
            answerC: body.answerC,
            answerD: body.answerD,
            correctAsnwer: body.correctAsnwer
        });
        
        res.status(200);
    }else {
        res.status(404);
    }
}
