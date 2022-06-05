const mongoose = require("mongoose");

const connect = () => {
  mongoose                                      //connect 함수 두번째 인자에는 ignoreUndefined 라는 옵션을 넘겨
                                                //(category === undefined 인 상황을 대비!)
    .connect("mongodb://localhost:27017/spa_mall", { ignoreUndefined: true })
    .catch((err) => {
      console.error(err);
    });
};

mongoose.connection.on("error", (err) => {
  console.error("몽고디비 연결 에러", err);
});

module.exports = connect;
