import database from "../../../../util/questions";

export default async function searchQuestion(req, res) {

    const {body} = req;

    try {
        let response = await database.query("SELECT * FROM QUESTIONS WHERE ID = $1", [req.query.searchQuestion]);

        if (response.rows.length = 1) {

            switch (body.num) {
                case "1":
                    res.status(200).json({ question: response.rows[0].question1, answer1: response.rows[0].answera1, answer2: response.rows[0].answerb1, answer3: response.rows[0].answerc1, answer4: response.rows[0].answerd1 });
                    break;

                case "2":
                    res.status(200).json({ question: response.rows[0].question2, answer1: response.rows[0].answera2, answer2: response.rows[0].answerb2, answer3: response.rows[0].answerc2, answer4: response.rows[0].answerd2 });
                    break;

                case "3":
                    res.status(200).json({ question: response.rows[0].question3, answer1: response.rows[0].answera3, answer2: response.rows[0].answerb3, answer3: response.rows[0].answerc3, answer4: response.rows[0].answerd3 });
                    break;

                case "4":
                    res.status(200).json({ question: response.rows[0].question4, answer1: response.rows[0].answera4, answer2: response.rows[0].answerb4, answer3: response.rows[0].answerc4, answer4: response.rows[0].answerd4 });
                    break;

                case "5":
                    res.status(200).json({ question: response.rows[0].question5, answer1: response.rows[0].answera5, answer2: response.rows[0].answerb5, answer3: response.rows[0].answerc5, answer4: response.rows[0].answerd5 });
                    break;
            }

        } else {
            res.status(400).json({ date: "not found" });
        }

    } catch (error) {
        res.status(400).json({ date: "fail" });
    }

}