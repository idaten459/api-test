function myFunction() {
    var url = [
        "https://kenkoooo.com/atcoder/resources/contests.json",
        "https://kenkoooo.com/atcoder/resources/problems.json",
        "https://kenkoooo.com/atcoder/resources/ac.json",
        "https://kenkoooo.com/atcoder/atcoder-api/v2/user_info?user=kenkoooo",
        "https://kenkoooo.com/atcoder/atcoder-api/results?user=wata"
    ];
    var response = UrlFetchApp.fetch(url[0]); // 200
    var response = UrlFetchApp.fetch(url[1]); // 200
    var response = UrlFetchApp.fetch(url[2]); // 200
    var response = UrlFetchApp.fetch(url[3]); // 403
    var response = UrlFetchApp.fetch(url[4]); // 403
    Logger.log(response);
}
