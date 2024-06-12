  // Hàm để lấy ngẫu nhiên một số 0 hoặc 1
        function getRandomNumber() {
            return Math.round(Math.random());
        }

        // Hàm để xử lý sự kiện khi người dùng nhấn nút "Đoán"
        function guessNumber() {
            // Lấy giá trị được người dùng nhập từ ô input
            var userGuess = document.getElementById("guess").value;

            // Kiểm tra nếu người dùng không nhập gì
            if (userGuess === "") {
                alert("Vui lòng nhập một giá trị (0 hoặc 1).");
                return;
            }

            // Chuyển đổi giá trị nhập thành số
            userGuess = parseInt(userGuess);

            // Kiểm tra nếu giá trị nhập không hợp lệ (không phải 0 hoặc 1)
            if (userGuess !== 0 && userGuess !== 1) {
                alert("Vui lòng chỉ nhập 0 hoặc 1.");
                return;
            }

            // Lấy giá trị ngẫu nhiên
            var randomNumber = getRandomNumber();

            // So sánh giá trị ngẫu nhiên với giá trị người dùng nhập
            if (userGuess === randomNumber) {
                alert("Bạn đoán đúng rồi đó!!! Chúc mừng nha!!!");
            } else {
                alert("Oh no! Bạn đã đoán sai.");
            }
        }