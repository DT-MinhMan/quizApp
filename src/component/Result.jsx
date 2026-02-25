import React from "react";
const Result = (props) => {
    return (
        <div>
            <h2>Kết quả bài kiểm tra</h2>
            <p className="result"> Bạn trả lời đúng {props.score} câu trong tổng số {props.totalQuestionNum} câu.</p>
            <div className="resultButtonsContainer">
                <button className="result-button" onClick={props.reviewQuiz}>Xem lại</button>
                <button className="result-button" onClick={props.restartQuiz}>Làm lại</button>
            </div>
        </div>
    );
}
export default Result;