const axios = require("axios");

exports.name = "/shoti";
exports.index = async (req, res) => {
  try {
    const response = await axios.post(
      `https://shoti-srv1.onrender.com/api/v1/get`,
      { apikey: global.config.shoti },
    );
    var username = response.data.data.user.username;
    var nickname = response.data.data.user.nickname;
    var title = response.data.data.title;
    var url = response.data.data.url;
    res.json({
      url: url,
      username: username,
      nickname: nickname,
      title: title,
    });
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.message);
    res.json({ error: "error fetching shoti!!??" });
  }
};