import React, { Component } from "react";
import "../css/ProblemDescription.css";
import Discussion from "./Discussion.js"

export default class ProblemDescription extends Component {
  constructor(props) {
    super(props);
  }

  moveToSubmit(problemId){
    window.location.href = '/Submit/'+problemId
  }

  render() {
    return (
      <div className="ProblemDescription">
            <div className = "ProblemName">
              <span>PRIME1 - Prime Generator</span>
              <span className = 'ProblemCate'># while loop</span>
            </div>

            <div className = "Problem-words">
                <p>
                Có một quảng cáo ở một cửa hàng như sau: "3 vỏ chai Choco Cola sẽ đổi được 1 chai mới " Và bây giờ bạn quyết định mua N chai cola từ cửa hàng. Bạn muốn biết làm thế nào bạn có thể nhận được nhiều cola nhất từ cửa hàng. Hình dưới đây là ví dụ cho trường hợp N = 8. Phương pháp 1 là cách thông thường: sau khi uống hết 8 chai cola, bạn có 8 chai rỗng. Lấy 6 vỏ rỗng đem đi đổi và bạn sẽ có được 2 chai cola mới. Bây giờ sau khi uống hết bạn chỉ còn có 4 vỏ chai, vì vậy bạn đem 3 vỏ chai để đổi thêm một chai cola mới. Cuối cùng, bạn chỉ có 2 chai trong tay, vì vậy bạn không thể có được chai cola mới nữa. Do đó, bạn đã có được tổng cộng 8 + 2 + 1 = 11 chai cola. Nhưng, bạn thực sự có thể có được nhiều hơn nữa! Đó là phương pháp 2, bạn vay một chai rỗng từ bạn bè của bạn (hoặc mượn người bán hàng=))), Sau đó bạn có thể thưởng thức 8 + 3 + 1 = 12 chai cola! Tất nhiên, bạn sẽ phải trả lại chai rỗng còn lại của bạn cho bạn bè của bạn. [img=Alt text]http://s17.postimg.org/4m9738q5b/LAH1_3.png[/img] [b]Input[/b] Input bao gồm nhiều test trên mỗi dòng, mỗi dòng là 1 số nguyên N (1 ≤ N ≤ 200). [b]Output[/b] Với mỗi bộ test, hãy viết chương trình in ra số chai cola tối đa mà bạn có thể nhận được. Bạn có thể mượn vỏ chai của người khác, nhưng nếu làm vậy, hãy chắc chắn rằng bạn có đủ vỏ chai để trả lại cho họ
                </p>
            </div>

            <div className = "ProblemInput-Output">
              <span className = "big">Input</span>
              <p>The input begins with the number t of test cases in a single line</p>
            </div>

            <div className = "ProblemInput-Output">
              <span className = "big">Output</span>
              <p>The input begins with the number t of test cases in a single line</p>
            </div>

            <div className = "ProblemExamples">
                <pre>{`Input:
2
1 10
3 5

Output:
2
3
5
7

3
5
`}</pre>
            </div>

            <div className = "ProblemDescriptionSubmit" onClick = {this.moveToSubmit.bind(this,'P001')}>
                <span>Submit</span>
            </div>

            <Discussion></Discussion>

      </div>
    );
  }
}
