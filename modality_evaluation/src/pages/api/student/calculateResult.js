import database from "../../../util/questions";
import answersDatabase from "../../../util/answers";

export default async function calculateResult(req, res) {
    const { method, body } = req;

    let result = 0;

    if (method === "POST") {

        try {
            let response = await database.query("SELECT * FROM QUESTIONS WHERE ID = $1", [body]);
            let answers = await answersDatabase.query("SELECT * FROM ANSWERS");

            if(response.rows.length > 0){

                for(let i = 0; i < answers.rows.length; i++){

                    switch (answers.rows[i].question){
                        case 1:
                            if(response.rows[0].correctanswer1 === answers.rows[i].answer){
                                result++;
                            }
                        break;

                        case 2:
                            if(response.rows[0].correctanswer2 === answers.rows[i].answer){
                                result++;
                            }
                        break;

                        case 3:
                            if(response.rows[0].correctanswer3 === answers.rows[i].answer){
                                result++;
                            }
                        break;

                        case 4:
                            if(response.rows[0].correctanswer4 === answers.rows[i].answer){
                                result++;
                            }
                        break;

                        case 5:
                            if(response.rows[0].correctanswer5 === answers.rows[i].answer){
                                result++;
                            }
                        break;
                    }
                }
            }
            res.status(200).json({ result: result});

        } catch (error) {
            console.log("try");
            res.status(400).json({ date: "fail" });
        }
    } else {
        res.status(400).json({ date: "fail" });
    }

}