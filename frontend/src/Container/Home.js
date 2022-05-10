
import SocialButton from "../Component/SocialButton";
import axiosInstance from "../Helpers/helper";
import * as queryString from "query-string";


const Home = () => {
  const urlParams = queryString.parse(window.location.search);
  if(urlParams.code){
    console.log(urlParams.code)
  }
  if(urlParams.oauth_token){
    const oauthRequestTokenSecret = localStorage.getItem('twiiter-req')
    console.log("oauth token:", urlParams.oauth_token)
    console.log("Oauth token request token secret:", JSON.parse(oauthRequestTokenSecret))
  }
  if(urlParams.oauth_verifier){
    console.log("oauth verifier:", urlParams.oauth_verifier)
  }
  const clickOnFacebook = () => {
    const paramsForFB = queryString.stringify({
      client_id: "302650715385015",
      redirect_uri: "https://localhost:3000/",
      scope: ["email", "user_friends"].join(","), // comma seperated string
      response_type: "code",
      auth_type: "rerequest",
      display: "popup",
    });
    const facebookLoginUrl = `https://www.facebook.com/v13.0/dialog/oauth?${paramsForFB}`;
    window.location.href = facebookLoginUrl;
  }
  const clickOnTwitter = async () => {
    const response = await axiosInstance.get('/auth/twitter-request-token');
    if (response.status === 200) {
      console.log(response.data.oauthRequestTokenSecret)
      localStorage.setItem('twiiter-req', JSON.stringify(response.data.oauthRequestTokenSecret))
      window.location.href = response.data.twitterLoginUrl;
    }
    else {
      console.log(response)
    }
  }
  const clickOnGoogle = async () => {
    const googleParams = queryString.stringify({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      scope: [
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile",
      ].join(" "), // space seperated string
      response_type: "code",
      access_type: "offline",
      prompt: "consent",
    });
    const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${googleParams}`;
    window.location.href = googleLoginUrl;
  }
  const clickOnSlack = () => {
    const paramsForSlack = queryString.stringify({
      client_id: "3457754680432.3419446620199",
      user_scope: ["identity.basic", "identity.avatar", "identity.email"].join(
        ","
      ),
      redirect_uri: "https://localhost:3000",
    });
    const slackLoginUrl = `https://slack.com/oauth/v2/authorize?${paramsForSlack}`;
    window.location.href = slackLoginUrl;
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <SocialButton name="Google" image='/google.png' onClick={clickOnGoogle} />
      <SocialButton name="Twitter" image='/twitter.png' onClick={clickOnTwitter} />
      <SocialButton name="Facebook" image='/facebook.png' onClick={clickOnFacebook}/>
      <SocialButton name="Slack" image='/slack.png' onClick={clickOnSlack}/>
    </div>
  );
};
export default Home;
