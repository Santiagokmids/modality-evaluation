import database from "../../../util/questions";
import answersDatabase from "../../../util/answers";

export default async function calculateResult(req, res) {
    const { method, body } = req;
    console.log(body);
    let result=0;
    if (method === "POST") {
        try {
            let response = await database.query("SELECT * FROM QUESTION WHERE(ID = $1)", [body.id]);
            if(response.rows.lenght>0){
                for(let i=0;i<answersDatabase.length;i++){
                    switch (answersDatabase[i].question){
                        case 1:
                            if(response.rows[0].correctAnswer1 === answersDatabase[i].answer){
                                result++;
                            }
                        break;

                        case 2:
                            if(response.rows[0].correctAnswer2 === answersDatabase[i].answer){
                                result++;
                            }
                        break;

                        case 3:
                            if(response.rows[0].correctAnswer3 === answersDatabase[i].answer){
                                result++;
                            }
                        break;

                        case 4:
                            if(response.rows[0].correctAnswer4 === answersDatabase[i].answer){
                                result++;
                            }
                        break;

                        case 5:
                            if(response.rows[0].correctAnswer5 === answersDatabase[i].answer){
                                result++;
                            }
                        break;
                    }
                }
            }
            console.log(result);
            res.status(200).json({ result: {result}});
        } catch (error) {
            res.status(400).json({ date: "fail" });
        }
    } else {
        res.status(400).json({ date: "fail" });
    }

}